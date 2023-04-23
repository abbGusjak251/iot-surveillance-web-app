<template>
  <div id="app">
    <AppBar title="Iot Övervakningskamera" />
    <router-view/>
    <Nav />
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    Nav,
  },
}
</script>

