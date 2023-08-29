
import axios from 'axios';

// Create a new store instance.
export default {
// statelerimiz burada yer alir
  state () {
    return {
      todos: ['Todo 1', 'Todo 2', 'Todo 3'],
      cities: [{title: 'bak'}],
      count: 0
    }
  },
//   statelerde deyisiklik etmek ucundur, 2-ci parametr kimi payload obyekti kimi deyer ala bilir.
// store.commit('increment'); olaraq cagirilir.Mutationlar async ola bilmir.Reducerler kimidirler
// reactdaki
  mutations: {
    increment (state) {
      state.count++
    },
    addToDo (state, payload) {
        state.todos.push(payload.newTodo)
    },
    setCities (state, payload) {
        state.cities = payload;
    },
  },
//   getters yalniz deyerleri alir, useRecoilValues kimi, 2-ci parametr kimi diger gettersleri 
//   de ala bilir. store.getters.allTodos; olaraq cagirilir, funksiya deyil ancaq variable cagirir
//   state evezine getters vermek daha yaxsidir
getters: {
    allTodos (state) {
      return state.todos;
    },
    // getterslerin ozunu parametr kimi alib neyinise hesablayib qaytara bilerik
    todosLength (state, getters) {
        return getters.allTodos.length;
    },
    allCities (state, getters) {
        return state.cities;
    }
  },
//   mutationslar kimidir, amma burada stateye birbasa tesir olunmur, bunlar mutationu cagirir.
//   Bundan elave olaraq async olaraq calisirlar. store.dispatch('increment') ile cagirilirlar
// elave deyer kimi yanina obyektde oturmek olur,  async olmasi ucun elave bor sey yazmaga ehtiyac yoxdur
// store.dispatch('actionA').then(() => { }) de etmek olur eger promise olarsa icerisinde
actions: {
    incrementInitial (context, payload) {
      context.commit('addToDo', payload)
    },
    async getCities (context, payload) {
        let data = [];
        await axios.get('https://api.topemlak.az/api/city/')
        .then((res) => {
            data = res.data;
            console.log(data)
        }) 
        context.commit('setCities', data)
    }
  }
}

// actions dispatchi parametr olaraq alib basqa bir action da cagira biler
// actions: {
//     async actionA ({ commit }) {
//       commit('gotData', await getData())
//     },
//     async actionB ({ dispatch, commit }) {
//       await dispatch('actionA') // wait for `actionA` to finish
//       commit('gotOtherData', await getOtherData())
//     }
//   }





