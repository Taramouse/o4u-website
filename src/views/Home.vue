<template>
  <hero-title
    colorClass="is-info"
    sizeClass="is-medium"
    heroMainTitle="Optimized4U"
    heroSubtitle="IT Support, Web and Web App Development">
  </hero-title>
</template>

<script>
// @ is an alias to /src
import HeroTitle from '@/components/HeroTitle.vue'

export default {
  name: 'home',
  components: {
    heroTitle: HeroTitle
  },
  data: function () {
    return {
      //
    }
  }
}
</script>
