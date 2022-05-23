<script>
  import { fade, draw, blur, slide, fly } from "svelte/transition";
  import { quintOut, quadInOut, quadIn, quadOut, sineIn, cubicOut } from 'svelte/easing';
  $: y = 0;
</script>

<svelte:head>
  <title>EFP - Entreprise de peinture Bordeaux et alentours Gironde</title>
  <meta
    name="description"
    content="EFP entreprise de peinture située à Sauveterre-de-guyenne intervient pour vos projets de peinture intérieur ou extérieur en Gironde "
  />
</svelte:head>
<svelte:window bind:scrollY={y} />

<div class="fixed left-0 top-0 z-20 text-red-500">{y}</div>
<div transition:fade class="content-container" data-scroll-container>
  <section class="container-content " data-scroll-section>
    <div class="content-video mx-auto">
      <video autoplay loop muted>
        <source src="/intro2.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
      <h1>
        <span class="h-efp">EFP</span><br />
        <span class="h-entreprise">entreprise</span><br />
        <span class="h-peinture">de peinture</span>
      </h1>
    </div>
  </section>

  <section class="container-content" data-scroll-section>
    <div
      class="content-desc dashed dashed-top min-h-screen mx-auto content-box"
    >
      {#if y > 300}
        <div
        transition:slide="{{delay: 250, duration: 2000, easing: cubicOut }}"
          class="yellow-rec"
        />
      {/if}
      {#if y > 500}
        <div transition:slide="{{delay: 250, duration: 2000, easing: cubicOut }}" class="grey-rec">
          <h2>Lorem ipsum ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            ante ante. Nam semper, mauris vitae aliquam facilisis, nulla mauris
            porttitor dui, sodales faucibus ligula felis quis augue. Praesent
            lobortis aliquam tempor. Vestibulum quis vestibulum ex. Sed eu
            malesuada metus. Class aptent taciti sociosqu.<br />
          </p>
          <p>
            Ut quis elit iaculis, porta arcu et, aliquam sapien. Nulla blandit
            ante tincidunt ex mollis aliquet. Integer et pretium felis. In
            varius finibus eros ut rutrum. Pellentesque mauris libero,
            scelerisque ut ornare id, aliquam nec ex. In vehicula pellentesque
            vehicula. Aliquam consequat erat eu elit egestas, quis malesuada
            ligula consequat. Aenean sit amet posuere massa.
          </p>
        </div>
      {/if}
      <img
        class="depot"
        src="/depot-efp.jpg"
        alt="Dépot EFP à Saveterre de Guyenne"
      />
      <span class="indic">Qui sommes-nous ?</span>
    </div>
  </section>

  <section class="container-content" data-scroll-section>
    <div class="dashed dashed-top min-h-screen mx-auto content-box" />
  </section>

  <section class="container-content" data-scroll-section>
    <div class="dashed dashed-top  min-h-screen mx-auto content-box" />
  </section>
</div>

<style lang="scss">
  @import "index.scss";
</style>
