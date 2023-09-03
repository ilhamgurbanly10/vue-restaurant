<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';

const show = ref<boolean>(false);

const open = ref<boolean>(false);

</script>

<template>
  <div class="block">

    <h1>Built-in Components</h1>

    <button @click="show = !show">Toggle</button>

    <Transition>
      <p v-if="show">hello</p>
    </Transition>

    <Transition name="goodbye">
      <p v-if="show">Goodbye</p>
    </Transition>

    <button @click="open = true">Open Modal</button>

    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>

  </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.goodbye-enter-active,
.goodbye-leave-active {
  transition: font-size 0.5s ease;
}

.goodbye-enter-from,
.goodbye-leave-to {
  font-size: 0px
}
</style>


