<template>
  <div class="page software-detail">
    <basic-info></basic-info>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import basicInfo from './component/basic-info.vue'
@Component({
  name: 'software-detail',
  components: {
    basicInfo
  }
})
export default class SoftwareDetail extends Vue {

}
</script>

<style lang="less" scoped>
.software-detail {
  // height: 100%;
  padding: 10px;
  background-color: #fff;
}
</style>