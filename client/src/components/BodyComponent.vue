<template>
  <div class="container">
    <h1> Madlibs Generator </h1>
    <h4> Fill In The Blanks! </h4>
    <FormComponent 
      v-on:createPoem="updateBody"
    />
    <br>
    <br>
    <h1> All Poems </h1>
    <hr>
    <p class="error" v-if="error"> {{error}} </p>
    <div class="post-container">
      <template v-for="(poem, index) in poems">
        <PoemComponent
          v-bind:poemObj="poem"
          v-bind:index="index"
          v-bind:key="poem._id"
          v-on:poemUpdate="updateBody"
        />
      </template>
    </div>
  </div>
</template>

<script>
import PoemService from '../PoemService'
import PoemComponent from './PoemComponent.vue'
import FormComponent from './FormComponent.vue'

export default {
  name: 'BodyComponent',
  components: {
    PoemComponent,
    FormComponent
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

label{
  margin-right: 1em;
}

</style>