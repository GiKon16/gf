<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const mainPerson = ref<string>('');
const bgPersons = ref<string[]>(Array(35).fill(''));

const mainPersonFade = ref(false);
const bgPersonsFade = ref(Array(35).fill(false));

const isConnected = ref(false);
const error = ref<string | null>(null);

let ws: WebSocket | null = null;
let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
let reconnectAttempts = 0;

const WS_URL = 'wss://vmeste29.globalfoods.ru/ws/photos/global';

function fadeMainPerson(newUrl: string) {
	mainPersonFade.value = true;
	setTimeout(() => {
		mainPerson.value = newUrl;
		mainPersonFade.value = false;
	}, 500);
}

function fadeBgPerson(index: number, newUrl: string) {
	const fades = bgPersonsFade.value.slice();
	fades[index] = true;
	bgPersonsFade.value = fades;
	setTimeout(() => {
		const imgs = bgPersons.value.slice();
		imgs[index] = newUrl;
		bgPersons.value = imgs;
		const fades2 = bgPersonsFade.value.slice();
		fades2[index] = false;
		bgPersonsFade.value = fades2;
	}, 500);
}

function connectWebSocket() {
	error.value = null;
	ws = new WebSocket(WS_URL);

	ws.onopen = () => {
		isConnected.value = true;
		reconnectAttempts = 0;
		error.value = null;
		console.info('[WebSocket] Connected');
	};

	ws.onerror = e => {
		error.value = 'Ошибка соединения с сервером';
		console.error('[WebSocket] Error', e);
	};

	ws.onclose = e => {
		isConnected.value = false;
		console.warn('[WebSocket] Disconnected', e);
		scheduleReconnect();
	};

	ws.onmessage = event => {
		try {
			const data = JSON.parse(event.data);
			console.log(data);

			if (data.action === 'main' && data.photo?.image_url) {
				if (mainPerson.value !== data.photo.image_url) {
					fadeMainPerson(data.photo.image_url);
				}
			}

			if (
				(data.action === 'mosaic_init' || data.action === 'mosaic_replace') &&
				typeof data.index === 'number' &&
				data.photo?.image_url
			) {
				if (
					data.index >= 0 &&
					data.index < 35 &&
					bgPersons.value[data.index] !== data.photo.image_url
				) {
					fadeBgPerson(data.index, data.photo.image_url);
				}
			}
		} catch (e) {
			error.value = 'Ошибка парсинга данных';
			console.error('[WebSocket] Parse error:', e, event.data);
		}
	};
}

function scheduleReconnect() {
	if (reconnectTimeout) clearTimeout(reconnectTimeout);
	reconnectAttempts++;
	const delay = Math.min(30000, 1000 * 2 ** reconnectAttempts);
	reconnectTimeout = setTimeout(() => {
		console.info(`[WebSocket] Reconnecting (attempt ${reconnectAttempts})...`);
		connectWebSocket();
	}, delay);
}

onMounted(() => {
	connectWebSocket();
});

onBeforeUnmount(() => {
	if (ws) ws.close();
	if (reconnectTimeout) clearTimeout(reconnectTimeout);
});
</script>

<template>
	<div class="tv">
		<div class="bg-persons">
			<div class="top-shadow"></div>
			<div class="right-shadow"></div>
			<div class="bottom-shadow"></div>
			<div class="left-shadow"></div>
			<template v-for="row in 5" :key="row">
				<div class="bg-persons-row">
					<template v-for="col in 7" :key="col">
						<div class="bg-person">
							<img
								class="bg-person-img"
								:src="bgPersons[(row - 1) * 7 + (col - 1)]"
								:class="{ fade: bgPersonsFade[(row - 1) * 7 + (col - 1)] }"
								alt="Ваше фото"
							/>
						</div>
					</template>
				</div>
			</template>
		</div>
		<div class="main-persons">
			<div class="main-person">
				<img
					class="main-person-img"
					:src="mainPerson"
					:class="{ fade: mainPersonFade }"
					alt="Ваше фото"
				/>
			</div>
		</div>
		<div v-if="!isConnected" class="status error">
			<span>Нет соединения с сервером.</span>
			<span v-if="error">{{ error }}</span>
		</div>
	</div>
</template>

<style scoped>
.top-shadow,
.right-shadow,
.bottom-shadow,
.left-shadow {
	position: absolute;
}

.top-shadow,
.bottom-shadow {
	width: 100%;
	height: 20%;
	z-index: 3;
}

.right-shadow,
.left-shadow {
	width: 20%;
	height: 100%;
	z-index: 4;
}

.top-shadow {
	top: 0;
	left: 0;

	background: linear-gradient(0deg, rgba(21, 21, 21, 0) 0%, #151515 100%);
}

.bottom-shadow {
	bottom: 0;
	right: 0;

	background: linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, #151515 100%);
}

.right-shadow {
	bottom: 0;
	right: 0;

	background: linear-gradient(90deg, rgba(21, 21, 21, 0) 0%, #151515 100%);
}

.left-shadow {
	top: 0;
	left: 0;

	background: linear-gradient(-90deg, rgba(21, 21, 21, 0) 0%, #151515 100%);
}

.tv {
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	overflow: hidden;

	background-color: black;
}

.bg-persons {
	display: flex;
	flex-direction: column;
	gap: 0.3rem;

	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
}

.bg-person {
	width: 130px;
	height: 130px;

	overflow: hidden;
	border-radius: 5px;
}

.bg-person-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 0.5s;
	opacity: 1;
}
.bg-person-img.fade {
	opacity: 0;
}

.bg-persons-row {
	display: flex;
	gap: 0.3rem;
}

.main-persons {
	display: flex;
	gap: 0.5rem;

	z-index: 1;
}

.main-person {
	width: 27vw;
	height: 27vw;

	overflow: hidden;

	border-radius: 5px;
	box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.7);
}

.main-person-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 0.5s;
	opacity: 1;
}
.main-person-img.fade {
	opacity: 0;
}

.status.error {
	position: absolute;
	bottom: 16px;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(0, 0, 0, 0.7);
	color: #fff;
	padding: 8px 16px;
	border-radius: 8px;
	font-size: 1.1rem;
	z-index: 10;
}

@media (width > 900px) {
	.bg-person {
		width: 15vw;
		height: 15vw;
	}
}
</style>
