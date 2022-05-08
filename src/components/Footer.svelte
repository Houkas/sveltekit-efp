<script>
</script>

<footer
  class="pl-4 pr-4 bg-white md:flex md:items-center md:justify-between md:pl-6 md:pr-6 "
>
  <div class="container-footer md:flex md:items-center md:justify-between ">
    <span class="text-sm">
      <b>EFP - Entreprise familliale de peinture</b><br />
      EFP4@wanadoo.fr<br />
      Sauveterre de Guyenne - 33540 France
    </span>
    <img src="/logo-efp-without-txt.png" class="logo-efp" alt="" />
    <span class="text-sm text-right">
      Peinture intérieur - exterieur<br />
      vitrage & sol
    </span>
  </div>
</footer>

<style lang="scss">
  footer {
    padding-left: 85px;
    padding-right: 85px;
    .container-footer {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 0 33px 0 33px;
      border-left: dashed 3px $blanc;
    }

    background-image: linear-gradient(
      to right,
      $blanc 33%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 30px 2px;
    background-repeat: repeat-x;

    height: 162px;
    background-color: $vertGris;
    font-family: "Zen Kaku Gothic New", sans-serif;
    span {
      font-family: "Zen Kaku Gothic New", sans-serif;
    }
    .logo-efp {
      width: 65px;
      height: 65px;
    }
  }
</style>
