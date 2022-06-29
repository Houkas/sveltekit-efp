<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import { fetchStrapiRealisation } from "../../shared/strapi_service";
  import type { Realisation } from "../../types/realisation";
  import type { Load } from "@sveltejs/kit";

  //Pour loader de la data, ici consumer le store, la function load execute le code sur le server et sur le client.
  export const load:Load = async({ params }) =>{
    const slug = params.slug;
    const realisation: Realisation = await fetchStrapiRealisation(slug);
    if(realisation){
      return {
      props: {
        realisation: realisation,
      },
    };
    } else {
      throw new Error();
    }
    
  }
</script>

<script lang="ts">
  export let realisation:Realisation;
</script>

<svelte:head>
  <title>Realisation</title>
  {#if realisation}
    <meta name="description" content={realisation.attributes.meta_description} />
    {:else}
    <meta name="description" content="Réalisation travaux de peinture entreprise EFP" />
  {/if}

</svelte:head>

<div
  class="realisation container mx-auto mt-7 bg-gray-200 min-h-screen"
>
  <section class=" p-4 border-2 border-solid border-stone-400 w-full">
    {#if realisation}
      <h1>{realisation.attributes.title}</h1>
      {@html realisation.attributes.body}
      {:else}
      <p>Chargement du contenu...</p>
    {/if}
  </section>
</div>

<style lang="scss">
  .realisation {
    section {
      margin-top: 70px;
    }

    :global(.kg-gallery-image img) {
      max-width: 250px;
    }
    :global(.kg-file-card-icon) {
      max-width: 25px;
    }
    ul {
      li {
        a {
          border: solid 1px rgb(87, 87, 87);
        }
      }
    }
  }
</style>
