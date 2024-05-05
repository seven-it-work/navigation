<script>
import {pinyin} from 'pinyin-pro'

function capitalizeFirstLetter(string) {
  return string.toLowerCase().replace(/\b[a-z]/g, function(match) {
    return match.toUpperCase();
  });
}

export default {
  name: "Utils",
  data() {
    return {
      chineseCharacter: "",
      chineseCharacterData:{
        data1:"",
        data2:"",
      }
    }
  },
  methods:{
    chineseCharacterChange(){
      this.chineseCharacterData.data1=pinyin(this.chineseCharacter)
      this.chineseCharacterData.data2=pinyin(this.chineseCharacter,{toneType:'none'})
      this.chineseCharacterData.data3=pinyin(this.chineseCharacter,{toneType:'none',type: 'array'}).map(c=>capitalizeFirstLetter(c)).join("")
    }
  }
}
</script>

<template>
  <div>
    <a-input v-model:value="chineseCharacter" :placeholder="`输入汉字`"></a-input>
    <a-button @click="chineseCharacterChange">转换</a-button>
    <div>
      获取带音调拼音
      <a-textarea :value="chineseCharacterData.data1"></a-textarea>
    </div>
    <div>
      获取不带声调的拼音
      <a-textarea :value="chineseCharacterData.data2"></a-textarea>
    </div>
    <div>
      获取不带声调的拼音(取空格，首字母大写)
      <a-textarea :value="chineseCharacterData.data3"></a-textarea>
    </div>
  </div>
</template>

<style scoped>

</style>