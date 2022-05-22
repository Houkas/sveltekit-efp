<script context="module">
  import { fade } from "svelte/transition";
  import { fetchGhostArticles } from "../../shared/ghost_service";
  import {fetchStrapiArticles} from "../../shared/strapi_service";
</script>

<svelte:head>
  <title>Articles et conseils de peinture</title>
  <meta
    name="description"
    content="Articles, conseils et tuto peinture pour vous aider dans vos choix de décoration intérieur et extérieur"
  />
</svelte:head>

<div transition:fade class="articles container mx-auto h-screen bg-gray-200">
  <p>Liste de tous les articles</p>
  <ul>
    {#await fetchStrapiArticles()}
      <p>... Waiting</p>
    {:then articles}
      {#each articles as article}
        <li class="m-2 p-2">
          <a class="m-2 p-2" href={`/articles/${article.slug}`}
            >{article.title}</a
          >
        </li>
      {/each}
    {:catch}
      <p>Erreur api</p>
    {/await}
  </ul>
</div>

<style lang="scss">
  .articles {
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
