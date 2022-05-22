<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import { fetchStrapiPartenaires } from "../shared/strapi_service";
  import { Partenaire } from "../types/partenaire";
  import { urlStrapiEfpDEV } from '../shared/config';

  export async function load() {
    const partenaires: Partenaire[] = await fetchStrapiPartenaires();
    if (partenaires) {
      return {
        props: {
          partenaires: partenaires,
        },
      };
    }
  }
</script>

<script>
  export let partenaires;
</script>

<svelte:head>
  <title>EFP - Entreprise de peinture Bordeaux et alentours Gironde</title>
  <meta
    name="description"
    content="EFP entreprise de peinture située à Sauveterre-de-guyenne intervient pour vos projets de peinture intérieur ou extérieur en Gironde "
  />
</svelte:head>

<div transition:fade class="partenaires container mx-auto p-4">
  <h1>Partenaires</h1>
  {#if partenaires}
    {#each partenaires as partenaire}
      <p>{partenaire.attributes.name}</p>
      <img src="{urlStrapiEfpDEV}{partenaire.attributes.logo.data.attributes.url}" alt="test">
    {/each}
  {/if}
</div>

<style>
  .partenaires {
    /*min-height: 100vh;*/
    margin-top: 70px;
  }
</style>
