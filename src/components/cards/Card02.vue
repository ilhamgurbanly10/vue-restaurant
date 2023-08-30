<script setup lang="ts">
    defineProps<{
        name: string,
        description: string;
        firstGreeting: string;
    }>()

    const emit = defineEmits(['sayHello', 'sayGoodbye'])

    // bele inject edirik, inject key ile
    import { inject, reactive } from 'vue'

    const message = inject('hello', 'default value')

</script>

<template >

    <div class="card">

        <h3>{{ message.value }}</h3>
        <button @click="message.update()">Change Message</button>
        <h3 class="name">{{name}}</h3>
        <p class="description">{{description}}</p>
        <p class="description">{{firstGreeting}}</p>

        <button @click="$emit('sayHello', 'ilham')">Say Hello</button>

        <button @click="$emit('sayGoodbye', 'ilham')">Say Goodbye</button>

        <slot name="myheader"><p>I am Header</p></slot>
        <slot><p>I am content</p></slot>

    </div>

    

</template>

<style scoped>

.card {
    background-color: green;
    padding: 1rem;
}

.name {
    color: black;
}

.description {
    color: black;
}

</style>