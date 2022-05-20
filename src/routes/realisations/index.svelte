<script context="module">
  import { fade } from 'svelte/transition';
  export async function load({ fetch }) {
    const res = await fetch(
      "https://efp-peinture.ghost.io/ghost/api/v4/content/posts?key=8f8c4ecc07f4f673e96b16176a&filter=tag:realisation"
    );

    const datas = await res.json();
    const realisations = datas.posts;
    if (res.ok) {
      return {
        props: {
          realisations,
        },
      };
    } else {
      return {
        error: res.message,
      };
    }
  }
</script>

<script>
  /**
   * @type {any[]}
   */
  export let realisations = [];
</script>

<svelte:head>
  <!-- elements go here -->
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
        <a class="m-2 p-2" href={`/realisations/${realisation.slug}`}>{realisation.title}</a>
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
