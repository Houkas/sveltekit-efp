<script context="module">
  export async function load({ fetch, params }) {
    const slug = params.slug;
    const res = await fetch(
      `https://efp-peinture.ghost.io/ghost/api/v4/content/posts/slug/${slug}/?key=8f8c4ecc07f4f673e96b16176a`
    );
    const datas = await res.json();
    const article = datas.posts[0];

    if (res.ok) {
      return {
        props: {
          article,
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
  export /**
   * @type {{ title: any; }}
   */
  let article;
</script>

<svelte:head>
  <title>Article</title>
  <meta name="description" content={article.meta_description} />
</svelte:head>

<div class="article container mx-auto mt-7 bg-gray-200 min-h-screen">
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
