<script setup>
import {reactive, ref} from 'vue';

import {FilterOutlined, SearchOutlined} from '@ant-design/icons-vue';
import db from "../data.js";
import {pinyin} from 'pinyin-pro';
import {tagColor, tagsAll} from "../tagColors.js";

const dataSource = db;
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
    title: '链接',
    dataIndex: 'link',
    key: 'link',
    ellipsis: true,
    resizable: true,
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
  {
    title: '访问',
    dataIndex: 'guoNei',
    key: 'guoNei',
    ellipsis: true, resizable: true,
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
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
      <template v-if="column.key === 'title'">
        <a>
          {{ record.title }}
        </a>
      </template>
      <template v-if="column.key === 'link'">
        <a :href="record.link" target="_blank">
          {{ record.link }}
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
      <template v-else-if="column.key === 'guoNei'">
        <span>
          <a-switch v-model:checked="record.guoNei" checked-children="国内" un-checked-children="国外"></a-switch>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <!--        <span>-->
        <!--          <a>Invite 一 {{ record.name }}</a>-->
        <!--          <a-divider type="vertical" />-->
        <!--          <a>Delete</a>-->
        <!--          <a-divider type="vertical" />-->
        <!--          <a class="ant-dropdown-link">-->
        <!--            More actions-->
        <!--            <down-outlined />-->
        <!--          </a>-->
        <!--        </span>-->
      </template>
    </template>
  </a-table>
</template>


