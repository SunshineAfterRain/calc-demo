import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    result: '',
    enter: ''
}
const mutations ={
    calculate(state,value){
        if(value==='='){
            state.result= eval(state.enter)
        }else if(value==='clear'){
            state.result=state.enter=''
        }else {
            state.enter+=value
        }
    }
}

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations
})