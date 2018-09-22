<template>
  <div id="app">
    <nav class="navbar" id="nav" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="./assets/optimized4u.png" alt="Optimized4u branding" height="28">
        </a>

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
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #4272b9;
    }
  }
}
</style>
