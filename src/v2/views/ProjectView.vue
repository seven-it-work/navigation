<script setup>
import {reactive, ref} from 'vue';

import {FilterOutlined, SearchOutlined} from '@ant-design/icons-vue';
import {pinyin} from 'pinyin-pro';
import {tagColor, tagsAll} from "../tagColors.js";

const dataSource = [{
  title: '生活博客部署',
  gitee: 'https://gitee.com/GTeam_seven/love',
  description: `<div><a href="//love.seven.cn">love.seven.cn</a></div>
  <div><a href="https://love-source.vercel.app/">vercel</a></div>
  <div><a href="https://seven-love.netlify.app">netlify</a></div>
  `,
  tags: ['生活博客'],
  gitHub: 'https://github.com/seven-it-work/love',
},{
  title: '生活博客源码',
  gitee: 'https://gitee.com/GTeam_seven/love-source',
  description: '',
  tags: ['生活博客'],
  gitHub: 'https://github.com/seven-it-work/love-source',
},{
  title: '技术博客源码',
  gitee: 'https://gitee.com/GTeam_seven/my-blog',
  description: '',
  tags: ['技术博客'],
  gitHub: 'https://github.com/seven-it-work/my-blog',
},{
  title: '技术博客部署',
  gitee: '',
    description: `<div><a href="//seven-it-work.github.io">GitHub Pages</a></div>
  <div><a href="https://my-blog-alpha.vercel.app/">vercel</a></div>
  <div><a href="https://seven-blog.netlify.app/">netlify</a></div>
  `,
  tags: ['技术博客'],
  gitHub: 'https://github.com/seven-it-work/seven-it-work.github.io',
},{
  title: '导航源码',
  gitee: 'https://gitee.com/GTeam_seven/navigation',
    description: `<div><a href="https://seven-it-work.github.io/navigation/">GitHub Pages</a></div>
  <div><a href="https://navigation-mu.vercel.app/#/">vercel</a></div>
  <div><a href="https://seven-navigation.netlify.app/">netlify</a></div>
  `,
  tags: ['导航源码'],
  gitHub: 'https://github.com/seven-it-work/navigation',
},{
  title: '游戏集合',
  gitee: 'https://gitee.com/GTeam_seven/game-collection',
  description: '',
  tags: ['游戏'],
  gitHub: '',
},{
  title: 'win自动任务程序',
  gitee: '',
  description: '',
  tags: ['win自动任务程序'],
  gitHub: 'https://github.com/seven-it-work/personal-assistant',
},{
  title: '图床',
  gitee: 'https://gitee.com/GTeam_seven/drawing-bed',
  description: '',
  tags: ['图床'],
  gitHub: '',
},{
  title: '江湖文字游戏',
  gitee: '',
  description: '',
  tags: ['游戏'],
  gitHub: 'https://github.com/seven-it-work/MyJangHu',
},{
  title: 'mud-game',
  gitee: '',
  description: '',
  tags: ['游戏'],
  gitHub: 'https://github.com/seven-it-work/mud-game',
},{
  title: '电子书收集',
  gitee: '',
  description: '',
  tags: ['电子书'],
  gitHub: 'https://github.com/seven-it-work/book',
}, {
  title: 'api接口平台',
  gitee: '',
  description: '待开发',
  tags: ['api接口'],
  gitHub: '',
},{
  title: 'git项目自动推送',
  gitee: '',
  description: '待开发',
  tags: ['win自动任务程序','git'],
  gitHub: 'https://github.com/seven-it-work/scheduledTasks',
}, ];
const state = reactive({
  searchText: '',
  searchedColumn: '',
});
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    customFilterDropdown: true,
    onFilter: (value, record) => {
      if (value) {
        return record.title.toLowerCase().includes(value.toLowerCase()) ||
            pinyin(record.title, {toneType: 'none'}).replace(" ", "").toLocaleLowerCase().includes(value.toLocaleLowerCase())
      } else {
        return true
      }
    },
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
    ellipsis: true,
    resizable: true,
    fixed: 'left',
    width: 200,
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    customFilterDropdown: true,
    onFilter: (value, record) => {
      if (value) {
        return record.description.toLowerCase().includes(value.toLowerCase()) ||
            pinyin(record.description, {toneType: 'none'}).replace(" ", "").toLocaleLowerCase().includes(value.toLocaleLowerCase())
      } else {
        return true
      }
    },
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
    ellipsis: true, resizable: true,
  },
  {
    title: 'Gitee',
    dataIndex: 'gitee',
    key: 'gitee',
    ellipsis: true,
    resizable: true,
  },
  {
    title: 'gitHub',
    dataIndex: 'gitHub',
    key: 'gitHub',
    ellipsis: true,
    resizable: true,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    filters: tagsAll,
    filterSearch: (input, filter) => filter.value.toLocaleUpperCase().includes(input.toLocaleUpperCase()) ||
        pinyin(filter.value, {toneType: 'none'}).replace(" ", "").toLocaleLowerCase().includes(input.toLocaleLowerCase()),
    onFilter: (value, record) => {
      if (value) {
        return record.tags.includes(value)
      } else {
        return true
      }
    },
    ellipsis: true, resizable: true,
  },
]
const searchInput = ref();

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};
const handleReset = clearFilters => {
  clearFilters({
    confirm: true,
  });
  state.searchText = '';
};

function handleResizeColumn(w, col) {
  col.width = w;
}

const maxTalbeY = window.innerHeight - 200

</script>
<template>
  <a-table :dataSource="dataSource" :columns="columns" style="background: white" :pagination="{ pageSize: 100 }"
           :scroll="{ y: maxTalbeY,x: 1500 }" @resizeColumn="handleResizeColumn">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'title'">
        <span>
          {{ column.title }}
        </span>
      </template>
    </template>
    <template
        #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
    >
      <div style="padding: 8px">
        <a-input
            ref="searchInput"
            :placeholder="`输入${column.title}`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block"
            @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
            @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
            type="primary"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon>
            <SearchOutlined/>
          </template>
          查询
        </a-button>
        <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
          重置
        </a-button>
      </div>
    </template>
    <template #customFilterIcon="{ filtered,column }">
      <search-outlined v-if="column.customFilterDropdown" :style="{ color: filtered ? '#108ee9' : undefined }"/>
      <FilterOutlined v-else :style="{ color: filtered ? '#108ee9' : undefined }"/>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'description'">
        <span v-html="record.description"></span>
      </template>
      <template v-if="column.key === 'title'">
        <a>
          {{ record.title }}
        </a>
      </template>
      <template v-else-if="column.key === 'gitHub'">
        <a :href="record.gitHub" target="_blank">
          {{ record.gitHub }}
        </a>
      </template>
      <template v-else-if="column.key === 'gitee'">
        <a :href="record.gitee" target="_blank">
          {{ record.gitee }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tagColor[tag]"
          >
            {{ tag }}
          </a-tag>
        </span>
      </template>
    </template>
  </a-table>
</template>


