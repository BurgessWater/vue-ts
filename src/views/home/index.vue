<template>
  <div class="page page-index">
    <section class="search-box">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
            <el-option label="actor" value="4"></el-option>
          </el-select>
          <el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
        </el-input>
    </section>
    <section class="data-setion" :style="{'height': height}">
      <my-table :list-data="showData" @to-detail="gotoDetail"></my-table>
    </section>
    <pagination 
      :config="pageConfig"
      @pagination-change="pageChange"></pagination>
  </div>
</template>

<script lang="ts">
/**
 *  vue-property-decorator
 *  @Component
 *  @Prop
 *  @Watch
 *  @Model
 *  @Emit
 */
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; 
import MyTable from "./component/my-table.vue"
// 页面组件及接口
import Pagination from "@/components/pagination/index.vue";
import PageConfig from "@/components/pagination/pageConfig.ts"

import { getSoftwareList } from '@/api/index'


@Component({
  components: {
    HelloWorld,
    MyTable,
    Pagination
  },
})

export default class Home extends Vue {
  // data
  private input3 = ''
  private select = ''
  private height = '100%'

  private totalData:any = []
  private showData:any = []
  private pageConfig: PageConfig = {
    pageSize: 10,
    currentPage: 1,
    total: 0
  }

  // 生命周期
  private created () {
    this.initData()
    this.requestData();

    getSoftwareList().then(res => {
      console.log("res: ",res)
    })
  }
  private mounted () {
    this.setHeight()
  }

  // 方法
  private initData () {
    getSoftwareList().then(res => {
      console.log("res: ",res)
      this.totalData = res.data.list
      this.pageConfig.total = res.data.total

      console.log("this.pageConfig.total :",this.pageConfig.total )

      this.requestData()
    })
  }
  private setHeight () {
    const page: any = document.querySelector('.page')
    const header: any = document.querySelector('.el-header')
    const search: any = document.querySelector('.search-box')
    const pagination: any = document.querySelector('.el-pagination')
    const height:number = window.innerHeight - header.offsetHeight - search.offsetHeight - pagination.offsetHeight - 40
    this.height = `${height}px`
  }
  private pageChange (param: PageConfig) {
    this.pageConfig.currentPage = param.currentPage
    this.pageConfig.pageSize = param.pageSize
    this.requestData()
  }
  private requestData ():void {
    const { pageSize = 10, currentPage = 1 } = this.pageConfig
    const offset: number = (currentPage -1) * pageSize

    this.showData = this.totalData.slice(offset, offset + pageSize)
  }
  private gotoDetail (item: any) {

    console.log("item---: ",item)
    this.$router.push({
      name: 'software-detail',
      query: item
    })
  }
}
</script>

<style lang="less" scoped>
.page-index {
  
  .search-box {
    background-color: #fff;
    margin-top: 10px;
    /deep/ .input-with-select {
      .el-input-group__prepend {
        width: 160px;
        background-color: #fff;
      }
    }
  }
  .data-setion {
    background-color: #fff;
    margin-top: 10px;
    overflow-y: auto;
  }
  .el-pagination {
    padding: 10px 0;
    background-color: #fff;
    border-top: 1px solid #ededed;
  }
}

</style>
