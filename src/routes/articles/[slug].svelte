<script lang="ts" context="module">
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { fetchGhostArticle } from '../../shared/ghost_service'
  import { Article } from '../../types/article';

  export async function load({ fetch, params }) {
    const slug = params.slug;
    const article:Article = await fetchGhostArticle(slug);
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
  <meta name="description" content={article.meta_description} />
</svelte:head>

<div transition:fade class="article container mx-auto mt-7 bg-gray-200 min-h-screen">
  <section class=" p-4 border-2 border-solid border-stone-400 w-full">
    <h1>{article.title}</h1>
    {@html article.html}
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
