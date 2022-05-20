<style lang="scss">
  @import "Header.scss";
</style>

<script>
  import { onMount } from "svelte/internal";
  import { page } from "$app/stores";
  onMount( async () => {
    
  })
  $: isHomePage = $page.url.pathname == "/" ? true : false;
  let isMenuOpen = false;
  function openMobileMenu() {
    isMenuOpen = !isMenuOpen;
  }

</script>
  
<nav class="px-2 sm:px-4 py-2.5 fixed">
  <div class="container flex flex-wrap justify-between items-center">
    <a href="/">
      <img src="/logo-efp-with-initials.png" class="logo-efp" alt="efp logo" />
    </a>

    <button
      data-collapse-toggle="mobile-menu"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mobile-menu"
      aria-expanded="false"
      on:click={openMobileMenu}
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
      <svg
        class="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
    <div
      class="{isMenuOpen === true ? '' : 'hidden'} w-full md:block md:w-auto"
      id="mobile-menu"
    >
      <ul
        class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
      >
        <li class={isHomePage === true ? "hidden" : ""}>
          <a href="/" class="block py-2 pr-4 pl-3 md:p-0">Accueil</a>
        </li>
        <li>
          <a href="/realisations" class="block py-2 pr-4 pl-3 md:p-0"
            >Réalisations</a
          >
        </li>
        <li>
          <a href="/partenaires" class="block py-2 pr-4 pl-3 md:p-0"
            >Partenaires</a
          >
        </li>
        <li>
          <a href="/articles" class="block py-2 pr-4 pl-3 md:p-0">Articles</a>
        </li>
        <li>
          <a href="/contact" class="block py-2 pr-4 pl-3 md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


