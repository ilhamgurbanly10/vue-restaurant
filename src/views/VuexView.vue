<script setup lang="ts">

import Card02 from '../components/cards/Card02.vue'

  import { ref, computed, onMounted } from 'vue';

  const msg = ref('hello');

  import { useStore } from 'vuex';

  const store = useStore();

  const count = store.state.count;

  const increment = () => {
    store.commit('increment');
  };

  const newTodo = ref('')

  const todos = store.getters.allTodos;
  const cities = computed(() => {
    return store.getters.allCities;
  });

  const todosLength = computed(() => {
    return store.getters.todosLength;
  });

  const add = () => {
    store.commit('addToDo', {newTodo: newTodo.value});
    newTodo.value = "";
  };
  
  onMounted(() => { 
    store.dispatch('incrementInitial', {newTodo: 'bbbn'}); 
    store.dispatch('getCities', {});
  })

  const sayHello = (name: string) => {
    alert("Hello " + name);
  }

  const sayGoodbye = (name: string) => {
    alert("Goodbye " + name);
  }

</script>

<template>

  <Card02 
    name="Hello World" 
    description="Desc" 
    first-greeting="Hellooo" 
    @say-hello="sayHello"
    @say-goodbye="sayGoodbye"
  > 
  
  <p>I am slot</p> 
  
  <template #myheader>
    <p>I am first header</p>
  </template>

</Card02>

  <div>
    <p>Count: {{ store.state.count }}</p>
    <button @click="increment">Increment</button>

    <p v-for="(item, index) in todos" :key="index">{{ item }}</p>
    <button @click="add">Increment Todo</button>
    <p>Length: {{ todosLength }}</p>

    <p v-for="(item, index) in cities" :key="index">{{ item.name }}</p>

  </div>

  <p class="scss-test">{{ msg }}</p>

  <input type="text" v-model="newTodo">
</template>

<style scoped lang="scss">
$black: black;
$white: white;

.example {
  display: block !important;
  background-color: red;
  color: white !important;
}

.scss-test {
  background-color: $black;
  color: $white;
}
</style>

<style src="../assets/component.scss" lang="scss" scoped></style>
