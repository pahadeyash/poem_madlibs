<template>
    <div class="post">
      {{poemObj.createdAt.toLocaleDateString("en-US", {hour: "numeric", minute: "numeric", second: "numeric"})}}
      <div>
        <form>
        <div class="form-row">
          <div class="col-md">
            <p> Once upon a time, </p>
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_1.adjective">
            <div class="error" v-if="!$v.poem.text.line_1.adjective.required">Adjective required</div>
            <div class="error" v-if="!$v.poem.text.line_1.adjective.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_1.noun">
            <div class="error" v-if="!$v.poem.text.line_1.noun.required">Noun required</div>
            <div class="error" v-if="!$v.poem.text.line_1.noun.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_1.adverb">
            <div class="error" v-if="!$v.poem.text.line_1.adverb.required">Adverb required</div>
            <div class="error" v-if="!$v.poem.text.line_1.adverb.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_1.verb">
            <div class="error" v-if="!$v.poem.text.line_1.verb.required">Verb required</div>
            <div class="error" v-if="!$v.poem.text.line_1.verb.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_1.preposition">
            <div class="error" v-if="!$v.poem.text.line_1.preposition.required">Preposition required</div>
            <div class="error" v-if="!$v.poem.text.line_1.preposition.alpha">Letters only</div> 
          </div>
          <div class="col-md">
            <p> the dock. </p>
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col-md">
            <p> Then, </p>
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_2.adjective">
            <div class="error" v-if="!$v.poem.text.line_2.adjective.required">Adjective required</div>
            <div class="error" v-if="!$v.poem.text.line_2.adjective.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_2.noun">
            <div class="error" v-if="!$v.poem.text.line_2.noun.required">Noun required</div>
            <div class="error" v-if="!$v.poem.text.line_2.noun.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_2.adverb">
            <div class="error" v-if="!$v.poem.text.line_2.adverb.required">Adverb required</div>
            <div class="error" v-if="!$v.poem.text.line_2.adverb.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_2.verb">
            <div class="error" v-if="!$v.poem.text.line_2.verb.required">Verb required</div>
            <div class="error" v-if="!$v.poem.text.line_2.verb.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poem.text.line_2.preposition">
            <div class="error" v-if="!$v.poem.text.line_2.preposition.required">Preposition required</div>
            <div class="error" v-if="!$v.poem.text.line_2.preposition.alpha">Letters only</div> 
          </div>
          <div class="col-md">
            <p> the rock. </p>
          </div>
        </div>
        <br>
        <div class="form-row">
         <div class="col-md">
            <p> Finally, </p>
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.adjective">
            <div class="error" v-if="!$v.poem.text.line_3.adjective.required">Adjective required</div>
            <div class="error" v-if="!$v.poem.text.line_3.adjective.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.noun">
            <div class="error" v-if="!$v.poem.text.line_3.noun.required">Noun required</div>
            <div class="error" v-if="!$v.poem.text.line_3.noun.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.adverb">
            <div class="error" v-if="!$v.poem.text.line_3.adverb.required">Adverb required</div>
            <div class="error" v-if="!$v.poem.text.line_3.adverb.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.verb">
            <div class="error" v-if="!$v.poem.text.line_3.verb.required">Verb required</div>
            <div class="error" v-if="!$v.poem.text.line_3.verb.alpha">Letters only</div> 
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.preposition">
            <div class="error" v-if="!$v.poem.text.line_3.preposition.required">Preposition required</div>
            <div class="error" v-if="!$v.poem.text.line_3.preposition.alpha">Letters only</div> 
          </div>
          <div class="col-md">
            <p> the block! </p>
          </div>
        </div>
    </form>
    <br>
    </div>
      <b-button variant="primary" class="btn btn-primary" :disabled="submitStatus === 'PENDING'" v-on:click="updatePoem"> Update </b-button>
      <div class="divider"></div>
      <b-button variant="danger" v-on:click="deletePoem"> Delete </b-button>
      <p v-if="submitStatus === 'OK'">Updated!</p>
      <p v-if="submitStatus === 'ERROR'">Please fill the poem correctly.</p>
      <br>
      <br>
      <div  v-if="submitStatus=== 'PENDING'" class="spinner-border text-primary" role="status" >
        <span class="sr-only">Loading...</span>
      </div>
      <div v-if="submitStatus=== 'DELETING'" class="spinner-border text-danger" role="status" >
        <span class="sr-only">Deleting...</span>
      </div>
    </div>
</template>

<script>
import PoemService from '../PoemService'
import { required, alpha } from 'vuelidate/lib/validators'

export default {
    name: 'PoemComponent',
    props: {
        poemObj: Object,
    },
    data() {
      return{
        poem: this.poemObj,
        submitStatus: null,
      }
    },
    validations: {
      poem: {
        _id: {
          required
        },
        text: {
          line_1: {
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
            }
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
            }
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
            }
          }
        }
      }
    },    
    methods: {
      async deletePoem() {
        this.submitStatus = "DELETING"
        await PoemService.deletePoem(this.poemObj._id);
        this.$emit('poemUpdate');
      },
      async updatePoem(){
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          this.submitStatus = 'PENDING'
          await PoemService.updatePoem(this.poemObj);
          this.submitStatus = 'OK'
          this.$emit('poemUpdate');
        }
      },
    }
}

</script>

<style scoped>

div.post { 
  position: relative; 
  padding: 10px 10px 30px 10px; 
  margin-bottom: 15px; 
}

div.created-at {
  position: absolute; 
  top: 0; 
  left: 0; 
  padding: 5px 15px 5px 15px; 
}

p.text { 
  font-size: 22px; 
  font-weight: 700; 
  margin-bottom: 0; 
}

.divider{
    width:5px;
    height:auto;
    display:inline-block;
}

input{
  border: none;
  font-weight: bold;
}


</style>