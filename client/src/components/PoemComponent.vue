<template>
    <div class="post">
      {{ poemObj.createdAt.getMonth() + '/' + poemObj.createdAt.getDate()  + '/' + poemObj.createdAt.getFullYear()}}
      <div>
        <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_1.adjective">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_1.noun">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_1.adverb">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_1.verb">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_1.preposition">
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_2.adjective">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_2.noun">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_2.adverb">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_2.verb">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_2.preposition">
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.adjective">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.noun">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.adverb">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.verb">
          </div>
          <div class="col">
            <input type="text" class="form-control" v-model="poemObj.text.line_3.preposition">
          </div>
        </div>
    </form>
    <br>
    </div>
      <b-button variant="primary" v-on:click="updatePoem"> Update </b-button>
      <div class="divider"> </div>
      <b-button variant="danger" v-on:click="deletePoem"> Delete </b-button>
    </div>
</template>

<script>
import PoemService from '../PoemService'

export default {
    name: 'PoemComponent',
    props: {
        poemObj: Object,
    },
    methods: {
      async deletePoem() {
        await PoemService.deletePoem(this.poemObj._id);
        this.$emit('poemUpdate');
      },
      async updatePoem(){
        await PoemService.updatePoem(this.poemObj);
        this.$emit('poemUpdate');
      }
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

</style>