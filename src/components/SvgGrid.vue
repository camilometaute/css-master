<template>
  <section class="svg-grid">
    <div class="svg-grid__box">
      <svg viewbox="0 0 100 100">

      <!-- BOXES -->

        <!-- box 1 -->
        <clipPath id="box-1">
          <rect x="30" y="0" width="70" height="50"/>
        </clipPath>
        <rect clip-path="url(#box-1)" x="30" y="0" width="70" height="50" fill="#f72585"/>

        <!-- box 2 -->
        <clipPath id="box-2">
          <rect x="0" y="30" width="50" height="70"/>
        </clipPath>
        <rect clip-path="url(#box-2)" x="0" y="30" width="50" height="70" fill="#83c5be"/>

        <!-- box 3 -->
        <clipPath id="box-3">
          <rect x="50" y="50" width="40" height="40"/>
        </clipPath>
        <rect clip-path="url(#box-3)" x="60" y="60" width="40" height="40" fill="#5762D5"/>

      <!-- IMAGES -->

        <!-- img 1 -->
        <clipPath id="img-1">
          <rect x="30" y="0" width="70" height="50"/>
        </clipPath>
        <image clip-path="url(#img-1)" preserveAspectRatio="xMidYMid slice" x="30" y="0" width="70" height="50" href="https://place-puppy.com/400x300"/>

        <!-- img 2 -->
        <clipPath id="img-2">
          <rect x="0" y="30" width="50" height="70"/>
        </clipPath>
        <image clip-path="url(#img-2)" preserveAspectRatio="xMidYMid slice" x="0" y="30" width="50" height="70" href="https://place-puppy.com/800x500"/>

        <!-- img 3 -->
        <clipPath id="img-3">
          <rect x="60" y="60" width="40" height="40"/>
        </clipPath>
        <image clip-path="url(#img-3)" preserveAspectRatio="xMidYMid slice" x="60" y="60" width="40" height="40" href="https://place-puppy.com/700x300"/>

      </svg>
    </div>
  </section>

</template>

<script>
export default {
  name: 'SvgGrid'
};
</script>
