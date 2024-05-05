<script setup>
import {h, ref} from 'vue';
import {HomeOutlined, SearchOutlined, SettingOutlined} from '@ant-design/icons-vue';
import {useRouter} from 'vue-router'
import {message} from 'ant-design-vue';

const route = useRouter()

const current = ref(['home']);
const items = ref([
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: '首页',
    title: '首页',
  },
  {
    key: 'work',
    // icon: () => h(MailOutlined),
    label: '工作',
    title: '工作',
  },
  {
    key: 'project',
    // icon: () => h(MailOutlined),
    label: '我的项目',
    title: '我的项目',
  },
  {
    key: 'utils',
    // icon: () => h(MailOutlined),
    label: '工具',
    title: '工具',
  },

  // {
  //   key: 'sub1',
  //   icon: () => h(SettingOutlined),
  //   label: 'Navigation Three - Submenu',
  //   title: 'Navigation Three - Submenu',
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1',
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3',
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: 'alipay',
  //   label: h(
  //       'a',
  //       {
  //         href: 'https://antdv.com',
  //         target: '_blank',
  //       },
  //       'Navigation Four - Link',
  //   ),
  //   title: 'Navigation Four - Link',
  // },
]);

const onClick = (data) => {
  route.push({name: data.key})
}

const searchValue = ref($cookies.get('searchValue') || '')
const searchEngine = ref($cookies.get('searchEngine') || 'baidu')

const onSearch = () => {
  if (!searchValue.value) {
    message.error("请输入搜索内容")
    return;
  }
  $cookies.set('searchValue',searchValue.value)
  $cookies.set('searchEngine',searchEngine.value)
  switch (searchEngine.value) {
    case 'baidu':
      window.open(`https://www.baidu.com/s?wd=${searchValue.value}`, '_blank');
      break;
    case 'bing':
      window.open(`https://cn.bing.com/search?q=${searchValue.value}`, '_blank');
      break;
    case 'google':
      window.open(`https://www.google.com/search?q=${searchValue.value}`, '_blank');
      break;
    case 'sogo':
      window.open(`https://www.sogou.com/sogou?query=${searchValue.value}`, '_blank');
      break;
  }
}
</script>

<template>
  <a-row>
    <a-col :span="12">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="onClick"/>
    </a-col>
    <a-col :span="12" style="background-color: white">
      <a-input-search v-model:value="searchValue" size="large"
                      @search="onSearch">
        <template #addonBefore>
          <a-select v-model:value="searchEngine" style="width: 90px;">
            <a-select-option value="baidu">百度</a-select-option>
            <a-select-option value="bing">必应</a-select-option>
            <a-select-option value="google">谷歌(外)</a-select-option>
            <a-select-option value="sogo">搜狗</a-select-option>
          </a-select>
        </template>
      </a-input-search>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>
