<template>
  <section class="admin-layout">
    <div class="admin-layout__sidebar" v-bind:class="{ 'w-10' : toggleSidebar}">
      <h1>Admin Logos</h1>
      <ul>
        <li>
          <span>
            <font-awesome-icon icon="clock" class="overview__icon-star" /></i>
          </span>
          <p>Images</p>
        </li>
        <li>
          <span>
            <font-awesome-icon icon="mobile" class="overview__icon-star" /></i>
          </span>
          <p>Mobile</p>
        </li>
        <li>
          <span>
            <font-awesome-icon icon="comments" class="overview__icon-star" /></i>
          </span>
          <p>Comments</p>
        </li>
      </ul>
    </div>
    <div class="admin-layout__body" v-bind:class="{ 'w-90' : toggleSidebar  }">
      <div class="admin-layout__body__navbar">
        <button type="button" name="button" v-on:click="toggleMenu">
          <font-awesome-icon icon="bars" class="overview__icon-star" /></i>
        </button>
      </div>
      <div class="admin-layout__body__content">
        <p>Content</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'AdminLayout',
  data: function() {
    return {
      toggleSidebar: false
    }
  },
  methods: {
    toggleMenu: function() {
      this.toggleSidebar = !this.toggleSidebar;
    }
  }
};
</script>
