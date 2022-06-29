<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import type { Article } from "src/types/article";
  import { apiArticlesData } from '../../shared/store';

  export let articles: Article[] = []
  
  //Pour loader de la data, ici consumer le store, la function load execute le code sur le server et sur le client.
  export async function load() {
    apiArticlesData.subscribe((values) => {
      articles = values;
    });
    if (articles) {
      return {
        props: {
          articles: articles,
        },
      };
    } else {
      throw new Error();
    }
  }
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
    {#if articles && articles.length > 0}
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
