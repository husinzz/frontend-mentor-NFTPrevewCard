<script lang="ts">
  let hidden: string = "hidden";
  function hide(e) {
    hidden = "hidden";
  }

  function unHide(e) {
    hidden = "";
  }
</script>

<main
  class="bg-blue-very-dark-1 flex justify-center items-center h-full font-outfits"
>
  <div class="bg-blue-very-dark-2 rounded-lg max-w-[350px]">
    <div class="relative m-5 rounded-lg overflow-hidden">
      <img
        on:mouseover={unHide}
        on:mouseout={hide}
        src="images/image-equilibrium.jpg"
        class="h-full"
        alt="NFT"
      />
      <div
        class={`h-full w-full bg-cyan-500 bg-opacity-75 absolute top-0 flex items-center justify-center ${hidden}`}
      >
        <img src="images/icon-view.svg" alt="eth" class="opacity-100 z-10" />
      </div>
    </div>
    <div class="mx-5">
      <h1 class="text-white text-2xl font-semibold pb-3 hover:text-cyan-500">
        Equilibrium #3429
      </h1>
      <p class="text-blue-soft text-lg font-light pb-3">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div class="flex items-center justify-between pb-5">
        <span class="flex items-center"
          ><img src="images/icon-ethereum.svg" alt="eth" class="h-[18px]" />
          <p class="text-cyan-500 font-semibold pl-2">0.041 ETH</p></span
        >

        <span class="flex items-center"
          ><img src="images/icon-clock.svg" alt="time-left" class="h-[18px]" />
          <p class="text-blue-soft pl-2">3 days left</p></span
        >
      </div>
      <hr class="py-2 very-dark-3" />
      <div class="flex items-center pb-5">
        <img
          src="images/image-avatar.png"
          alt="avatar"
          class="w-[40px] ml-2 mr-4 border-white border rounded-full"
        />
        <p class="text-blue-soft">
          Creation of <span class="text-white hover:text-cyan-500"
            >Jules Wyvern</span
          >
        </p>
      </div>
    </div>
  </div>
</main>

<div class="attribution bottom-0 left-1/2 -translate-x-1/2 absolute my-2 text-white">
  Challenge by <a
    href="https://www.frontendmentor.io?ref=challenge"
    >Frontend Mentor</a
  >. Coded by <a href="https://github.com/urdreamboi">urdreamboi</a>.
</div>

<style>
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 5%, 62%);
  }
</style>
