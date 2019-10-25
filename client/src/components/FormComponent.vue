<template>
    <form v-on:submit.prevent="createPoem">
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Adjective" v-model="madlib.line_1.adjective">
          <div class="error" v-if="!$v.madlib.line_1.adjective.required">Adjective required</div>
          <div class="error" v-if="!$v.madlib.line_1.adjective.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Noun" v-model="madlib.line_1.noun">
          <div class="error" v-if="!$v.madlib.line_1.noun.required">Noun required</div>
          <div class="error" v-if="!$v.madlib.line_1.noun.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Adverb" v-model="madlib.line_1.adverb">
          <div class="error" v-if="!$v.madlib.line_1.adverb.required">Adverb required</div>
          <div class="error" v-if="!$v.madlib.line_1.adverb.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verb" v-model="madlib.line_1.verb">
          <div class="error" v-if="!$v.madlib.line_1.verb.required">Verb required</div>
          <div class="error" v-if="!$v.madlib.line_1.verb.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Preposition" v-model="madlib.line_1.preposition">
          <div class="error" v-if="!$v.madlib.line_1.preposition.required">Preposition required</div>
          <div class="error" v-if="!$v.madlib.line_1.preposition.alpha">Letters only</div>
        </div>
      </div>
      <br>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Adjective" v-model="madlib.line_2.adjective">
          <div class="error" v-if="!$v.madlib.line_2.adjective.required">Adjective required</div>
          <div class="error" v-if="!$v.madlib.line_2.adjective.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Noun" v-model="madlib.line_2.noun">
          <div class="error" v-if="!$v.madlib.line_2.noun.required">Noun required</div>
          <div class="error" v-if="!$v.madlib.line_2.noun.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Adverb" v-model="madlib.line_2.adverb">
          <div class="error" v-if="!$v.madlib.line_2.adverb.required">Adverb required</div>
          <div class="error" v-if="!$v.madlib.line_2.adverb.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verb" v-model="madlib.line_2.verb">
          <div class="error" v-if="!$v.madlib.line_2.verb.required">Verb required</div>
          <div class="error" v-if="!$v.madlib.line_2.verb.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Preposition" v-model="madlib.line_2.preposition">
          <div class="error" v-if="!$v.madlib.line_2.preposition.required">Preposition required</div>
          <div class="error" v-if="!$v.madlib.line_2.preposition.alpha">Letters only</div>
        </div>
      </div>
      <br>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Adjective" v-model="madlib.line_3.adjective">
          <div class="error" v-if="!$v.madlib.line_3.adjective.required">Adjective required</div>
          <div class="error" v-if="!$v.madlib.line_3.adjective.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Noun" v-model="madlib.line_3.noun">
          <div class="error" v-if="!$v.madlib.line_3.noun.required">Noun required</div>
          <div class="error" v-if="!$v.madlib.line_3.noun.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Adverb" v-model="madlib.line_3.adverb">
          <div class="error" v-if="!$v.madlib.line_3.adverb.required">Adverb required</div>
          <div class="error" v-if="!$v.madlib.line_3.adverb.alpha">Letters only</div>
          
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verb" v-model="madlib.line_3.verb">
          <div class="error" v-if="!$v.madlib.line_3.verb.required">Verb required</div>
          <div class="error" v-if="!$v.madlib.line_3.verb.alpha">Letters only</div>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Preposition" v-model="madlib.line_3.preposition">
          <div class="error" v-if="!$v.madlib.line_3.preposition.required">Preposition required</div>
          <div class="error" v-if="!$v.madlib.line_3.preposition.alpha">Letters only</div>
        </div>
      </div>
      <br>
      <div>
        <input type="submit" id ="button" class="btn btn-success" :disabled="submitStatus === 'PENDING'" value="Create Poem"/>
        <p class="typo__p" v-if="submitStatus === 'OK'">Created!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the poem correctly.</p>
        <br>
        <div  v-if="submitStatus=== 'PENDING'" class="spinner-border text-success" role="status" >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </form>
</template>

<script>
    import PoemService from '../PoemService'
    import { required, alpha } from 'vuelidate/lib/validators'

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
                },
                submitStatus: null,
            }
        },
        validations: {
          madlib :{
            line_1: {
                adjective: {
                  required,
                  alpha,
                },
                noun: {
                  required,
                  alpha
                },
                adverb: {
                  required,
                  alpha
                },
                verb: {
                  required,
                  alpha
                },
                preposition: {
                  required,
                  alpha
                },
            },
            line_2: {
                adjective: {
                  required,
                  alpha
                },
                noun: {
                  required,
                  alpha
                },
                adverb: {
                  required,
                  alpha
                },
                verb: {
                  required,
                  alpha
                },
                preposition: {
                  required,
                  alpha
                },
            },
            line_3: {
                adjective: {
                  required,
                  alpha
                },
                noun: {
                  required,
                  alpha
                },
                adverb: {
                  required,
                  alpha
                },
                verb: {
                  required,
                  alpha
                },
                preposition: {
                  required,
                  alpha
                },
            }
          }

        },
        methods: {
            async createPoem() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                  this.submitStatus = 'ERROR'
                } else {
                  this.submitStatus = 'PENDING'
                  await PoemService.createPoem(this.madlib);
                  this.submitStatus = true
                  window.location.reload()
                }
            }
        },
    }
</script>

<style scoped>

</style>