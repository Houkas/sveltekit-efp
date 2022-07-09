<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import type { Realisation } from "../../types/realisation";
  import { apiRealisationsData } from "../../shared/store";
  import { urlStrapiEfpDEV } from "../../shared/config";
  import type { Load } from "@sveltejs/kit";
  import { fetchStrapiRealisations } from "../../shared/strapi_service";
  import Title from "../../components/title/Title.svelte";

  export let realisations: Realisation[] = [];

  //Pour loader de la data, ici consumer le store, la function load execute le code sur le server et sur le client.
  export const load: Load = async () => {
    realisations = await fetchStrapiRealisations();
    if (realisations) {
      return {
        props: {
          realisations: realisations,
        },
      };
    } else {
      throw new Error();
    }
  };
</script>

<svelte:head>
  <title>Realisations EFP</title>
  <meta
    name="description"
    content="Articles, conseils et tuto peinture pour vous aider dans vos choix de décoration intérieur et extérieur"
  />
</svelte:head>
<section class="container-content mt-[70px]">
  <div class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col">
    <Title title="Réalisations" />

    <div class="flex flex-row lg:items-center mt-5 justify-center ">
      <ul class="w-[95%] flex flex-row justify-center flex-wrap bg-degrade">
        {#if realisations && realisations.length > 0}
          {#each realisations as realisation}
            <li class="mx-10 p-2 z-10">
              <a
                class="m-2 p-2 "
                href={`/realisations/${realisation.attributes.slug}`}
              >
                <div class="relative">
                  <div class="relative max-w-xs overflow-hidden">
                    <img
                      src={urlStrapiEfpDEV +
                        realisation.attributes.miniature.data.attributes.url}
                      alt=""
                      class="object-cover w-[320px] h-[207px]"
                    />
                    <div
                      class="absolute w-full h-[84%] h-[-webkit-fill-available] py-2.5 text-center leading-4 bg-[#E2E9E9]/[.75] top-0 flex items-center justify-center"
                    >
                      <h3 class="text-[#004E63] text-2xl">
                        {realisation.attributes.title}
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
  .realisations {
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
