<script>
  import Header from "../components/Header/Header.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import "../app.css";

</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">

  :global::-webkit-scrollbar {
    width: 8px;
  }
  :global::-webkit-scrollbar-thumb {
    background-color: $vertFonce;
    border-radius: 5px;
  }
  :global::-webkit-scrollbar-track{
    margin-top: -3px;
    margin-bottom: -3px;
  }
  :global::-webkit-scrollbar-track-piece{
    border-radius: 5px;
    background-color:$vertGris;
  }
</style>
