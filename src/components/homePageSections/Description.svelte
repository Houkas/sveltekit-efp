<script lang="ts">
  import { slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  export let yScrollUser: number;
  export let deviceWidth: number;
</script>

{#if (yScrollUser > 200 && deviceWidth > 1280) || (yScrollUser >= 0 && deviceWidth < 640)}
  <div
    transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
    class="yellow-rec"
  />
{/if}

<!--
        Trouver une solution pour que ce contenu soit bien indexé par le crawler google
        car il est n'est pas dans le dom tant que scroll y < 400
-->
{#if (yScrollUser > 400 && deviceWidth > 1280) || (yScrollUser >= 0 && deviceWidth < 640)}
  <div
    transition:slide={{ delay: 250, duration: 1000, easing: expoInOut }}
    class="grey-rec"
  >
    <h2>Lorem ipsum ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ante
      ante. Nam semper, mauris vitae aliquam facilisis, nulla mauris porttitor
      dui, sodales faucibus ligula felis quis augue. Praesent lobortis aliquam
      tempor. Vestibulum quis vestibulum ex. Sed eu malesuada metus. Class
      aptent taciti sociosqu.<br />
    </p>
    <p>
      Ut quis elit iaculis, porta arcu et, aliquam sapien. Nulla blandit ante
      tincidunt ex mollis aliquet. Integer et pretium felis. In varius finibus
      eros ut rutrum. Pellentesque mauris libero, scelerisque ut ornare id,
      aliquam nec ex. In vehicula pellentesque vehicula. Aliquam consequat erat
      eu elit egestas, quis malesuada ligula consequat. Aenean sit amet posuere
      massa.
    </p>
  </div>
{/if}

<img
  class="depot"
  src="/depot-efp.jpg"
  alt="Dépot EFP à Saveterre de Guyenne"
/>
<span class="indic-desc">Qui sommes-nous ?</span>

<style lang="scss">
  .yellow-rec {
    width: 125px;
    height: 88vh;
    background-color: $jaune;
    position: relative;
  }
  .anim-bloc-down {
    animation: slideDown ease 0.4s forwards 0.6s;
  }

  .grey-rec {
    padding: 50px;
    width: 50%;
    background-color: $vertGris;
    position: relative;
    left: -3.75em;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-transform: uppercase;
      margin: 10px 0 10px 0;
      font-size: 40px;
      color: $vertFonce;
      font-weight: bold;
      z-index: 5;
    }

    p {
      margin-bottom: 20px;
      z-index: 5;
    }
  }

  .grey-rec::before {
    content: "";
    position: absolute;
    height: 60vh;
    width: 60vh;
    border-radius: 50%;
    border: dashed 2px $vertGris;
    right: -25%;
    top: -25%;
    animation: rotation 60s infinite linear;
  }

  .depot {
    width: 420px;
    height: 200px;
    z-index: 5;
  }

  .indic-desc {
    position: absolute;
    transform-origin: 0 0;
    transform: rotate(90deg);
    text-transform: uppercase;
    font-family: "Zen Kaku Gothic New", sans-serif;
    color: $vertFonce;
    right: -5em;
    margin-top: -5em;
    font-size: 11.5px;
    padding: 5px;
    z-index: 11;
    background-color: $vertGris;
  }

  @media (max-width: 820px) {
    .yellow-rec {
      height: 65vh;
      width: 55px;
    }
    .grey-rec {
      width: 100%;
      padding: 40px;
      left: -1.1em;
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 12px;
      }
    }
    .grey-rec::before {
      height: 30vh;
      width: 30vh;
      right: -15%;
      top: -15%;
    }
    .depot {
      display: none;
    }
  }

  @keyframes slideDown {
    0% {
      height: 0;
    }
    100% {
      height: 88vh;
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
</style>
