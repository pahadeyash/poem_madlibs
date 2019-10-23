<template>
    <div class="post">
        {{ poemObj.createdAt.getMonth() + '/' + poemObj.createdAt.getDate()  + '/' + poemObj.createdAt.getFullYear()}}
        <p class="text">{{ poemObj.poem }}</p>
        <b-button variant="success" v-on:click="deletePoem"> Delete </b-button>
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

</style>