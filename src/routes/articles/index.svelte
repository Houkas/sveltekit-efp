<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import type { Article } from "src/types/article";
  import { apiArticlesData } from "../../shared/store";
  import { urlStrapiEfpDEV } from "../../shared/config";
  import type { Load } from "@sveltejs/kit";
  import { fetchStrapiArticles } from "../../shared/strapi_service";
  import Title from "../../components/title/Title.svelte";

  export let articles: Article[] = [];

  //Pour loader de la data, ici consumer le store, la function load execute le code sur le server et sur le client.
  export const load: Load = async () => {
    articles = await fetchStrapiArticles();
    if (articles) {
      return {
        props: {
          articles: articles,
        },
      };
    } else {
      throw new Error();
    }
  };
</script>

<svelte:head>
  <title>Articles et conseils de peinture</title>
  <meta
    name="description"
    content="Articles, conseils et tuto peinture pour vous aider dans vos choix de décoration intérieur et extérieur"
  />
</svelte:head>

<section class="container-content mt-[70px]">
  <div class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col">
    
    <Title title="Articles"></Title>

    <div class="flex flex-row items-center mt-5 justify-center">
      <ul class="w-[95%] flex flex-row justify-center flex-wrap bg-degrade">
        {#if articles && articles.length > 0}
          {#each articles as article}
            <li class="mx-10 p-2 z-10">
              <a
                class="m-2 p-2 "
                href={`/articles/${article.attributes.slug}`}
              >
                <div class="relative">
                  <div class="relative max-w-xs overflow-hidden">
                    <img
                      src={urlStrapiEfpDEV +
                        article.attributes.miniature.data.attributes.url}
                      alt=""
                      class="object-cover w-[320px] h-[207px]"
                    />
                    <div
                      class="absolute w-full h-[84%] h-[-webkit-fill-available] py-2.5 text-center leading-4 bg-[#E2E9E9]/[.75] top-0 flex items-center justify-center"
                    >
                      <h3 class="text-[#004E63] text-2xl">
                        {article.attributes.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          {/each}
        {/if}
      </ul>
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
      width: 60vh;
      background-color: $vertFonce;
      z-index: 1;
    }
    .bg-degrade {
      background: linear-gradient(
        180deg,
        #e1f8bb 0%,
        #f8f6ab 15.42%,
        #f8faeb 100%
      );
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
