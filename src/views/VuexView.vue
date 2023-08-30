<script setup lang="ts">

import { useCustomLifecycle } from '../../hooks/useCustomLifecycle';

const { counter, data } = useCustomLifecycle();

import { defineAsyncComponent, Suspense } from 'vue';

const Card02 = defineAsyncComponent(() =>
  import('../components/cards/Card02.vue')
);

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
  store.commit('addToDo', { newTodo: newTodo.value });
  newTodo.value = "";
};

onMounted(() => {
  store.dispatch('incrementInitial', { newTodo: 'bbbn' });
  store.dispatch('getCities', {});
})

const sayHello = (name: string) => {
  alert("Hello " + name);
}

const sayGoodbye = (name: string) => {
  alert("Goodbye " + name);
}

// provide
import { provide, reactive } from 'vue'

const updateData = () => {
  mes.value = 'Hello John';
}
// iki parametr qebul edir, injection key 1-ci olan keydir, ikinci ise value.Ikinci
// teref reactive state de ola biler, her hansi bir sey
const mes = ref('hello ilham');

provide('hello', {
  value: mes,
  update: updateData
});

console.log(import.meta.env.VITE_API_KEY)

</script>

<template>

  <p>{{ data.message }} {{ counter }}</p>
  <p>{{ mes }}</p>

  <Suspense>
      <template #default>
        <Card02 name="Hello World" description="Desc" first-greeting="Hellooo" @say-hello="sayHello" @say-goodbye="sayGoodbye">

          <p>I am slot</p>

    <template #myheader>
      <p>I am first header</p>
    </template>

  </Card02>
      </template>
      <template #fallback>
        <p>Loading......</p>
      </template>
    </Suspense>
    

    <div class="bg-blue-500 text-white p-4 fixed">
    Hello from Tailwind CSS!
  </div>

  

    

  <p>{{ mes.value }}</p>

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
