<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import { checkingFixedOpened } from '../../features/all/checkingBurgerOpening';
	import { Validator } from '../../features/all/validator';
	import PhotosService from '../../features/photos/api';
	import { urPersonSrc } from '../../features/photos/yourPerson';
	import PhotoSmileSvg from '../../shared/svg/PhotoSmileSVG.svelte';
	import Button from '../../shared/ui/Button.svelte';
	import CheckBox from '../../shared/ui/CheckBox.svelte';
	import Input from '../../shared/ui/Input.svelte';
	import UploadImageInput from '../../shared/ui/UploadImageInput.svelte';
	import CheckUploadPhotoModal from './CheckUploadPhotoModal.svelte';
	import UploadedPhotoModal from './UploadedPhotoModal.svelte';

	let name = $state('');
	let phone = $state('');
	let position = $state('');
	let place = $state('');
	let city = $state('');
	let email = $state('');
	let files = $state(null);

	let agreement = $state(false);

	let formBlock: Element;

	const {photoValidator, nameValidator, phoneValidator, emailValidator} = Validator();

	let formErrors = $state({
		name: false,
		phone: false,
		position: false,
		place: false,
		city: false,
		email: false,
		files: false,
		agreement: false,
	})

	let formFirstSubmitted = $state(false);
	let isFormUploaded = $state(false);
	let isPhotoUploaded = $state(false);

	$effect(() => {
		checkingFixedOpened(isFormUploaded);
	});

	$effect(() => {
		if (formFirstSubmitted) {
			validateForm();
		}
	});

	$effect(() => {
		isPhotoUploaded = !!files;
	});

	const approveInjectPhoto = (isAccept: boolean) => {
		if (!isAccept) {
			files = null;
		}
		isPhotoUploaded = false;
	}

	const validateForm = () => {
		formErrors = {
			name: nameValidator(name),
			phone: phoneValidator(phone),
			position: !position,
			place: !place,
			city: !city,
			email: emailValidator(email),
			files: photoValidator(files),
			agreement: !agreement,
		};
	}

	const resetForm = () => {
		name = '';
		phone = '';
		phone = '';
		position = '';
		place = '';
		city = '';
		email = '';
		files = null;
	}

	const formMutation = createMutation({
		mutationFn: () => {
			if (!files) throw new Error('Пожалуйста, загрузите фотографию');
			return PhotosService.postForm({
				name: name.split(' ')[0],
				surname: name.split(' ')[1],
				phone: phone.trim(),
				position: position.trim(),
				place: place.trim(),
				city: city.trim(),
				email: email.trim(),
				photo: files[0],
			});
   		},
		onSuccess: (res) => {	
			resetForm();
			isFormUploaded = true;
			if (res?.image_url) {
				urPersonSrc.set(res.image_url);
			}
			formBlock.scrollIntoView({ behavior: 'smooth' });
		}
	});

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		formFirstSubmitted = true;
		validateForm();
		if (Object.values(formErrors).some(error => error)) {
			return;
		}
		if (!agreement) {
			return;
		}
		$formMutation.mutate();	
		// isFormUploaded = true;
		// isOpened = false;
		// files && urPersonSrc.set(URL.createObjectURL(files[0]));
	};
</script>
<div bind:this={formBlock} class="form-container">
	<UploadedPhotoModal 
		previewSrc={$urPersonSrc} 
		{isFormUploaded} 
		back={() => isFormUploaded = false}/>
	<CheckUploadPhotoModal 
		previewSrc={files && URL.createObjectURL(files[0])} 
		{isPhotoUploaded} 
		accept={() => approveInjectPhoto(true)}
		back={() => approveInjectPhoto(false)}/>
	{#if $urPersonSrc === 'images/your-person.png'}
		<h2 class="form-container__heading">
			Настало время
			<span class="form-container__heading__accent">войти в историю</span>
		</h2>
	{:else}
		<h2 class={["form-container__heading success", $urPersonSrc !== 'images/your-person.png' && 'uploaded']}>
			Ты сделал первый шаг. 
			<span class="form-container__heading__accent">Коридор вкуса ждёт тебя.</span>
		</h2>
		<p class="form-container__sub-heading">
			Это не просто переход – это путь длиной в 29 лет, который мы прошли вместе.
		</p>
	{/if}
	{#if $urPersonSrc === 'images/your-person.png'}
		<div class="form-container__task">
			<div class="form-container__task__smile">
				<PhotoSmileSvg/>
			</div>
			<p class="form-container__task__text">
				Твое фото станет частью живой инсталляции
				на стенде GLOBAL FOODS.
				Мы создаём «Карту вкуса» из лиц тех, кто 
				сделал рынок HoReCa таким, какой он есть.
			</p>
		</div>
		<p class="form-container__text">
			Стань частью истории,
			которую мы покажем всем!
		</p>
		<UploadImageInput bind:files error={formErrors.files}/>
		<form class="form-container__form" onsubmit={handleSubmit}>
			<Input 
				placeholder='Имя и фамилия' 
				class="form-input" 
				bind:value={name} 
				error={formErrors.name} 
				onInput={() => formFirstSubmitted && validateForm()}/>
			<Input placeholder='Телефон' class="form-input" isPhone={true} bind:value={phone} error={formErrors.phone}/>
			<Input placeholder='Должность' class="form-input" bind:value={position} error={formErrors.position}/>
			<Input placeholder='Название заведения' class="form-input" bind:value={place} error={formErrors.place}/>
			<Input placeholder='Город' class="form-input" bind:value={city} error={formErrors.city}/>
			<Input placeholder='E-mail' class="form-input" bind:value={email} error={formErrors.email}/>
			<CheckBox id='upload-form' bind:checked={agreement} error={formErrors.agreement}/>
			<Button content='Стать частью истории HoReCa' class="full-width"/>
		</form>
	{/if}
</div>

<style lang="scss">
	.form-container {
		flex-basis: 50%;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		overflow-y: auto;

		padding: 5rem 0 6.25rem 5.4375rem;

		@media (width < 1160px) {
			padding: 3.125rem 1rem;
		}

		&__heading {
			max-width: 30rem;

			// font-family: 'Cormorant Infant';
			font-size: 2.625rem;
			font-weight: 400;
			color: var(--white);

			@media (width < 700px) {
				font-weight: 700;
				font-size: 2rem;
			}

			&__accent {
				// font-family: 'Cormorant Infant';
				font-weight: 700;
				color: var(--white);

				@media (width < 1160px) {
					color: var(--light-color);
				}
			}
		}

		&__sub-heading {
			font-size: 1.5rem;
		}

		&__heading.uploaded {
			max-width: 50rem;
			text-align: center;

			@media (width < 800px) {
				text-align: left;
			}
		}

		&__task {
			display: flex;
			align-items: center;
			gap: 1.25rem;

			&__smile {
				min-width: 5.625rem;
			}

			&__text {
				max-width: 25rem;

				&__accent {
					color: var(--white);
				}
			}
		}

		&__text {
			max-width: 28rem;

			text-transform: uppercase;
			font-size: 1.5rem;
			font-weight: 700;
			color: var(--light-color);
		}

		&__form {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;

			
		}
	}
</style>