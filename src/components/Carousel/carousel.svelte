<script>
  import { fade, slide } from "svelte/transition";

  const carouselPhotos = [
    "/bg-home-efp.jpg",
    "/depot-efp.jpg",
    "/logo-efp.jpg",
  ];

  let index = 0;

  const next = () => {
    index = (index + 1) % carouselPhotos.length;
  };
  const prev = () => {
    index = index != 0 ? index - 1 : index + carouselPhotos.length - 1;
  };
</script>

{#each [carouselPhotos[index]] as src (index)}
  <div class="container-carousel absolute">
    <img transition:fade {src} alt="" class="img-carousel z-5" />

    <div class=" flex flex-row items-end justify-between">
      <button class="arrow-icon left-0 top-0 h-10 w-10 p-[10px] ml-[-2.5em] " on:click={prev}>
        <img class=" " src="/arrow_left.svg" alt="précédent" />
      </button>
      <button class="arrow-icon right-0 top-0 h-10 w-10 p-[10px] relative mr-[-2.5em] " on:click={next}>
        <img class=" scale-x-[-1] " src="/arrow_left.svg" alt="suivant" />
      </button>
    </div>
  </div>
{/each}

<style lang="scss">
  .container-carousel{
    width: 55vw;
    button{
      background-color:$vertGris;
    }
    .arrow-icon::before{
      position: absolute;
      content: "";
      height: 1.25rem;
      width: 1.25rem;
      margin-left: -10px;
    }
  }
</style>
