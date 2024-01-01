<template>
    <br><br>
    <div class="main">    
    <h1 class="about-header">👨‍💻 Works</h1><br>
    <code>Recent  💡  >></code><br>
    <div class="typewriter-effect">
    <div class="text" id="typewriter-text"></div>
    <code>- hacktoberfest 23</code></div>
    <code>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener">bicoltranslate</a></code><br>
    <code>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener">feedboard</a></code><br>
    <code>- lorenzokimarthur.com</code><br>
    <code>- Hacktoberfest 22</code><br>
    <code>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener">DEVS</a></code> <br>
    <code>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener">SNAMEGENERATOR</a></code><br>
    <code>- 30 Days Flutter 21</code><br>
    <code>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener">KRPRT-OCTO-UPLOADER</a></code><br>
    <code>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener">KSHARED-NOCTO-COPIER</a></code><br>
    <code>- PLANBANK website</code><br>
    <code>- IAMTHECOFFEEGUY</code><br>
    <code>- CQMS - Customer Queuing Management System</code><br>
    <code>- LMS - Library Management System</code><br>
    <code>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener">vbex-dot.net</a></code>
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

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  img:hover{
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.typewriter-effect > .text {
  max-width: 0;
  animation: typing 3s steps(var(--characters)) infinite;
  white-space: nowrap;
  overflow: hidden;
}

.typewriter-effect::after {
  content: " |";
  animation: blink 1s infinite;
  animation-timing-function: step-end;
}

@keyframes typing {
  75%,
  100% {
    max-width: calc(var(--characters) * 1ch);
  }
}

@keyframes blink {
  0%,
  75%,
  100% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
}
</style>