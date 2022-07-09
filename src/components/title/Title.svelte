<script lang="ts">
    export let title: string;
</script>

<div class=" flex flex-col items-center">
    <h1
      class="px-4 bg-[#004E63] mt-[30px] uppercase font-bold tracking-widest text-[25px] lg:text-[60px] text-[#26FFF4] z-10 text-center"
    >
      {title}
    </h1>
    <div class="flex flex-row">
      <div
        class="cicle-gradient block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 mt-5"
      />
      <div
        class="cicle-gradient block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 mt-5"
      />
      <div
        class="cicle-gradient block content-[''] bg-[url('/circle_degrade.svg')] w-[20px] h-[20px] z-0 mx-2 mt-5"
      />
    </div>
  </div>

<style lang="scss">

</style>