<template>
  <a-table :dataSource="dataSource" :columns="columns">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'title'">
        <span>
          <SmileOutlined/>
          {{ column.title }}
        </span>
      </template>
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
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
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

<script>

import {SmileOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons-vue';

export default {
  name: 'HomeView',
  components: {SmileOutlined},
  setup() {
    return {
      dataSource: [
        {
          key: '1',
          title: '小狸源码网',
          link: 'https://www.agmsy.com/',
          description: '游戏源码',
          tags: ['游戏源码'],
          guoNei: true,
        },
      ],

      columns: [
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '链接',
          dataIndex: 'link',
          key: 'link',
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '标签',
          dataIndex: 'tags',
          key: 'tags',
        },
        {
          title: '访问',
          dataIndex: 'guoNei',
          key: 'guoNei',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
        },
      ],
    }
  }
}
</script>
