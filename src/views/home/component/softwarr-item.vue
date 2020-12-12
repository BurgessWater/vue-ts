<template>
	<div class="table-row" @click="gotoDetailPage">
		<div class="cell-info">ID: {{ item.id }}</div>
		<div class="cell-info">名称: {{ item.name }}</div>
		<div class="cell-info">语言: {{ item.language }}</div>
		<div class="cell-info">许可证: {{ item.licence }}</div>
		<div class="cell-info">版本: {{ item.version }}</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component
export default class MyTabel extends Vue {
  @Prop({type: Object}) item:Object = {}


  @Emit('to-detail')
  gotoDetailPage () {
    return this.item
  }
}
</script>
<style lang="less" scoped>
  .table-row {
    padding: 10px;
    border-top: 1px solid #ededed;
  }
</style>