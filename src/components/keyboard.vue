<template>
  <div> 
      <div :data-value="value" class="keyboard" @click="getKeyboardValue">{{value}}</div>
 </div>
</template>

<script>
export default {
  name:'KeyBoard',
  props: ['value'],
  data () {
    return {
        
    }
  },
  methods: {
      getKeyboardValue(event){
          let val=event.target.dataset.value;
          this.$store.commit('calculate', val)
      }
  }
}
</script>
<style lang='scss' scoped>
    .keyboard {
        float: left;
        width: 25%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        background-color: #f1f1f1;
    }
</style>