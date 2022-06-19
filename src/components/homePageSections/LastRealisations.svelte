<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import Carousel from "../Carousel/carousel.svelte";

  export let yScrollUser: number;
  export let deviceWidth: number;
  let yScrollUserTrigger: number;

  if (deviceWidth < 640) {
    yScrollUserTrigger = 380;
  } else if (deviceWidth > 1280) {
    yScrollUserTrigger = 1265;
  }
</script>

<div
  class="lg:h-screen w-screen lg:w-1/3 flex flex-col lg:flex-row items-center"
>
  <a href="/realisations" class="z-10">
    {#if yScrollUser >= yScrollUserTrigger}
      <div
        transition:fade
        class="cicle-gradient absolute left-[40px] block content-[''] bg-[url('/circle_degrade.svg')] w-[40vh] h-[40vh] z-[-1] mt-[-10vh]"
      />
      <h2
        class={yScrollUser >= yScrollUserTrigger ? "anim-txt-lft" : "opacity-0"}
        out:fade
      >
        Réalisations
      </h2>
    {/if}
  </a>
</div>
<div class="lg:h-screen w-screen lg:w-2/3 flex flex-col lg:flex-row items-center justify-center">
  <div class="h-screen flex items-end justify-center">
    {#if yScrollUser >= yScrollUserTrigger}
      <div
        transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
        class="bg-degrade absolute w-1/2 lg:w-1/4 h-[90%] "
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

  @media (max-width: 768px) {
    a {
      display: block;
      margin: 0 auto;
      h2 {
        font-size: 25px;
        letter-spacing: 0.16em;
      }
    }
    .cicle-gradient {
      width: 5vh;
      height: 5vh;
      margin-top: 1.5vh;
      left: 70px;
    }
    .indic-rea {
      display: none;
    }
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
