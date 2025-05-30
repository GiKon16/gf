<div class="tv">
  <div class="bg-persons">
    <div class="top-shadow"></div>
		<div class="right-shadow"></div>
		<div class="bottom-shadow"></div>
		<div class="left-shadow"></div>
    {#each Array(5) as _}
      <div class="bg-persons-row">
        {#each Array(7) as _}
          <div class="bg-person">
            <img class="bg-person-img" src="person-1.png" alt="Человек">
          </div>
        {/each}
      </div>
    {/each}
  </div>
  <div class="main-persons">
    {#each Array(3) as _}
      <div class="main-person">
        <img class="main-person-img" src="person-1.png" alt="Человек">
      </div>
    {/each}
  </div>
</div>

<style>
  .top-shadow,
  .right-shadow,
  .bottom-shadow,
  .left-shadow {
    position: absolute;
  }

  .top-shadow,
  .bottom-shadow {
    width: 100%;
    height: 40%;
    z-index: 3;
  }

  .right-shadow,
  .left-shadow {
    width: 40%;
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
  }

  .bg-person-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }

  .main-person-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (width > 900px) {
    .bg-person {
      width: 15vw;
      height: 15vw;
    }
  }
</style>