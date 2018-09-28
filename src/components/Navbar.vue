<template>
  <nav class="navbar is-fixed-top" id="nav" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/optimized4u.png" alt="Optimized4u branding" height="28">
        </router-link>

        <a role="button" class="navbar-burger"  @click="showNav = !showNav" :class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <!-- navbar items -->
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/support" class="navbar-item">
            Support
          </router-link>
          <router-link to="/design" class="navbar-item">
            Design
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data: function () {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #4272b9;
    }
  }
}
</style>
