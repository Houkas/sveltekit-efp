<script>
  import { fade, slide } from "svelte/transition";

  const carouselPhotos = [
    "/bg-home-efp.jpg",
    "/depot-efp.jpg",
    "/logo-efp.jpg",
  ];

  let index = 0;

  const interval = setInterval(function() {
   next();
  }, 4000);

  const next = () => {
    index = (index + 1) % carouselPhotos.length;
  };
  const prev = () => {
    index = index != 0 ? index - 1 : index + carouselPhotos.length - 1;
  };
  const btnNext = () => {
    next();
    clearInterval(interval);
  }
  const btnPrev = () => {
    prev();
    clearInterval(interval);
  }

  let isNavHidden = true;
  function handleMouseOver(){
    isNavHidden = !isNavHidden;
  }
  
</script>

{#each [carouselPhotos[index]] as src (index)}
  <div class="container-carousel absolute">
    <a href="/realisations" class="link">
      <img {src} transition:fade  alt="" class="img-carousel z-5" on:mouseover={handleMouseOver}/>
    </a>

    <div class="nav-caroussel flex flex-row items-end justify-between {isNavHidden == true ? 'opacity-0' : 'opacity-100'}">
      <button class="arrow-icon left-0 top-0 h-10 w-10 p-[10px] ml-[-1.5em] mt-[-.5em] radius-5" on:click={btnPrev}>
        <img class=" " src="/arrow_left.svg" alt="précédent" />
      </button>
      <button class="arrow-icon right-0 top-0 h-10 w-10 p-[10px] relative mr-[-1.5em] mt-[-.5em] radius-5" on:click={btnNext}>
        <img class=" scale-x-[-1] " src="/arrow_left.svg" alt="suivant" />
      </button>
    </div>
  </div>
{/each}

<style lang="scss">
  .container-carousel{
    width: 55vw;
    button{
      border-radius: 20px;
      background-color:$vertGris;
      transition: transform ease-in 0.1s;
      //background: linear-gradient(51.03deg, rgba(248, 241, 88, 0) -10.35%, rgba(248, 241, 88, 0.2) -5.3%, rgba(178, 236, 194, 0.3722) 23.92%, rgba(153, 243, 255, 0.6459) 60.2%, rgba(130, 247, 255, 0.8643) 72.08%, #79FFFF 85.02%, #79FFFF 85.03%);
    }
    .arrow-icon:active{
      transform: scale(0.8);
    }
    .arrow-icon::before{
      position: absolute;
      content: "";
      height: 1.25rem;
      width: 1.25rem;
      margin-left: -10px;
    }
    .nav-caroussel{
      transition: opacity 0.3s;
      -webkit-transition: opacity 0.3s;
    }
  }
</style>
