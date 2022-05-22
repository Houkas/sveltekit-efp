<script context="module" lang="ts">

  import { fade } from "svelte/transition";
  import { fetchStrapiArticles } from "../../shared/strapi_service";
  import { Article } from "../../types/article";

  export async function load() {
    const articles: Article[] = await fetchStrapiArticles();
    if (articles) {
      return {
        props: {
          articles: articles,
        },
      };
    }
  }
</script>

<script>
  export let articles;
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
    {#if articles}
      {#each articles as article}
        <li class="m-2 p-2">
          <a class="m-2 p-2" href={`/articles/${article.attributes.slug}`}>
            {article.attributes.title}
          </a>
        </li>
      {/each}
    {/if}
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
