<template>
    <form v-on:submit.prevent="createPoem">
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Adjective" v-model="madlib.line_1.adjective">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Noun" v-model="madlib.line_1.noun">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Adverb" v-model="madlib.line_1.adverb">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verb" v-model="madlib.line_1.verb">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Preposition" v-model="madlib.line_1.preposition">
        </div>
      </div>
      <br>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Adjective" v-model="madlib.line_2.adjective">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Noun" v-model="madlib.line_2.noun">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Adverb" v-model="madlib.line_2.adverb">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verb" v-model="madlib.line_2.verb">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Preposition" v-model="madlib.line_2.preposition">
        </div>
      </div>
      <br>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Adjective" v-model="madlib.line_3.adjective">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Noun" v-model="madlib.line_3.noun">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Adverb" v-model="madlib.line_3.adverb">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verb" v-model="madlib.line_3.verb">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Preposition" v-model="madlib.line_3.preposition">
        </div>
      </div>
      <br>
      <div >
        <input type="submit" id = "button" class="btn btn-success" value="Create Poem"/>
      </div>
    </form>
</template>

<script>
    import PoemService from '../PoemService'

    export default {
        name: 'FormComponent',
        data() {
            return {
                madlib: {
                    line_1: {
                        adjective: '',
                        noun: '',
                        adverb: '',
                        verb: '',
                        preposition: ''
                    },
                    line_2: {
                        adjective: '',
                        noun: '',
                        adverb: '',
                        verb: '',
                        preposition: ''
                    },
                    line_3: {
                        adjective: '',
                        noun: '',
                        adverb: '',
                        verb: '',
                        preposition: ''
                    }
                }
            }
        },
        methods: {
            async createPoem() {
                await PoemService.createPoem(this.madlib);
                this.$emit('createPoem');
            }
        },
    }
</script>

<style scoped>

</style>