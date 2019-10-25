<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/gsv.png">
    <BodyComponent />
  </div>
</template>

<script>
import BodyComponent from './components/BodyComponent.vue'

export default {
  name: 'app',
  components: {
    BodyComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
