<template>
    <br><br>
    <div class="main">    
    <h1 class="about-header">👨‍💻 About Me</h1><br>
    <code><b>I'm an IT Specialist / Developer </b></code><br>
    <code><b>Available and Open for Commissions</b></code><br>
    <code><b>A Computer Science Graduate</b></code><br>
    <code><b>Passionate and Kind</b></code><br>
    <div class="typewriter-effect">
    <div class="text" id="typewriter-text"></div>
    <code><b>A Trustworthy person</b></code></div>
    <br>
    <code><b>ENV :</b></code>
    <div class="container">
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></div>
    <div class="image"><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="vitejs" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="vue js" width="40" height="40"/></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" alt="dart" width="40" height="40"/></div>
    <div class="image"><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" alt="laravel" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg" alt="firebase" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40"></div>
    <div class="image"><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-original.svg" alt="visualstudio" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg" alt="mariadb" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg" alt="apache" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="mssql" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" alt=".net" width="40" height="40"></div>
    <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualbasic/visualbasic-original.svg" alt="visualbasic.net" width="40" height="40"></div>

    </div>
    <div class="foot"></div>
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
.foot{
  margin-top: 200px;
  margin-bottom: 200px;
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

.container {
  align-items: center; 
  float: left;
}
.image{
    float: left;
  padding: 5px;
}
</style>