<template>
  <section class="course-flexbox">
    <h3>Solution with FLEXBOX</h3>
    <div class="app-bar">
      <div class="app-bar__left">
        <font-awesome-icon icon="bars" />
        <h5>Page title</h5>
      </div>
      <div class="app-bar__right">
        <font-awesome-icon icon="heart" />
        <font-awesome-icon icon="search" />
        <font-awesome-icon icon="bookmark" />
      </div>
    </div>

    <h3>Solution with CSS grid</h3>
    <div class="app-bar-grid">
      <font-awesome-icon class="item-1" icon="bars" />
      <h5 class="item-2">Page title</h5>
      <font-awesome-icon class="item-3" icon="heart" />
      <font-awesome-icon class="item-4" icon="search" />
      <font-awesome-icon class="item-5" icon="bookmark" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CourseFlexbox'
};
</script>
