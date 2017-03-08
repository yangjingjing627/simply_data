<template>
<div id="hhs">
  <p>
    {{ message }}
  </p>
  <ul>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ul>
  </div>
</template>
<script>
export default {
  name: 'hh',
  data: function () {
    return {
      message: '青苹果🍏🍎乐园',
      todos: [
        {text: 'first lesson'},
        {text: 'second lesson'},
        {text: 'third lesson'}
      ]
    }
  }
}
</script>
<style media="screen">
  #hhs ul li {
    list-style: none;
    color: red;
    font-size: 20px;
  }
</style>
