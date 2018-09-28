<template>
  <hero-title
    :colorClass="colorClass"
    :sizeClass="sizeClass"
    :heroMainTitle="heroMainTitle"
    :heroSubtitle="heroSubtitle">
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
      colorClass: 'is-info',
      sizeClass: 'is-medium',
      heroMainTitle: 'Optimized4U',
      heroSubtitle: 'IT Support and Web Development'
    }
  }
}
</script>
