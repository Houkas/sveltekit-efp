<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import { apiArticlesData } from "../../shared/store";
  import type { Article } from "src/types/article";
  import { urlStrapiEfpDEV } from "../../shared/config";
  import Blob from "../Blob.svelte";

  export let yScrollUser: number;
  export let deviceWidth: number;
  let yScrollUserTrigger: number;
  let yScrollUserTriggerBar: number;

  if (deviceWidth < 640) {
    yScrollUserTrigger = 1275;
    yScrollUserTriggerBar = 1320
  } else if (deviceWidth > 1024) {
    yScrollUserTrigger = 1800;
    yScrollUserTriggerBar = 1800;
  }

  let articles: Article[] = [];

  apiArticlesData.subscribe((values) => {
    articles = values;
  });

  articles = articles.sort(
    (a, b) =>
      Date.parse(b.attributes.createdAt) - Date.parse(a.attributes.createdAt)
  );
  articles = articles.slice(0, 3);
  console.log(articles);
</script>

<div
  class="lg:h-screen w-screen lg:w-1/3 flex flex-col lg:flex-row items-center justify-center"
>
  <a href="/articles">
    {#if yScrollUser >= yScrollUserTrigger && deviceWidth > 1024}
      <h2
        class="{yScrollUser >= yScrollUserTrigger
          ? 'anim-txt-lft'
          : 'opacity-0'} leading-20 flex flex-row lg:flex-col"
        out:fade
      >
        <span class="lg:ml-1">Nos</span>
        <span class="ml-1 lg:ml-5">Dernières</span>
        <span class="ml-1 lg:ml-10">Actualités</span>
      </h2>
      <Blob />
    {:else}
      <div
        transition:fade
        class="cicle-gradient absolute left-[70px] block content-[''] bg-[url('/circle_degrade.svg')] w-[5vh] h-[5vh] z-[-1] mt-[1.5vh] "
      />
      <h2
        class="{yScrollUser >= yScrollUserTrigger
          ? 'anim-txt-lft'
          : 'opacity-0'}"
        out:fade
      >
        Nos dernères actualités
      </h2>
    {/if}
    
  </a>
</div>
<div
  class="h-screen w-screen lg:w-2/3 flex flex-row items-center justify-center"
>
  <div class="h-screen flex items-start justify-center">
    {#if yScrollUser >= yScrollUserTriggerBar}
      <div
        transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
        class="bg-degrade absolute w-1/2 lg:w-1/4 h-[90%] z-[-1] "
      />
    {/if}
    <div class="flex flex-col justify-center img-container">
      {#each articles as article, i}
        <a href={"/articles/" + article.attributes.slug}>
          <div class="relative">
            <div class="relative max-w-xs overflow-hidden">
              <img
                src={urlStrapiEfpDEV +
                  article.attributes.miniature.data.attributes.url}
                alt=""
                class="object-cover w-full h-full "
              />
              <div
                class="absolute w-full h-[82%] py-2.5 text-center leading-4 bg-[#E2E9E9]/[.75] top-5 flex items-center justify-center"
              >
                <h3 class="text-[#004E63] text-2xl">
                  {article.attributes.title}
                </h3>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
<span class="indic-last-articles">Acutlités</span>

<style lang="scss">
  a {
    h2 {
      text-transform: uppercase;
      margin: 10px 0 10px 0;
      font-size: 40px;
      color: $vertFonce;
      font-weight: bold;
      z-index: 10;
      font-size: 80px;
      letter-spacing: 0.16em;
      opacity: 0;
    }
    .anim-txt-lft {
      animation: slideLeftToRight ease 0.4s forwards 0.6s;
    }
  }
  .bg-degrade {
    background: linear-gradient(
      180deg,
      #e1f8bb 0%,
      #f8f6ab 15.42%,
      #f8faeb 100%
    );
  }
  .img-container img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .img-container a:nth-child(1) .img-container img:nth-child(3) {
    margin-left: 5em;
  }
  .img-container a:nth-child(2) {
    margin-left: -5em;
  }
  .indic-last-articles {
    position: absolute;
    transform-origin: 0 0;
    transform: rotate(90deg);
    text-transform: uppercase;
    font-family: "Zen Kaku Gothic New", sans-serif;
    color: $vertFonce;
    right: -0.35em;
    margin-top: -5em;
    font-size: 11.5px;
    padding: 5px;
    z-index: 11;
    background-color: $vertGris;
  }

  @media (max-width: 768px) {
    a {
      h2 {
        font-size: 25px;
        display: block;
        margin: 15px auto 0 12vw;
      }
    }
    .img-container a:nth-child(2){
      margin-left: 0em;
    }

    .indic-last-articles {
      display: none;
    }
    .anim-txt-lft-mobile {
      animation: slideLeftToRightMobile ease 0.4s forwards 0.6s;
    }
  }

  @keyframes slideLeftToRight {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    100% {
      transform: translateX(40px);
      opacity: 1;
      opacity: 1;
    }
  }
  @keyframes slideLeftToRightMobile {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    100% {
      transform: translateX(40px);
      opacity: 1;
      opacity: 1;
    }
  }
</style>
