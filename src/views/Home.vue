<template>
  <div class="home">
  <Header />
<Nav />

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Nav

  }
}


</script>

<style scoped>

/* .home {
  display: flex
} */

</style>
