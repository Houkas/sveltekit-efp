<script context="module" lang="ts">
  import { fade } from "svelte/transition";
  import { fetchStrapiRealisation } from "../../shared/strapi_service";
  import type { Realisation } from "../../types/realisation";
  import type { Load } from "@sveltejs/kit";
  import { urlStrapiEfpDEV } from "../../shared/config";

  //Pour loader de la data, ici consumer le store, la function load execute le code sur le server et sur le client.
  export const load: Load = async ({ params }) => {
    const slug = params.slug;
    const realisation: Realisation = await fetchStrapiRealisation(slug);
    if (realisation) {
      return {
        props: {
          realisation: realisation,
        },
      };
    } else {
      throw new Error();
    }
  };
</script>

<script lang="ts">
  export let realisation: Realisation;
</script>

<svelte:head>
  <title>Realisation</title>
  {#if realisation}
    <meta
      name="description"
      content={realisation.attributes.meta_description}
    />
  {:else}
    <meta
      name="description"
      content="Réalisation travaux de peinture entreprise EFP"
    />
  {/if}
</svelte:head>

<section class="container-content mt-[70px]">
  <div class="dashed dashed-top min-h-screen mx-auto content-box flex flex-col">

    <div class=" flex flex-col items-center">
      <h1
        class="px-4 bg-[#004E63] mt-[30px] uppercase font-bold tracking-widest text-[25px] lg:text-[60px] text-[#26FFF4] z-10 text-center"
      >
        {realisation.attributes.title}
      </h1>
      <div class="flex flex-row">
        <div
          class="cicle-gradient  block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 my-5"
        />
        <div
          class="cicle-gradient  block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 my-5"
        />
        <div
          class="cicle-gradient  block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 my-5"
        />
      </div>
      <img
        src={urlStrapiEfpDEV +
          realisation.attributes.miniature.data.attributes.url}
        alt=""
        class="object-cover w-[320px] h-[207px]"
      />
    </div>
    <div class="flex flex-row items-center justify-center">
      <div class="realisation container mx-auto bg-gray-200 w-[90%]">
        <section class="p-4">
          {#if realisation}
            <h1>{realisation.attributes.title}</h1>
            {@html realisation.attributes.body}
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
  .realisation {
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
