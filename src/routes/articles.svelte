<script context="module">
  export async function load({ fetch }) {

    const res = await fetch(
      "https://efp-peinture.ghost.io/ghost/api/v4/content/posts?key=8f8c4ecc07f4f673e96b16176a&filter=tag:article"
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
  <title>Articles et conseils de peinture</title>
  <meta
    name="description"
    content="Articles, conseils et tuto peinture pour vous aider dans vos choix de décoration intérieur et extérieur"
  />
</svelte:head>

<p>articles page</p>

<div class="articles">
  <ul>
    {#each articles as article}
      <li>
        <h1>{article.title}</h1>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
    .articles{
        
        min-height: 100vh;
        display: flex;
        align-items: center;
        
        ul{
            
        }
    }
</style>
