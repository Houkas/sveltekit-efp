<script lang="ts">
  import { fade } from "svelte/transition";
  import Realisation from "../components/homePageSections/Realisation.svelte";
  import Description from "../components/homePageSections/Description.svelte"
  import LastArticles from "../components/homePageSections/LastArticles.svelte";
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

<!--Affichage du scroll y
<div class="fixed left-0 top-0 z-20 text-red-500">Y : {y}</div>
<div class="fixed left-0 top-10 z-20 text-red-500">Height : {height}</div>
<div class="fixed left-0 top-20 z-20 text-red-500">Width : {width}</div>-->

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
      class="flex flex-row items-center dashed dashed-top min-h-screen mx-auto content-box"
    >
      <Description yScrollUser={y} deviceWidth={width} />
    </div>
  </section>

  <section class="container-content">
    <div
      class="dashed dashed-top min-h-screen mx-auto content-box flex flex-row items-center"
    >
      <Realisation yScrollUser={y} deviceWidth={width} />
    </div>
  </section>

  <section class="container-content">
    <div class="dashed dashed-top min-h-screen mx-auto content-box flex flex-row items-center relative z-20">
      <LastArticles yScrollUser={y} deviceWidth={width}/>
    </div>
  </section>
</div>

<style lang="scss">
  @import "index.scss";
</style>
