<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import { fetchStrapiRealisation } from "../../shared/strapi_service";
  import { Realisation } from "../../types/realisation";
  import { onMount } from "svelte";

  export async function load({ params }) {
    const slug = params.slug;
    const realisation: Realisation = await fetchStrapiRealisation(slug);
    return {
      props: {
        realisation: realisation,
      },
    };
  }
</script>

<script>
  export let realisation;
</script>

<svelte:head>
  <title>Realisation</title>
  <meta name="description" content={realisation.attributes.meta_description} />
</svelte:head>

<div
  transition:fade
  class="realisation container mx-auto mt-7 bg-gray-200 min-h-screen"
>
  <section class=" p-4 border-2 border-solid border-stone-400 w-full">
    <h1>{realisation.attributes.title}</h1>
    {@html realisation.attributes.body}
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
