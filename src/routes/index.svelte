<script context="module">
</script>

<script>
  
</script>

<svelte:head>
  <title>EFP - Entreprise de peinture Bordeaux et alentours Gironde</title>
  <meta
    name="description"
    content="EFP entreprise de peinture située à Sauveterre-de-guyenne intervient pour vos projets de peinture intérieur ou extérieur en Gironde "
  />
</svelte:head>

<!--<h1 class="text-3xl font-bold underline">
  EFP - Entreprise de peinture Bordeaux et alentours Gironde
</h1>-->
<div class="box" />

<div class="container-content">
  <div class="dashed dashed-top min-h-screen mx-auto content-box" />
</div>
<div class="container-content">
  <div class="dashed dashed-top min-h-screen mx-auto content-box" />
</div>
<div class="container-content">
  <div class="dashed dashed-top min-h-screen mx-auto content-box" />
</div>
<div class="container-content">
  <div class="dashed dashed-top  min-h-screen mx-auto content-box" />
</div>

<style lang="scss">
  .box {
    width: 100px;
    height: 100px;
    background: black;
    position: absolute;
    z-index: 99;
    display: none;
  }
  .container-content {
    width: 100%;
  }
  .content-box {
    padding: 0 80px 0 80px;
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
  }
  .dashed::after {
    background-position: right;
    right: 80px;
  }
  .dashed::after,
  .dashed::before {
    content: "";
    position: absolute;
    min-height: 100vh;
    width: 2px;
    z-index: 10;
    background-image: linear-gradient($vertGris 66%, rgba(255, 255, 255, 0) 0%);
    background-size: 2px 25px;
    background-repeat: repeat-y;
  }
  @media (max-width: 640px) {
    .content-box {
      padding: 0;
    }
    .dashed::after {
      right: 0;
    }
  }
</style>
