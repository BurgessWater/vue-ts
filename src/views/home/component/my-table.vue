<template>
<div class="my-table" @click="changeName">
	<div class="table-row" v-for="item in listData" :key="item.id">
		<div class="cell-info">ID: {{ item.id }}</div>
		<div class="cell-info">名称: {{ item.name }}</div>
		<div class="cell-info">语言: {{ item.language }}</div>
		<div class="cell-info">许可证: {{ item.licence }}</div>
		<div class="cell-info">版本: {{ item.version }}</div>
	</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component
export default class MyTabel extends Vue {
  @Prop({type: Array}) listData?:Array<any>


  @Emit('change-name')
  changeName () {
    return 'water-John'
  }
}
</script>
<style lang="less" scoped>
.my-table {
   line-height: 26px;
   font-size: 14px;
   padding: 0 10px;
  .table-row {
    padding: 10px;
    border-top: 1px solid #ededed;
  }
}
</style>