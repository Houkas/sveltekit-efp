<script context="module" lang="ts">
  import { fade } from 'svelte/transition';
  import { fetchStrapiRealisations } from '../../shared/strapi_service';
  import { Realisation } from '../../types/realisation';

  export async function load() {
    const realisations: Realisation[] = await fetchStrapiRealisations();
    if (realisations) {
      return {
        props: {
          realisations: realisations,
        },
      };
    }
  }
</script>

<script>
  export let realisations;
</script>

<svelte:head>
  <title>Realisations EFP</title>
  <meta
    name="description"
    content="Articles, conseils et tuto peinture pour vous aider dans vos choix de décoration intérieur et extérieur"
  />
</svelte:head>

<div transition:fade class="realisations container mx-auto h-screen bg-gray-200">
  <p>Realisations EFP</p>
  <ul>
    {#each realisations as realisation}
      <li class="m-2 p-2">
        <a class="m-2 p-2" href={`/realisations/${realisation.attributes.slug}`}>
          {realisation.attributes.title}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .realisations {
    margin-top: 70px;
    min-height: 100vh;

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
