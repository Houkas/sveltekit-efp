<script lang="ts">
    
  import { fade, slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import Carousel from "../Carousel/carousel.svelte";
  export let yScrollUser: number;
  export let deviceWidth: number;

</script>

<div class="h-screen w-1/3 flex flex-row items-center">
  <a href="/realisations" class="z-10">
    {#if yScrollUser >= 1200 && deviceWidth > 1280}
      <div
        transition:fade
        class="cicle-gradient absolute left-[40px] block content-[''] bg-[url('/circle_degrade.svg')] w-[40vh] h-[40vh] z-[-1] mt-[-20vh]"
      />
      <h2
        class={yScrollUser >= 1200 && deviceWidth > 1280 ? "anim-txt-lft" : "opacity-0"}
        out:fade
      >
        Réalisations
      </h2>
    {/if}
  </a>
</div>
<div class="h-screen w-2/3 flex flex-row items-center justify-center">
  <div class="h-screen flex items-end justify-center">
    {#if yScrollUser >= 1230 && deviceWidth > 1280}
      <div
        transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
        class="bg-degrade absolute w-1/4 h-[90%] "
      />
    {/if}
  </div>
  <Carousel />
</div>
<span class="indic-rea">Réalisations</span>

<style lang="scss">
  a {
    h2 {
      text-transform: uppercase;
      margin: 10px 0 10px 0;
      font-size: 40px;
      color: $vertFonce;
      font-weight: bold;
      z-index: 10;
      font-size: 80px;
      line-height: 0px;
      letter-spacing: 0.16em;
      opacity: 0;
    }
    .anim-txt-lft {
      animation: slideLeftToRight ease 0.4s forwards 0.6s;
    }
  }
  .bg-degrade {
    background: linear-gradient(180deg, #7dfeff 0%, #e0f8bc 100%);
  }
  .indic-rea {
    position: absolute;
    transform-origin: 0 0;
    transform: rotate(90deg);
    text-transform: uppercase;
    font-family: "Zen Kaku Gothic New", sans-serif;
    color: $vertFonce;
    right: -1.75em;
    margin-top: -5em;
    font-size: 11.5px;
    padding: 5px;
    z-index: 11;
    background-color: $vertGris;
  }

  @keyframes slideLeftToRight {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    100% {
      transform: translateX(40px);
      opacity: 1;
      opacity: 1;
    }
  }
</style>
