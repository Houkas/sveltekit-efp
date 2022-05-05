<script>
  import { page } from "$app/stores";
  let isHomePage = $page.url.pathname == "/" ? true : false;
  let isMenuOpen = false;
  function openMobileMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-100">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <img src="" class="mr-3 h-6 sm:h-9" alt="efp logo" />
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
          <a href="#" class="block py-2 pr-4 pl-3 md:p-0">Réalisations</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 md:p-0">Partenaires</a>
        </li>
        <li>
          <a href="/articles" class="block py-2 pr-4 pl-3 md:p-0">Articles</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  .slide-in {
    opacity: 1;
    animation: slide-in 5s forwards;
    -webkit-animation: slide-in 5s forwards;
  }

  .slide-out {
    opacity: 0;
    animation: slide-out 5s forwards;
    -webkit-animation: slide-out 5s forwards;
  }

  @keyframes slide-in {
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translateX(50%);
    }
  }

  @-webkit-keyframes slide-out {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(50%);
    }
  }

  #mobile-menu ul li {
    
    a {
      text-transform: uppercase;
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-size: 0.85em;
      font-weight: 800;
      transition: all 0.25s ease-out;
      transform: skewX(0deg);
    }
    a::before{
      opacity: 1;
      transition: all 0.25s ease-out;
    }
    a:hover::before {
      display: block;
      content: "";
      background-image: url("/circle_degrade.svg");
      height: 20px;
      width: 20px;

      position: absolute;
      z-index: -10;
      left: -15px;
      transition-duration: 500ms;
      transition-property: opacity;
      transition: all 0.25s ease-out;
    }
    a:hover {
      transform: skewX(-10deg);
      color: $vert1;
    }
  }
</style>
