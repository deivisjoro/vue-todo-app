<template>
  <HeaderApp />
  <main>
    <TodoApp title="ToDo App" subtitle="Aplicacion ToDo en Vue.js" />
  </main>
  <FooterApp />
  
</template>

<script>

import HeaderApp from './components/common/HeaderApp.vue';
import TodoApp from './components/todo/TodoApp.vue';
import FooterApp from './components/common/FooterApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,  
    TodoApp,  
    FooterApp,  
  }
}
</script>

<style>  
  *{
    list-style-type: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app{
    min-height: 100vh;
  }

  main{
    padding: 20px;
  }
</style>
