<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import Carousel from "../components/Carousel/carousel.svelte";
  $: y = 0;
  $: width = 0;
  $: height = 0;
  const isAnimated: boolean = y > 25 ? true : false;
</script>

<svelte:head>
  <title>EFP - Entreprise de peinture Bordeaux et alentours Gironde</title>
  <meta
    name="description"
    content="EFP entreprise de peinture située à Sauveterre-de-guyenne intervient pour vos projets de peinture intérieur ou extérieur en Gironde "
  />
</svelte:head>

<svelte:window
  bind:scrollY={y}
  bind:innerHeight={height}
  bind:innerWidth={width}
/>

<!--Affichage du scroll y-->
<div class="fixed left-0 top-0 z-20 text-red-500">Y : {y}</div>
<div class="fixed left-0 top-10 z-20 text-red-500">Height : {height}</div>
<div class="fixed left-0 top-20 z-20 text-red-500">Width : {width}</div>

<div transition:fade class="content-container">
  <section class="container-content ">
    <div class="content-video mx-auto">
      <video autoplay loop muted>
        <source src="/intro2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 class="flex flex-col">
        <span class="h-efp">EFP</span>
        <span class="h-entreprise">entreprise</span>
        <span class="h-peinture">de peinture</span>
      </h1>
    </div>
  </section>

  <section class="container-content">
    <div
      class="content-desc dashed dashed-top min-h-screen mx-auto content-box"
    >
      {#if (y > 200 && width > 1280) || (y >= 0 && width < 640)}
        <div
          transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
          class="yellow-rec"
        />
      {/if}

      <!--
        Trouver une solution pour que ce contenu soit bien indexé par le crawler google
        car il est n'est pas dans le dom tant que scroll y < 400
      -->
      {#if (y > 400 && width > 1280) || (y >= 0 && width < 640)}
        <div
          transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
          class="grey-rec"
        >
          <h2>Lorem ipsum ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            ante ante. Nam semper, mauris vitae aliquam facilisis, nulla mauris
            porttitor dui, sodales faucibus ligula felis quis augue. Praesent
            lobortis aliquam tempor. Vestibulum quis vestibulum ex. Sed eu
            malesuada metus. Class aptent taciti sociosqu.<br />
          </p>
          <p>
            Ut quis elit iaculis, porta arcu et, aliquam sapien. Nulla blandit
            ante tincidunt ex mollis aliquet. Integer et pretium felis. In
            varius finibus eros ut rutrum. Pellentesque mauris libero,
            scelerisque ut ornare id, aliquam nec ex. In vehicula pellentesque
            vehicula. Aliquam consequat erat eu elit egestas, quis malesuada
            ligula consequat. Aenean sit amet posuere massa.
          </p>
        </div>
      {/if}

      <img
        class="depot"
        src="/depot-efp.jpg"
        alt="Dépot EFP à Saveterre de Guyenne"
      />
      <span class="indic-desc">Qui sommes-nous ?</span>
    </div>
  </section>

  <section class="container-content">
    <div
      class="dashed dashed-top min-h-screen mx-auto content-box content-realisation flex flex-row items-center"
    >
      <div class="h-screen w-1/3 flex flex-row items-center">
        <a href="/realisations" class="z-10">
          {#if y >= 1200 && width > 1280}
            <div
              transition:fade
              class="cicle-gradient absolute left-[40px] block content-[''] bg-[url('/circle_degrade.svg')] w-[40vh] h-[40vh] z-[-1] mt-[-20vh]"
            />
            <h2
              class={y >= 1200 && width > 1280 ? "anim-txt-lft" : "opacity-0"}
              out:fade
            >
              Réalisations
            </h2>
          {/if}
        </a>
      </div>
      <div class="h-screen w-2/3 flex flex-row items-center">
        <Carousel />
      </div>
      <span class="indic-rea">Réalisations</span>
    </div>
  </section>

  <section class="container-content">
    <div class="dashed dashed-top min-h-screen mx-auto content-box" />
  </section>
</div>

<style lang="scss">
  @import "index.scss";
</style>
