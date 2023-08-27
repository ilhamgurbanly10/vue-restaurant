<script setup lang="ts">

  import Card from '../components/cards/Card.vue'

  import { ref } from 'vue';

  const msg = ref('hello');

  const count = ref(2)

  function increment() {
    count.value++
  }

  function decrease() {
    count.value--
  }

  import { reactive, computed, watchEffect } from 'vue'

  const computedValue = computed(() => count.value * 2);

  const state = reactive({ count: 0 })

  const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const doubleCount = ref(0);

watch(count, (newCount, oldCount) => {
  doubleCount.value = newCount * 2;
}, { immediate: true });

watchEffect(async () => {
  doubleCount.value = count.value * 2;
})

import { watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// input questionu deyisdirir her defe, ve watch da her defe useEffect dependency kimi ise dusur,
// adindan da gorunduyu kimi sanki nezaret edir.Eger ? isaresi varsa api gelene qeder loading gedir ve 
// is icar edir daha sonra.Computedden ferqi budur ki async olaraq isleyir 
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

</script>

<template>

<p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <div class="example">
    <h1>This is an example page</h1>
    <Card name="hi" description="desc" />
  </div>

  <button @click="state.count++">
  {{ state.count }}
</button>

  <button @click="decrease()">
   -
  </button>
  <p> {{ count }}</p>
  <button @click="increment()">
   +
  </button>

  <p>Has published books:</p>

  <span>{{ publishedBooksMessage }}</span>

  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

  <p>{{ computedValue }}</p>

  <p>Double Count: {{ doubleCount }}</p>

  <input v-model.lazy="msg" />
  {{ msg }}

  <!-- <ul>
    <Card v-for="(item, index) in items" :key="index" :name="item.name" :description="item.description" />
  </ul> -->
</template>

<style scoped>
.example {
  display: block !important;
  background-color: red;
  color: white !important;
}
</style>
