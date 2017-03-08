<template>
<div class="list">
  <h1 v-if="seen">这是第一个标题</h1>
  <h1 v-else>这不是第一个标题</h1>
  <p @click="log">
    get-log---{{ msg }}----{{ message }}
  </p>
  <p>
    {{ tel.split('').reverse().join() }}
  </p>
  <p>
    {{ json | capitalize(json) }}
  </p>
  <p v-bind:style="styleObj">
    绑定一个定做样式的样式对象
  </p>
  <!-- <p>
    {{ if (seen) { return tel } }}
  </p> 每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
-->
  <div class="nameRed" v-once>
    v-once---{{ fullName }}
  </div>
  <div class="name">
    watch---name---{{ fullName }}
  </div>
  <div class="">
    computed---name---{{ getFullName }}
  </div>
  <input v-model="fullName" type="text" name="name" value="">
  <!-- <child :my-message="fullName"></child> -->
  <button v-on:click='reverseMessage' type="button" name="button">Reverse Message </button>
    <div class="class-style"
      v-bind:class="{ active: isActive, 'text-danger': hasError }">
      class名字和style样式结合
    </div>
    <div class="class-style"
      v-bind:class="[{ active: isActive }, 'text-danger' ]">
      class名字结合三元表达式
    </div>
    <div class="[ text-danger , error ]">class名字的数组语法</div>
  </div>
  <!-- <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div> -->
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App! ' + new Date(),
      message: 'Hello Vue.js!',
      tel: '1234567',
      json: { name: '文字' },
      firstName: 'Jingjing',
      lastName: 'Yang',
      fullName: 'Jingjing Yang',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      isActive: true,
      hasError: false,
      seen: true,
      styleObj: {
        color: 'yellow',
        'font-size': '24px',
        transform: 'scaleX(90reg)',
        'box-shadow': '4px 4px 5px #999'
      }
    }
  },
  components: '<li>直接引入template</li>',
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString(value)
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    getFullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newName) {
        var name = newName.split(' ')
        this.firstName = name[0]
        this.lastName = name[name.length - 1]
      }
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = this.val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + this.val
    }
    // question: function (newQuestion) {
    //   this.answer = 'Waiting for you to stop typing...'
    //   this.getAnswer()
    // }
  },
  methods: {
    log () {
      var self = this
      self.i = 0
      console.log('[[[[[[]]]]]]' + self.i)
      self.i++
    },
    reverseMessage: function (txt) {
      this.message = this.message.split('').reverse().join('')
    }
    // getAnswer: _.debounce(
    //   function () {
    //     if (this.question.indexOf('?') === -1) {
    //       this.answer = 'Questions usually contain a question mark. ;-)'
    //       return
    //     }
    //     this.answer = 'Thinking...'
    //     var vm = this
    //     axios.get('https://yesno.wtf/api')
    //       .then(function (response) {
    //         vm.answer = _.capitalize(response.data.answer)
    //       })
    //       .catch(function (error) {
    //         vm.answer = 'Error! Could not reach the API. ' + error
    //       })
    //   },
    //   // 这是我们为用户停止输入等待的毫秒数
    //   500
    // )
  }
}

</script>
<style media="screen">
  .active {
    color: red;
  }
  .text-danger {
    border: 4px solid #00f;
  }
  .nameRed {
    color: red;
  }
  .error {
    background-color: tan;
  }
</style>
