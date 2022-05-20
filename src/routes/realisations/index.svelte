<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(
      "https://efp-peinture.ghost.io/ghost/api/v4/content/posts?key=8f8c4ecc07f4f673e96b16176a&filter=tag:realisation"
    );

    const datas = await res.json();
    const articles = datas.posts;
    console.log(articles);
    if (res.ok) {
      return {
        props: {
          articles,
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
  export let articles = [];
</script>

<svelte:head>
  <!-- elements go here -->
  <title>Realisations EFP</title>
  <meta
    name="description"
    content="Articles, conseils et tuto peinture pour vous aider dans vos choix de décoration intérieur et extérieur"
  />
</svelte:head>



<div class="articles container mx-auto h-screen bg-gray-200">
  <p>Realisations EFP</p>
  <ul>
    {#each articles as article}
      <li class="m-2 p-2">
        <a class="m-2 p-2" href={`/articles/${article.slug}`}>{article.title}</a>
      </li>
    {/each}
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
