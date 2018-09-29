<template>
 <section id="error" class="hero is-medium is-danger">
   <div class="hero-body">
     <h1 class="title">Ooops! Page not found</h1>
      <router-link to="/" tag="button" class="button is-danger is-inverted">
        Take me back home
      </router-link>
   </div>
 </section>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>
