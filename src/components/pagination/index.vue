<template>
  <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="total">
  </el-pagination>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import PageConfig from "./pageConfig"
@Component({
    name: 'Pagination'
  })
export default class Pagination extends Vue {
  
  @Prop({type: Object}) 
  config : PageConfig = {}
  // data

  total = this.config.total
  pageSize = this.config.pageSize
  currentPage =  this.config.currentPage

  
  // 生命周期
  created (): void {
    console.log('child----', this.config)
  }

  // 发送事件
  @Emit('pagination-change')
  handleSizeChange (val: number) {
    return {
      pageSize: val
    }
  }

  @Emit('pagination-change')
  handleCurrentChange (val:number) {
    return {
      // pageSize: this.pageSize,
      currentPage: val
    }
  }

}
</script>
