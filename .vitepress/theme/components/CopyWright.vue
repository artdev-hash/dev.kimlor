<template>
  <footer>
    Powered by
    <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash"
      >artdev-hash</a
    >
    | Copyright © 2022-{{ date }} | MIT License
  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear();
</script>
<style scoped>
footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 40px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
}
a {
  color: var(--vp-c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--vp-c-hover);
}
</style>
