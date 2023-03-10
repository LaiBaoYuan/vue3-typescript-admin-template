<template>
  <div class="app-container">

    <div>
      <FilenameOption v-model="filename" />
      <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" />
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="Document"
        @click="handleDownload">
        Export Excel
      </el-button>
      <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank"
        style="margin-left:15px;">
        <el-tag type="info">Documentation</el-tag>
      </a>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading..." border fit highlight-current-row>
      <el-table-column align="center" label="Id" width="95">
        <template #="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template #="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template #="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template #="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
        <template #="scope">
          <i class="el-icon-time" />
          <span>{{ dayjs(scope.row.timestamp).format('YYYY-MM-DD HH:mm') }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { fetchList } from '@/api/article'
import dayjs from 'dayjs'
// options components
import FilenameOption from './components/FilenameOption.vue'
import AutoWidthOption from './components/AutoWidthOption.vue'
import BookTypeOption from './components/BookTypeOption.vue'
import { Article } from '../../../mock/article'
import { parseTime } from '@/utils'
export default {
  name: 'ExportExcel',
  components: { FilenameOption, AutoWidthOption, BookTypeOption },
  data() {
    return {
      list: [],
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      dayjs
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'] as (keyof Article)[]
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal: (keyof Article)[], jsonData: Article[]) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
