<template>
  <div class="world">
    <ul>
      <li v-for="todo in todos">
        {{ message }}----{{ todo.text }}
      </li>
    </ul>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button type="button" name="button" value="toggleLogin"
      @click="toggleLogin">toggle Login Type</button>
    <ul>
      <li v-for="value in object">
        object----{{ value }}
      </li>
    </ul>
    <ul>
      <li v-for="value in reObject">
        <span v-for="(val, key, index) in value">{{ index }} {{ key }}:{{ val }}---</span>
        <!-- reObject----{{ value.firstName }} -->
      </li>
    </ul>
    <p>
      <button type="button" name="button" v-on:click="logMsg('hello world!')">say holle world!</button>
    </p>
    <last-component></last-component>
    <again></again>
    <input v-model="fullName" type="text" name="name" value="">
    <!-- <child :my-message="fullName"></child> -->
  </div>
  </template>
  <script type="text/javascript">
    import Tpl1 from './tpl/tpl1.vue'
    var Child = {
      template: '<div class="red">这是一个嵌套在template里面的一个template，且是部分注册的方式！</div>'
    }
    var Again = {
      template: '<div class="green">嵌套多个组件,这是一个嵌套在template里面的一个template，且是部分注册的方式！</div>'
    }
    export default {
      name: 'world',
      data () {
        return {
          message: '青苹果🍏乐园',
          fullName: 'jingjing Yang',
          myMessage: '',
          todos: [
            // {text: 'first lesson',age: '20岁',age: '女'},
            {text: 'second lesson'},
            {text: 'third lesson'}
          ],
          loginType: 'username',
          object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
          },
          reObject: [
            {
              firstName: 'John',
              lastName: 'Doe',
              age: 30
            },
            {
              firstName: 'John',
              lastName: 'Doe',
              age: 30
            },
            {
              firstName: 'John',
              lastName: 'Doe',
              age: 30
            }
          ]
        }
      },
      components: {
        'last-component': Child,
        'again': Again,
        'tpl1': Tpl1
        // 'child': {
        //   prop: ['myMessage'],
        //   template: '<p>将data数据传到此组件里-- {{ myMessage }} </p>'
        // }
      },
      methods: {
        toggleLogin: function () {
          if (this.loginType === 'username') {
            this.loginType === ''
            console.log(this.loginType)
          } else {
            this.loginType === 'username'
            console.log(this.loginType)
          }
        },
        logMsg: function (msg) {
          console.log('say ' + msg)
        }
      }
    }
  </script>
  <style media="screen">
    .red {
      color: red;
    }
    .green {
      color: green;
    }
  </style>
