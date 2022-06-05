<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import { apiArticlesData } from "../../shared/store";
  import type { Article } from "src/types/article";
  import { urlStrapiEfpDEV } from "../../shared/config";

  export let yScrollUser: number;
  export let deviceWidth: number;

  let articles: Article[] = [];
  let lastArticlesImg: string[] = [];

  apiArticlesData.subscribe((values) => {
    articles = values;
  });

  articles = articles.sort(
    (a, b) =>
      Date.parse(b.attributes.createdAt) - Date.parse(a.attributes.createdAt)
  );
  articles = articles.slice(0, 3);
  console.log(articles)
  /*articles.forEach((article) => {
    lastArticlesImg.push(
      urlStrapiEfpDEV + article.attributes.miniature.data.attributes.url
    );
  });*/
</script>

<div class="h-screen w-1/3 flex flex-row items-center">
  <a href="/articles">
    {#if yScrollUser >= 1800 && deviceWidth > 1280}
      <h2
        class="{yScrollUser >= 1800 && deviceWidth > 1280
          ? 'anim-txt-lft'
          : 'opacity-0'} leading-20 flex flex-col"
        out:fade
      >
        <span class="ml-1">Nos</span>
        <span class="ml-5">Dernières</span>
        <span class="ml-10">Actualités</span>
      </h2>
    {/if}
  </a>
</div>
<div class="h-screen w-2/3 flex flex-row items-center justify-center">
  <div class="h-screen flex items-start justify-center">
    {#if yScrollUser >= 1600 && deviceWidth > 1280}
      <div
        transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
        class="bg-degrade absolute w-1/4 h-[90%] z-[-1] "
      />
    {/if}
    <div class="flex flex-col img-container">
      {#each articles as article, i}
        <a href={"/articles/" + article.attributes.slug}>
          <img
            src={urlStrapiEfpDEV +
              article.attributes.miniature.data.attributes.url}
            class="max-w-xs"
            alt=""
          />
        </a>
        <!--{#if i == 1 && yScrollUser >= 1965 && deviceWidth > 1280}
          <a href="{'/articles/'+article.attributes.slug}">
            <img
              transition:fade
              src={urlStrapiEfpDEV + article.attributes.miniature.data.attributes.url}
              class="max-w-xs"
              alt=""
            />
          </a>
        {/if}
        {#if i == 2 && yScrollUser >= 2145 && deviceWidth > 1280}
          <a href="{'/articles/'+article.attributes.slug}">
            <img
              transition:fade
              src={urlStrapiEfpDEV + article.attributes.miniature.data.attributes.url}
              class="max-w-xs"
              alt=""
            />
          </a>
        {/if}-->
      {/each}
      <!--{#if yScrollUser >= 1745 && deviceWidth > 1280}
        <img transition:fade src="/bg-home-efp.jpg" class="max-w-xs" alt="" />
      {/if}
      {#if yScrollUser >= 1965 && deviceWidth > 1280}
        <img transition:fade src="/bg-home-efp.jpg" class="max-w-xs" alt="" />
      {/if}
      {#if yScrollUser >= 2145 && deviceWidth > 1280}
        <img transition:fade src="/bg-home-efp.jpg" class="max-w-xs" alt="" />
      {/if}-->
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
</style>
