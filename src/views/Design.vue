<template>
  <div id="design">
    <hero-title
      colorClass="is-primary"
      sizeClass="is-medium"
      heroMainTitle="Optimized4U Design"
      heroSubtitle="Web and Web App Design and Development">
    </hero-title>
  </div>
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
