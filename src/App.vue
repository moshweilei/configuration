<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Icons from './components/Icons.vue';
import Topology from './components/Topology.vue';
import Right from './components/Right.vue';
</script>

<template>
  <Header />  
  <div class="content">
    <Icons />
  <Topology />
  <Right/>
  </div>
 
</template>

<style>

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, 5b8b4f53; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; } 

html, body, #app {
  width: 100%;
  height: 100%;
}

input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button { /* chromes and blink button */
  cursor: pointer; 
}

i.iconfont {
  font-size: 30px;
  color: rgba(0,0,0,.65);
}
.content{
  display: flex;
  justify-content: space-between;
  height: calc(100% - 61px);
  width: 100%;
}
.header {
  height: 61px;
  border-bottom: 1px solid #ccc;
}

.logo, .button-group {
  height: 60px;
}

.logo {
  width: 100px;
  padding: 5px;
  float: left;
  text-align: center;
}

.logo img {
  width: 50px;
  height: 50px;
}

.button-group {
  text-align: center;
  padding: 14px;
  padding-left: 100px;
}

.button-group button {
  width: 100px;
  height: 32px;
  border: 1px solid #1890ff;
  border-radius: 2px;
  color: #1890ff;
  background-color: transparent;
  cursor: pointer;
}

.button-group button:hover,
.button-group button.active {
  background-color: #1890ff;
  color: #fff;
}

.button-group > button + button {
  margin-left: 10px;
}

#open {
  position: relative;
}

#open-input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.aside {
  width: 200px;
  border-right: 1px solid #ccc;
  background-color: #fff;
}

.aside .icon-list {
  border-bottom: 1px solid #ccc;
}

/* .aside .icon-list > div,
.aside .link {
  height: 51px;
  line-height: 50px;
  text-align: center;
} */

.aside .icon-list > div i {
  cursor: pointer;
  user-select: none;
}

.main {
  width: calc(100% - 451px);
  height: 100%;
  overflow: hidden;
}

#topology {
  height: 100%;
}
</style>
