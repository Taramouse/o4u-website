<template>
  <div id="support">
    <hero-title
      colorClass="is-success"
      sizeClass="is-medium"
      heroMainTitle="Optimized4U Support"
      heroSubtitle="IT Support Services">
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
