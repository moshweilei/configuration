<template>
  <div>
  <div class="right_header">
    <div v-if="CoreActive">
      <el-tabs v-model="activeNameif" class="demo-tabs">
        <el-tab-pane label="外观" name="first1">
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" >
              <el-collapse-item title="对齐" name="0" v-if="active">
                <i
                  class="iconfont icon-juzuoduiqi"
                  @click="alignment('left')"
                  title="左对齐"
                ></i>
                <i
                  class="iconfont icon-juyouduiqi"
                  @click="alignment('right')"
                  title="右对齐"
                ></i>
                <i
                  class="iconfont icon-jushangduiqi"
                  @click="alignment('top')"
                  title="顶部对齐"
                ></i>
                <i
                  class="iconfont icon-juxiaduiqi"
                  @click="alignment('bottom')"
                  title="底部对齐"
                ></i>
                <i
                  class="iconfont icon-shangxiajuzhongduiqi"
                  @click="alignment('center')"
                  title="垂直居中"
                ></i>
                <i
                  class="iconfont icon-shangxiajuzhongduiqi"
                  @click="alignment('middle')"
                  title="水平居中"
                ></i>
                <i
                  class="iconfont icon-shuipingdengjianju"
                  @click="alignment('spaceBetween')"
                  title="等距分布、左右对齐"
                ></i>
                <i
                  class="iconfont icon-chuizhidengjianju"
                  @click="alignment('spaceBetweenColumn')"
                  title="等距分布、上下对齐"
                ></i>
              </el-collapse-item>

              <el-collapse-item title="位置和大小" v-if="!active" name="1">
                <div class="flex">
                  <span>x</span>
                  <el-input-number
                  @change="(val:any) => selectChange(val, 'x')"
                    controls-position="right"
                    :min="-5000"
                    :max="5000"
                    v-model="place[0].x"
                  />
                </div>
                <div class="flex">
                  <span>y </span>
                  <el-input-number
                  @change="(val:any) => selectChange(val, 'y')"
                    controls-position="right"
                    :min="-5000"
                    :max="5000"
                    v-model="place[0].y"
                  />
                </div>
                <div class="flex">
                  <span>宽度</span>
                  <el-input-number
                  @change="(val:any) => selectChange(val, 'width')"
                    controls-position="right"
                    :min="0"
                    :max="5000"
                    v-model="place[0].width"
                  />
                </div>
                <div class="flex">
                  <span>高度</span>
                  <el-input-number
                  @change="(val:any) => selectChange(val, 'height')"
                    controls-position="right"
                    :min="0"
                    :max="5000"
                    v-model="place[0].height"
                  />
                </div>
                <!-- <div class="flex">
                  <span>圆角:</span>
                  <el-input-number
                    controls-position="right"
                    :min="0"
                    :max="5000"
                    v-model="place.borderRadius"
                  />
                </div> -->
                <div class="flex">
                  <span>旋转</span>
                  <el-input-number
                  @change="(val:any) => selectChange(val, 'rotate')"
                    controls-position="right"
                    :min="0"
                    :max="5000"
                    v-model="place[0].rotate"
                  />
                </div>
                <div class="flex">
                  <span>水平翻转</span>
                  <el-switch v-model="place[0].flipX" @change="(val:any) => selectChange(val, 'flipX')" />
                </div>
                <div class="flex">
                  <span>垂直翻转</span>
                  <el-switch v-model="place[0].flipY"  @change="(val:any) => selectChange(val, 'flipY')"/>
                </div>
              </el-collapse-item>

              <el-collapse-item title="文字" name="2">
                <div class="flex">
                  <span>字体大小</span>
                  <el-input-number
                    v-model="Thetext.fontSize"
                    @change="(val:any) => selectChange(val, 'fontSize')"
                    controls-position="right"
                    :min="0"
                    :max="40"
                  />
                </div>

                <div class="flex">
                  <span>文字颜色</span>
                  <el-color-picker
                    v-model="Thetext.colorpPicker"
                    @change="(val:any) => selectChange(val, 'colorpPicker')"
                    show-alpha
                  />
                </div>

                <div class="flex">
                  <span>浮动文字颜色</span>
                  <el-color-picker
                    v-model="Thetext.hoverTextColor"
                    @change="(val:any) => selectChange(val, 'hoverTextColor')"
                    show-alpha
                  />
                </div>
                <div class="flex">
                  <span>选中文字颜色</span>
                  <el-color-picker
                    v-model="Thetext.activeTextColor"
                    @change="(val:any) => selectChange(val, 'activeTextColor')"
                    show-alpha
                  />
                </div>
                <div class="flex">
                  <span>文字背景</span>
                  <el-color-picker
                    v-model="Thetext.textBackground"
                    @change="(val:any) => selectChange(val, 'textBackground')"
                    show-alpha
                  />
                </div>
                <div class="flex">
                  <span>水平对齐</span>
                  <el-select
                    placeholder=" "
                    v-model="Thetext.textAlign"
                    @change="(val:any) => selectChange(val, 'textAlign')"
                  >
                    <el-option label="左对齐" key="left" value="left" />
                    <el-option label="居中" key="center" value="center" />
                    <el-option label="右对齐" key="right" value="right" />
                  </el-select>
                </div>
                <div class="flex">
                  <span>垂直对齐</span>
                  <el-select
                    placeholder=" "
                    v-model="Thetext.textBaseline"
                    @change="(val:any) => selectChange(val, 'textBaseline')"
                  >
                    <el-option label="顶部对齐" key="top" value="top" />
                    <el-option label="居中" key="middle" value="middle" />
                    <el-option label="底部对齐" key="bottom" value="bottom" />
                  </el-select>
                </div>
                <!-- <div class="flex">
                  <span>行高</span>
                  <el-input-number
                  @change="(val:any) => selectChange(val, 'lineHeight')"
                    v-model="Thetext.lineHeight"
                    controls-position="right"
                    :min="0"
                    :max="40"
                  />
                </div> -->
                <div class="flex">
                  <span>超出省略</span>
                  <el-select
                    v-model="Thetext.ellipsis"
                    @change="(val:any) => selectChange(val, 'ellipsis')"
                  >
                    <el-option label="否" key="0" :value="false" />
                    <el-option label="是" key="1" :value="true" />
                  </el-select>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-tab-pane>
        <el-tab-pane label="数据" name="second2">
          <div class="flex">
            <span> ID</span>
            <el-input
              v-model="place[0].id"
              @change="(val:any) => selectChange(val, 'id')"/>
          </div>
          <div class="flex">
            <span> tag标签</span>
            <el-input
              v-model="place[0].tag"
              @change="(val:any) => selectChange(val, 'tag')"/>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Role" name="third3">Role</el-tab-pane>
      </el-tabs>
    </div>
    <div v-else>
      <el-tabs
        v-model="activeNameelse"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="图纸" name="first">图纸</el-tab-pane>
        <el-tab-pane label="通信" name="second">通信</el-tab-pane>
        <el-tab-pane label="结构" name="third">结构</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { useMainStore } from "../stores/index";
import { storeToRefs } from "pinia";
import { ref, watch, toRaw, isReactive, toRefs, reactive, computed } from "vue";
import { react } from "@babel/types";

import type { TabsPaneContext } from "element-plus";

const activeNameelse = ref<string>("first");
const activeNameif = ref<string>("first1");
const color = ref<string>("#ff0000");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const mainStore = useMainStore();
const { place, CoreActive, active } = storeToRefs(mainStore); //使用storeToRefs函数将state里的数据解构出来实现响应式
console.log(place, CoreActive);
var activeNames = ref(["1"]);

const Thetext = reactive({
  fontSize: 12,
  colorpPicker: "rgba(19, 206, 102, 0)",
  hoverTextColor: "rgba(19, 206, 102, 0)",
  activeTextColor: "rgba(19, 206, 102, 0)",
  textBackground: "rgba(19, 206, 102, 0)",
  textAlign: "",
  textBaseline: "",
  lineHeight: 0,
  ellipsis: false,
});


// const saveIdValue = () => {
//   console.log(window.topology.store.active[0], "选中");
//   let pen = window.topology.store.active[0];
//   window.topology.setValue({ id: pen.id, tags: IdValue.value });
//   window.topology.render();
// };

watch(active, (active) => {
  if (active) {
    activeNames.value = ["0"];
  } else {
    activeNames.value = ["1"];
  }
});

// watch(
//   place,
//   (place) => {
//     place.forEach((element, index) => {
//       console.log()
//       try {
//         window.topology.setValue({
//           id: window.topology.store.active[index].id,
//           x: toRaw(element.x),
//           y: toRaw(element.y),
//           width: toRaw(element.width),
//           height: toRaw(element.height),
//           borderRadius: toRaw(element.borderRadius),
//           rotate: toRaw(element.rotate),
//           flipX: toRaw(element.flipX),
//           flipY: toRaw(element.flipY),
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     window.topology.render();
//     console.log(place, "监听1");
//   },
//   { deep: true }
// );

const selectChange = (res: string, data: string) => {
  console.log(res, data);
  switch (data) {
    case "id":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        newId: res,
      });
      break;
      case "tag":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        tag: res,
      });
      break;
    case "fontSize":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        fontSize: res,
      });
      break;
    case "colorpPicker":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        colorpPicker: res,
      });
      break;
    case "hoverTextColor":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        hoverTextColor: res,
      });
      break;
    case "activeTextColor":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        activeTextColor: res,
      });
      break;
    case "textBackground":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        textBackground: res,
      });
      break;
    case "textAlign":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        textAlign: res,
      });
      break;
    case "textBaseline":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        textBaseline: res,
      });
      break;
    case "lineHeight":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        lineHeight: res,
      });
      break;
    case "ellipsis":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        ellipsis: res,
      });
      break;
      case "x":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        x: res,
      });
      break;
      case "y":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        y: res,
      });
      break;
      case "width":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        width: res,
      });
      break;
      case "height":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        height: res,
      });
      break;
      case "borderRadius":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        borderRadius: res,
      });
      break;
      case "rotate":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        rotate: res,
      });
      break;
      case "flipX":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        flipX: res,
      });
      break;
      case "flipY":
      window.topology.setValue({
        id: window.topology.store.active[0].id,
        flipY: res,
      });
      break;
  }
};

const alignment = (data: string) => {
  switch (data) {
    case "left":
      window.topology.alignNodes("left");
      break;
    case "right":
      window.topology.alignNodes("right");
      break;
    case "top":
      window.topology.alignNodes("top");
      break;
    case "bottom":
      window.topology.alignNodes("bottom");
      break;
    case "center":
      window.topology.alignNodes("center");
      break;
    case "middle":
      window.topology.alignNodes("middle");
      break;
    case "spaceBetween":
      topology.spaceBetween();
      break;
    case "spaceBetweenColumn":
      topology.spaceBetweenColumn();
      break;
  }
};
</script>
<style scoped>
.right_header {
  height: 100%;
  width: 250px;
  border: 1px solid rgb(172, 172, 172);
  overflow: auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
::v-deep .el-input-number {
  width: 130px;
  height: 31px;
}

::v-deep .el-collapse-item__header {
  padding-left: 16px !important;
}

::v-deep .el-select {
  width: 130px;
}

i {
  cursor: pointer;
}

::v-deep .el-tabs__nav {
  transform: translateX(36px) !important;
}
::v-deep .el-input {
  width: 130px;
}
</style>
