<template>
  <div class="from-tpl">
    <fieldset>
      <label for="">文本</label>
      <input v-model="msg" type="text" name="name" value="">
      <p>
        Message is: {{ msg }}
      </p>
    </fieldset>
    <fieldset>
      <label for="">多行文本</label>
      <span>Multiline message is:</span>
      <p style="white-space: pre">{{ msg }}</p>
      <br>
      <textarea v-model="msg" placeholder="add multiple lines"></textarea>
    </fieldset>
    <fieldset>
      <label for="">多选框1</label>
      <input type="checkbox" name="name" value=""
        v-model="checked">
      <label for="">{{ checked }}</label>
    </fieldset>
    <fieldset>
      <label for="">多选框2</label>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </fieldset>
    <fieldset>
      <label for="">单选框</label>
      <br>
      <input type="radio" name="name" value="One" v-model="picked">
      <label for="radio1">One</label>
      <br>
      <input type="radio" name="name" value="Two" v-model="picked">
      <label for="radio2">Two</label>
      <br>
      <span>Picked: --- {{ picked }}</span>
    </fieldset>
    <fieldset>
      <label for="">下拉列表</label>
      <br>
      <select class="" name="" v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected }}</span>
    </fieldset>
    <fieldset>
      <label for="">下拉列表</label>
      <br>
      <select class="" name="" v-model="selected_" multiple>
        <option v-for="opt in option" v-bind:value="opt.value">{{ opt.text }}</option>
      </select>
      <br>
      <span>Selected: {{ selected_ }}</span>
    </fieldset>
    <fieldset>
      <label for="">上传文件</label>
      <input type="file" v-on:change="getFileName" name="name" value="">
    </fieldset>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'form',
    data () {
      return {
        msg: 'Thia is a 文本 示例',
        checked: true,
        checkedNames: [],
        picked: '',
        selected: '',
        selected_: [],
        option: [
          { 'text': 'One', value: 'A' },
          { 'text': 'Two', value: 'B' },
          { 'text': 'Three', value: 'C' }
        ]
      }
    },
    methods: {
      getFileName: function (event) {
        this.file = event.target.file
        console.log(event.target)
      }
    }
  }
</script>
<style media="screen">
  fieldset {
    border: 1px solid #ccc;
  }
</style>
