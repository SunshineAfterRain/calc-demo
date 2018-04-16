<template>
  <div class="hello">
      <div>运算结果{{result}}</div>
      <div>输入的值 {{enter}}</div>
      <div class="list">
        <key-board :value="item" v-for="(item, index) in keys" :key="index" >

        </key-board>
      </div>
  </div>
</template>

<script>
import KeyBoard from './keyboard.vue'
export default {
  name: 'HelloWorld',
  components: {
      KeyBoard
  },
  data () {
    return {
      keys:[
        'clear','+','-','*',
        '7','8','9','/',
        '4','5','6','0',
        '1','2','3','='

      ]
    }
  },
  computed:{
    result(){
      return this.$store.state.result
    },
    enter(){
      return this.$store.state.enter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
