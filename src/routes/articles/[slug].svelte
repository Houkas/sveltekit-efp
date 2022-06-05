<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  import { fade } from "svelte/transition";
  import { fetchStrapiArticle } from "../../shared/strapi_service";
  import type { Article } from "../../types/article";

  export const load:Load = async({ params }) =>{
    const slug = params.slug;
    const article: Article = await fetchStrapiArticle(slug);
    return {
      props: {
        article: article,
      },
    };
  }
</script>

<script lang="ts">
  export let article: Article;
</script>

<svelte:head>
  <title>Article</title>
  <meta name="description" content="$" />
</svelte:head>

<div
  class="article container mx-auto mt-7 bg-gray-200 min-h-screen"
>
  <section class=" p-4 border-2 border-solid border-stone-400 w-full">
    {#if article}
      <h1>{article.attributes.title}</h1>
      {@html article.attributes.body}
      {:else}
      <p>Chargement du contenu...</p>
    {/if}
  </section>
</div>

<style lang="scss">
  .article {
    section {
      margin-top: 70px;
    }
    :global(.kg-gallery-row) {
      display: flex;
      flex-direction: row;
    }
    :global(.kg-gallery-image img) {
      max-width: 250px;
      margin: 15px;
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
