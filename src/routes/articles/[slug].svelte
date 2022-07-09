<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { fade } from "svelte/transition";
  import { fetchStrapiArticle } from "../../shared/strapi_service";
  import type { Article } from "../../types/article";
  import { urlStrapiEfpDEV } from "../../shared/config";

  //Pour loader de la data, ici consumer le store, la function load execute le code sur le server et sur le client.
  export let article: Article;
  export const load: Load = async ({ params }) => {
    const slug = params.slug;
    article = await fetchStrapiArticle(slug);
    if (article) {
      return {
        props: {
          article: article,
        },
      };
    } else {
      throw new Error();
    }
  };
</script>

<svelte:head>
  <title>Article</title>
  <meta name="description" content="$" />
</svelte:head>

<section class="container-content mt-[70px]">
  <div class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col">
    <div class=" flex flex-col items-center">
      <h1
        class="px-4 bg-[#004E63] mt-[30px] uppercase font-bold tracking-widest text-[25px] lg:text-[60px] text-[#26FFF4] z-[9] text-center"
      >
        {article.attributes.title}
      </h1>
      <div class="flex flex-row">
        <div
          class="cicle-gradient block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 my-5"
        />
        <div
          class="cicle-gradient block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 my-5"
        />
        <div
          class="cicle-gradient block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 my-5"
        />
      </div>
      <img
        src={urlStrapiEfpDEV + article.attributes.miniature.data.attributes.url}
        alt=""
        class="object-cover w-[320px] h-[207px]"
      />
    </div>
    <div class="flex flex-row items-center justify-center">
      <div class="realisation container mx-auto w-[90%] bg-gray-200">
        <section class="p-4 ">
          {#if article}
            <h1>{article.attributes.title}</h1>
            {@html article.attributes.body}
          {:else}
            <p>Chargement du contenu...</p>
          {/if}
        </section>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .content-box {
    padding: 0 80px 0 80px;
  }
  .container-content {
    width: 100%;

    .underline {
      margin-top: 45px;
      content: "";
      position: absolute;
      height: 52px;
      width: 80vh;
      background-color: $vertFonce;
      z-index: 1;
    }
    .bg-degrade {
      background: linear-gradient(180deg, #7dfeff 0%, #e0f8bc 100%);
    }
  }
  .dashed-top {
    background-image: linear-gradient(
      to right,
      $vertGris 66%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 25px 2px;
    background-repeat: repeat-x;
  }

  .dashed::before {
    background-position: left;
    width: 2px;
  }

  .dashed::after {
    background-position: right;
    right: 80px;
    z-index: 5;
    width: 5px;
  }

  .dashed::after,
  .dashed::before {
    content: "";
    position: absolute;
    min-height: 100vh;
    z-index: 10;
    background-image: linear-gradient($vertGris 66%, rgba(255, 255, 255, 0) 0%);
    background-size: 2px 25px;
    background-repeat: repeat-y;
  }
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
  // RESPONSIVE //
  @media (max-width: 768px) {
    .content-box {
      padding: 0;
    }

    .dashed::after {
      right: 0;
    }
  }
</style>
