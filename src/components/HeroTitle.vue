<template>
  <section class="hero" :class="[colorClass, sizeClass]">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ heroMainTitle }}
          </h1>
          <h2 class="subtitle">
            {{ heroSubtitle }}
          </h2>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'HeroTitle',
  props: ['colorClass', 'sizeClass', 'heroMainTitle', 'heroSubtitle']
}
</script>
