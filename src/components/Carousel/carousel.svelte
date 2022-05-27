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
    <img transition:fade {src} alt="" class="max-w-[1095px] z-5" />

    <div class=" flex flex-row items-end justify-between">
      <button class=" left-0 top-0 h-5 w-5" on:click={prev}>
        <img class="h-5 w-5 " src="/arrow_left.svg" alt="précédent" />
      </button>
      <button class=" right-0 top-0 h-5 w-5" on:click={next}>
        <img class="h-5 w-5 " src="/arrow_right.svg" alt="suivant" />
      </button>
    </div>
  </div>
{/each}

<style>
</style>
