<template>
    <div class="post">
        {{ poemObj.createdAt.getMonth() + '/' + poemObj.createdAt.getDate()  + '/' + poemObj.createdAt.getFullYear()}}
        <p class="text">{{ poemObj.text }}</p>
        <button v-on:click="deletePoem"> Delete </button>
    </div>
</template>

<script>
import PoemService from '../PoemService'

export default {
    name: 'PoemComponent',
    props: {
        poemObj: Object,
        key: String
    },
    methods: {
      async deletePoem(){
        await PoemService.deletePoem(this.poemObj._id);
        this.$emit('deletePoem');
      }
    },
}

</script>

<style scoped>

div.post { 
  position: relative; 
  border: 1px solid #5bd658; 
  background-color: #bcffb8; 
  padding: 10px 10px 30px 10px; 
  margin-bottom: 15px; 
}

div.created-at {
  position: absolute; 
  top: 0; 
  left: 0; 
  padding: 5px 15px 5px 15px; 
  background-color: darkgreen; 
}

p.text { 
  font-size: 22px; 
  font-weight: 700; 
  margin-bottom: 0; 
}

</style>