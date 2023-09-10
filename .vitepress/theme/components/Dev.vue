<template>
    <br><br>
    <div class="main">    
    <h1 class="about-header">👨‍💻 About Me</h1><br>
    <code><b>Fullstack Developer: Kim Arthur Lorenzo</b></code><br>
    <code>Status: <b>Available and Freelancing</b></code><br>
    <code>Currently: <b>on Open-Source, Projects, Assignments and Layout</b></code><br>
  
    <br><br><br><br>
    </div>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>
<style scoped>
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 32rem;
}
.about-header {
  font-weight: bold;
  padding-bottom: 14px;
  font-size: 2.25em;
  margin-top: 24px;
}
</style>