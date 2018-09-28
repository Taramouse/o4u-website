<template>
  <div id="contact">
    <hero-title
      colorClass="is-info"
      sizeClass="is-medium"
      heroMainTitle="Contact Optimized4U"
      heroSubtitle="Enquire about IT Support or Web Design">
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
