<template>
  <div>
    <h1>将html->pug相互转化</h1>
    参考：
    <div><a href="https://github.com/JumpLink/jade2html2jade/tree/gh-pages" target="_blank">jade2html2jade</a></div>
    <div><a href="https://github.com/dimensi/xhtml2pug" target="_blank">xhtml2pug</a></div>
  </div>
  <a-row>
    <a-col :span="11">
      <a-textarea :rows="10" v-model:value="htmlTxt"></a-textarea>
    </a-col>
    <a-col :span="2">
      <a-button style="margin-top: 30px" @click="htmlToPug">→ html转化为pug →</a-button>
      <a-button style="margin-top: 100px" @click="pugToHtml">← pug转化为html ←</a-button>
    </a-col>
    <a-col :span="11">
      <a-textarea :rows="10" v-model:value="pugTxt"></a-textarea>
    </a-col>
  </a-row>
</template>

<script>
import {convert} from "xhtml2pug";
import jade from "jade"

export default {
  name: "htmlToPug",
  data() {
    return {
      htmlTxt: `<div id="test">测试一下</div>`,
      pugTxt: ""
    }
  },
  methods: {
    htmlToPug() {
      if (this.htmlTxt) {
        this.pugTxt = convert(this.htmlTxt,{
          bodyLess: false
        });
      }
    },
    pugToHtml() {
      const options = {
        pretty: true
      };
      this.htmlTxt = jade.render(this.pugTxt, options);
    },
  }
}
</script>

<style scoped>

</style>
