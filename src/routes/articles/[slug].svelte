<script lang="ts" context="module">
  import { fade } from 'svelte/transition';
  import { fetchStrapiArticle } from '../../shared/strapi_service'
  import type { Article } from '../../types/article';

  export async function load({ params }) {
    const slug = params.slug;
    const article:Article = await fetchStrapiArticle(slug);
    if(article){
      return {
        props: {
          article: article
        }
      }
    }
  }
</script>

<script>
	export let article;
</script>

<svelte:head>
  <title>Article</title>
  <meta name="description" content="$"/>
</svelte:head>

<div transition:fade class="article container mx-auto mt-7 bg-gray-200 min-h-screen">
  <section class=" p-4 border-2 border-solid border-stone-400 w-full">
    <h1>{article.attributes.title}</h1>
    {@html article.attributes.body}
  </section>
</div>

<style lang="scss">
  .article {
    section {
      margin-top: 70px;
    }
    :global(.kg-gallery-row){
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
