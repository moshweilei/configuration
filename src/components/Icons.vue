<!--
 * @Description:
 * @Author: G
 * @Date: 2021-10-13 11:09:59
 * @LastEditTime: 2021-10-13 14:26:48
-->
<script setup lang="ts">
import { nextTick, ref } from "vue";
import { icons } from "../utils/data";
import axios from "axios";
import { parseSvg } from "@topology/svg";

const onDragStart = (e: any, data: any) => {
  console.log(e, data, "拉");
  e.dataTransfer.setData("Topology", JSON.stringify(data));
};

nextTick(() => {
  // 此处只注册，未将数据放置到工具栏
  // data.ts 中配置的最后一项即为该图形库中的内容
  (window as any).registerToolsNew();
  (window as any).topologyTools = undefined;
});
const activeNames = ref([0])
const rIcons = ref(icons);
console.log(rIcons,"icon")

// axios.get("/T型开关A -C.svg").then((res) => {
//   const data = res.data;
//   const pens = parseSvg(data);
//   rIcons.value.push({
//     group: "阀门",
//     children:[{
//       data: pens,
//       key: 'tupian',
//       title: '/T型开关A -C.svg',
//     }]
   
//   });
// });

</script>

<template>
  <div class="aside">
    <el-collapse v-model="activeNames" class="icon-list">
      <el-collapse-item :title="icon.group"  v-for="(icon , index) in rIcons" :name="index">
        <div
         class="icon-list-div"
        v-for="item in icon.children"
          draggable="true"
          @dragstart="onDragStart($event, item.data)"
          :title="item.title"
        >
          <i v-if="item.key" class="iconfont" :class="`icon-${item.key}`"></i>
          <img
          v-else-if="item.svg"
          :src="item.svg"
          alt=""
          srcset=""
          class="img"
        />
        </div>
      </el-collapse-item>
 
    </el-collapse>


    <!-- <div class="icon-list">
      <div v-for="icon in rIcons">
        <div>{{ icon.group }}</div>
        <div
         class="icon-list-div"
        v-for="item in icon.children"
          draggable="true"
          @dragstart="onDragStart($event, item.data)"
          :title="item.title"
        >
          <i v-if="item.key" class="iconfont" :class="`icon-${item.key}`"></i>
          <img
          v-else-if="item.svg"
          :src="item.svg"
          alt=""
          srcset=""
          class="img"
        />
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.img {
height: 30px;
}
.tools {
  flex-shrink: 0;
  background-color: #f8f8f8;
  border-right: 1px solid #d9d9d9;
  width: 100px;
}

.title {
  color: #0d1a26;
  font-weight: 600;
  font-size: 0.12rem;
  line-height: 1;
  padding: 0.05rem 0.1rem;
  margin-top: 0.08rem;
  border-bottom: 1px solid #ddd;
}

.buttons {
  padding: 0.1rem 0;
}
a {
  display: inline-block;
  color: #314659;
  line-height: 1;
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
}
.iconfont {
  font-size: 1rem;
}
.icon-list-div{
  width: 33%;
  float: left;
  height: 51px;
  line-height: 50px;
  text-align: center;
}
::v-deep .el-collapse-item__header{
  padding-left: 16px !important;
}
</style>
