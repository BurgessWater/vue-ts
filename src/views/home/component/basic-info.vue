<template>
  <div class="basic-info">
    <div class="cell cell-label">软件名称</div>
    <div class="cell cell2"></div>
    <div class="cell cell-label">编程语言</div>
    <div class="cell">4</div>
    <div class="cell cell-label">供应商</div>
    <div class="cell">6</div>
    <div class="cell cell-label">官方地址</div>
    <div class="cell span5">8</div>
    <div class="cell cell-label">9</div>
    <div class="cell">10</div>
    <div class="cell cell-label">11</div>
    <div class="cell span3">12</div>
    <div class="cell cell-label">13</div>
    <div class="cell">14</div>
    <div class="cell cell-label">15</div>
    <div class="cell">16</div>
    <div class="cell cell-label">17</div>
    <div class="cell">18</div>
  </div>
</template>

<style lang="less" scoped>
.basic-info {
  display: grid;
  grid-template-columns: 218px minmax(218px, 1fr) 218px minmax(218px, 1fr) 218px minmax(218px, 1fr);
  grid-auto-flow: row dense;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
  border-right: 1px solid #919191;
  border-bottom: 1px solid #919191;

  .cell {
    background-color: #ffffff;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-left: 1px solid #919191;
    border-top: 1px solid #919191;
    &.cell-label {
      background-color: #f3f3f3;
      text-align: right;
      padding-left: 0;
      padding-right: 10px;
    }
    &.span3 {
      grid-column-start: span 3;
    }
    &.span5 {
      grid-column-start: span 5;
    }
  }
}


</style>