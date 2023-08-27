<script setup lang="ts">
    defineProps<{
        name: string,
        description: string;
    }>()
</script>

<template>

    <div class="card">

        <h3 class="name">{{name}}</h3>
        <p class="description">{{description}}</p>
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