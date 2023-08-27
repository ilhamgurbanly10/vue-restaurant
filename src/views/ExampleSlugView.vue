<template>
  <div>
    <h1>Slug Page</h1>
    <p>{{ content }}</p>
  </div>
</template>
  
<script lang="ts">

export default {
  data(): { content: string } {
    return {
      content: ''
    };
  },
  created() {
    const slug: any = this.$route.params.slug;
    this.fetchContent(slug);
  },
  methods: {
    fetchContent(slug: string) {
      // Simulate fetching content based on the slug
      // Replace this with your actual data fetching logic
      this.content = `Content for slug: ${slug}`;
    }
  }
};

</script>
  
<style scoped>
/* Your component-specific styles here */
</style>
  