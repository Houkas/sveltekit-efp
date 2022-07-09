<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import { fetchStrapiPartenaires } from "../shared/strapi_service";
  import type { Partenaire } from "../types/partenaire";
  import { urlStrapiEfpDEV } from "../shared/config";
  import Title from "../components/title/Title.svelte";

  export async function load() {
    const partenaires = await fetchStrapiPartenaires();
    if (partenaires) {
      return {
        props: {
          partenaires: partenaires,
        },
      };
    }
  }
</script>

<script lang="ts">
  export let partenaires: Partenaire[];
</script>

<svelte:head>
  <title>EFP - Entreprise de peinture Bordeaux et alentours Gironde</title>
  <meta
    name="description"
    content="EFP entreprise de peinture située à Sauveterre-de-guyenne intervient pour vos projets de peinture intérieur ou extérieur en Gironde "
  />
</svelte:head>

<section class="container-content mt-[70px]">
  <div class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col">
    <Title title="Partenaires" />

    <div class="flex flex-row items-center mt-5 justify-center">
      <ul class="w-[95%] flex flex-row justify-center flex-wrap">
        {#if partenaires && partenaires.length > 0}
          {#each partenaires as partenaire}
            <li class="mx-10 p-2 z-10">
              <div class="relative">
                <div class="relative max-w-xs overflow-hidden">
                  <img
                    src={urlStrapiEfpDEV +
                      partenaire.attributes.logo.data.attributes.url}
                    alt=""
                    class="object-cover max-w-[320px]"
                  />

                  <h3 class="text-[#004E63] text-2xl text-center">
                    {partenaire.attributes.name}
                  </h3>

                </div>
              </div>
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
  .partenaires {
    margin-top: 70px;
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
