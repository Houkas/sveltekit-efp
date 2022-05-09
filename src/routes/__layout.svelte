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
</style>
