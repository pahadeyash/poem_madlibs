<template>
  <div class="container">
    <h1> All Poems </h1>
    <hr>
    <p class="error" v-if="error"> {{error}} </p>
    <div class="post-container">
      <template v-for="(poem, index) in poems">
        <PoemComponent
          v-bind:poemObj="poem"
          v-bind:index="index"
          v-bind:key="poem._id"
          v-on:deletePoem="updateBody"
        />
      </template>
    </div>
  </div>
</template>

<script>
import PoemService from '../PoemService'
import PoemComponent from './PoemComponent.vue'

export default {
  name: 'BodyComponent',
  components: {
    PoemComponent
  },
  data() {
    return {
      poems: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.poems = await PoemService.getPoems();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async updateBody () {
      try {
        this.poems = await PoemService.getPoems();
      } catch(err) {
        this.error = err.message;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.container {
  max-width: 800px; 
  margin: 0 auto; 
}

</style>