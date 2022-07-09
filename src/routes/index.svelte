<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import LastRealisations from "../components/homePageSections/LastRealisations.svelte";
  import Description from "../components/homePageSections/Description.svelte";
  import LastArticles from "../components/homePageSections/LastArticles.svelte";
  import {
    fetchStrapiArticles,
    fetchStrapiRealisations,
  } from "../shared/strapi_service";

  export async function load() {
    const strapiArticles = await fetchStrapiArticles();
    const strapiReal = await fetchStrapiRealisations();
    if (strapiArticles && strapiReal) {
      return {
        props: {
          articles: strapiArticles,
          realisaions: strapiReal,
        },
      };
    } else {
      throw new Error();
    }
  }
</script>

<script lang="ts">
  $: y = 0;
  $: width = 0;
  $: height = 0;
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
<div class="fixed left-0 top-0 z-50 text-red-500">Y : {y}</div>
<div class="fixed left-0 top-10 z-50 text-red-500">Height : {height}</div>
<div class="fixed left-0 top-20 z-50 text-red-500">Width : {width}</div>-->

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
      class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col lg:flex-row lg:items-center"
    >
      <LastRealisations yScrollUser={y} deviceWidth={width} />
    </div>
  </section>

  <section class="container-content">
    <div
      class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col lg:flex-row lg:items-center relative z-20"
    >
      <LastArticles yScrollUser={y} deviceWidth={width} />
    </div>
  </section>
</div>

<style lang="scss">
  @import "index.scss";
</style>
