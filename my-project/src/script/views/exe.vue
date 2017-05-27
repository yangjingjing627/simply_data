<template>
  <div id="exe" class="right-side">
    <div class="">
      <input type="button" name="name" value="forOf" @click="forOf">
      <input type="button" name="name" value="codeAt" @click="codeAt">
      <input type="button" name="name" value="letjson" @click="letjson">
      <input type="button" name="name" value="letstring" @click="letstring">
      <input type="button" name="name" value="super" @click="getsuper">
      <input type="button" name="name" value="getclass" @click="getclass">
      <input type="button" name="name" value="getPerson" @click="getPerson">
      <input type="button" name="name" value="getset" @click="getset">
      <input type="button" name="name" value="getmap" @click="getmap">
      <input type="button" name="name" value="model" @click="model">
    </div>
    <div class="">
      <router-link to="/exe/ele" >Element-ui</router-link>
    </div>
    <div class="vuexEx">
      <router-link to="/exe/vuexEx" >Vuex</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import getInfo from '../es6/main.js'
export default {
  name: 'exe',
  data () {
    return {

    }
  },
  methods: {
    forOf () {
      let text = 'this is a math lesson,so boring!'
      for (let i of text) {
        console.log(i)
      }
    },
    letjson () {
      let {
        desert, food, drink
      } = this.breakfast()
      console.log(desert, food, drink)
    },
    breakfast () {
      return {
        desert: 'ice cream',
        food: 'egg',
        drink: 'orange juice'
      }
    },
    letstring () {
      let desert = 'cake'
      let drink = 'milk'
      var breakfast = '今天的早餐' + desert + '和' + drink
      console.log(breakfast)
    },
    getsuper () {
      let breakfast = {
        getDrink () {
          return 'tea'
        }
      }
      // let dinner = {
      //   getDrink () {
      //     return 'bear'
      //   }
      // }
      let sunday = {
        __proto__: breakfast,
        getDrink () {
          return super.getDrink() + '和milk'
        }
      }
      console.log(sunday.getDrink())
    },
    getclass () {
      class Chef {
        constructor (food) {
          this.food = food
          this.dish = []
        }

        get menu () {
          return this.dish
        }

        set menu (dish) {
          return this.dish.push(dish)
        }

        cook () {
          console.log(this.food)
        }

        static cook (food) {
          console.log(food)
        }
      }
      let gp = new Chef('tomato')
      gp.cook()
      Chef.cook('borrocco')
      // console.log(gp.menu = 'potato and pizza')
      gp.menu = 'pear'
      gp.menu = 'aplle'
      gp.menu = [ 'orange', 'peach' ]
      console.log(gp.menu)
    },
    getPerson () {
      class Person {
        constructor (name, birthday) {
          this.name = name
          this.birthday = birthday
        }
        intro () {
          return `${this.name}, ${this.birthday}`
        }
      }
      class Son extends Person {
        // constructor (name, birthday) {
        //   super(name, birthday)
        // }
      }
      let gp2 = new Son('yangjing', '1992-01-01')
      console.log(gp2.intro())
    },
    getset () {
      let deaert = new Set([ 'aplle', 'peach', 'milk' ])
      console.log(deaert)
      console.log(deaert.size)
      console.log(deaert.has('aplle'))
      console.log(deaert.delete('milk'))
      console.log(deaert)
      deaert.forEach(deaert => {
        console.log(deaert + '---')
      })
    },
    getmap () {
      let food = new Map()
      let fruit = {}
      let cook = function () {}
      let desert = '甜点'
      food.set(fruit, 'lemon')
      console.log(food)
      food.set(cook, 'fork')
      console.log(food)
      console.log(food.get(fruit))
      food.set(desert, 'cake')
      console.log(food.get('甜点'))
      // console.log(food.get(desert))
    },
    codeAt () {
      let text = 'this is a math lesson,so boring!'
      let a = 'hello world!'
      let num = '23.56'
      console.log(text.charAt(10))
      console.log(a.startsWith('hellow'))
      console.log(a.endsWith('!'))
      console.log(a.includes('w'))
      console.log(num.repeat(2))
      // console.log(num.repeat(-2.9))  报错
    },
    model () {
      console.log(getInfo('apple'))
    }
  }
}
</script>
<style>
</style>
