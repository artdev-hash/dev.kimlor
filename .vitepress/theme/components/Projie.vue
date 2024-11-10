<template>
    <br><br>
    <div class="main">    
    <h1 class="about-header">🚀 Open Source / Projects</h1><br>
    <code>Recent  💡  >></code><br>
    <div class="typewriter-effect">
    <div class="text" id="typewriter-text"></div>
    <code>- <a href="https://m-k-products.github.io/store/" target="_blank" rel="noopener">M.K PRODUCTS</a></code></div>
    <code>- <a href="https://artdev-hash.github.io/english-tagalog-vocab/" target="_blank" rel="noopener">ENGLISH TAGALOG VOCAB</a></code><br>
    <code>- <a href="https://artdev-hash.github.io/pc-upgrade-and-repair/" target="_blank" rel="noopener">PC UPGRADE AND REPAIR</a></code><br>
    <code>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener">BICOL TRANSLATE</a></code><br>
    <code>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener">OCTO-FEEDBOARD</a></code><br>
    <code>- <a href="https://lorenzokimarthur.com" target="_blank" rel="noopener">LORENZOKIMARTHUR.COM</a></code><br>
    <code>- <a href="https://artdev-hash.github.io/biz-kal/" target="_blank" rel="noopener">BIZ-KAL</a></code><br>
    <br>

    <h1 class="about-2ndhead">👨‍💻 Support My Actions by</h1><br>
    <code> * Giving Stars ⭐ to my Github Repositories</code><br>
    <code> * You can also <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash">BuyMeaCoffee ☕</a></code><br>
    <code> * Also by Liking or Following My Socials:<br></code>
    <code>  - YT <a href="https://www.youtube.com/channel/UCP2psTOak3Z60eQj1wq--cg" target="_blank" rel="noopener">@kimlorenzo143</a></code><br>
    <code>  - FB <a href="https://www.facebook.com/kimITservices" target="_blank" rel="noopener">kimITservices</a></code><br>
    <code> ** THANK YOU FOR YOUR SUPPORT ❤️ **</code>
    <br><br>
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
.about-2ndhead {
  font-weight:bold;
  padding-bottom: 5px;
  font-size: 1.50em;
  margin-top: 30px;
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