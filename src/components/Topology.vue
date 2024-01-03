<!--
 * @Description: 
 * @Author: G
 * @Date: 2021-10-13 11:10:11
 * @LastEditTime: 2021-10-13 14:05:59
-->
<script setup lang="ts">
import { onMounted, ref } from "vue";
// 测试本地使用
// import { Topology } from "../../../../packages/core";
import { register as registerEcharts } from "@topology/chart-diagram";
import { Pen, Topology, Options } from "@topology/core";

import { useMainStore } from "../stores/index";
const mainStore = useMainStore();
let options: Options = {
  rule: true,
  ruleColor: "FFFFFF",
};

onMounted(() => {
  const topology = new Topology("topology");
  topology.setOptions(options);
  topology.resize();

  // const clickfn = (event, data) => {
  //   let scale: Number = topology.store.data.scale;
  //   console.log(scale, "缩放比例");
  //   console.log(event, data, "clickfn");
  //   if (event.pen) {
  //     let place = [
  //       {
  //         name: event.pen.name,
  //         width: parseInt(event.pen.width),
  //         height: parseInt(event.pen.height),
  //         x: parseInt(event.pen.x),
  //         y: parseInt(event.pen.y),
  //         borderRadius: parseInt(event.pen.borderRadius),
  //         rotate: parseInt(event.pen.rotate),
  //         flipX: event.pen.flipX,
  //         flipY: event.pen.flipY,
  //         id: event.pen.id,
  //         tag: event.pen.tag,
  //       },
  //     ];
  //     mainStore.updateplace(place);
  //   }
  //   if (event.pen) {
  //     console.log("执行1");
  //     mainStore.updateCoreActive(true);
  //   } else {
  //     console.log("执行2");
  //     mainStore.updateCoreActive(false);
  //   }
  // };

  // const activefn = (event, data) => {
  //   let scale: Number = topology.store.data.scale.toFixed(1);
  //   console.log(scale, "缩放比例");
  //   console.log(event, "---", data, "activefn");
  //   if (!!event && event.length != 0) {
  //     if (event.length > 1) {
  //       mainStore.updateActive(true);
  //       let place = [];
  //       event.forEach((element) => {
  //         place.push({
  //           name: element.name,
  //           width: parseInt(element.width),
  //           height: parseInt(element.height),
  //           x: parseInt(element.x),
  //           y: parseInt(element.y),
  //           borderRadius: parseInt(element.borderRadius),
  //           rotate: parseInt(element.rotate),
  //           flipX: element.flipX,
  //           flipY: element.flipY,
  //           id: element.id,
  //           tag: element.tag,
  //         });
  //       });
  //       mainStore.updateplace(place);
  //     } else {
  //       mainStore.updateActive(false);
  //       let place = [
  //         {
  //           name: event[0].name,
  //           width: parseInt(event[0].width),
  //           height: parseInt(event[0].height),
  //           x: parseInt(event[0].x),
  //           y: parseInt(event[0].y),
  //           borderRadius: parseInt(event[0].borderRadius),
  //           rotate: parseInt(event[0].rotate),
  //           flipX: event[0].flipX,
  //           flipY: event[0].flipY,
  //           id: event[0].id,
  //           tag: event[0].tag,
  //         },
  //       ];
  //       mainStore.updateplace(place);
  //     }

  //     //选中节点为线的，并改变他的宽度
  //     if (event[0].name == "line") {
  //       mainStore.updateselectId(event[0].id);
  //       topology.setValue({ id: event[0].id, lineWidth: 10 });
  //     }

  //     mainStore.updateCoreActive(true);
  //   }
  //   console.log(event instanceof Array, "???");
  // };

  topology.on('*',(event, data)=>{
    console.log(event, data)
  });
  //   //监听点击事件
  topology.on("click", (event) => {
    if (event.pen) {
      console.log("执行1");
      mainStore.updateCoreActive(true);
    } else {
      console.log("执行2");
      mainStore.updateCoreActive(false);
    }
    console.log("点击");
  });

  //监听选中事件
  topology.on("active", (event) => {
    let scale = topology.store.data.scale.toFixed(1);
    console.log(scale, "???");
    if (event.length != 0 && event.length == 1) {
      mainStore.updateCoreActive(true);
      mainStore.updateActive(false);
      let place = [
        {
          name: event[0].name,
          width: parseInt(event[0].width),
          height: parseInt(event[0].height),
          x: parseInt(event[0].x),
          y: parseInt(event[0].y),
          borderRadius: parseInt(event[0].borderRadius),
          rotate: parseInt(event[0].rotate),
          flipX: event[0].flipX,
          flipY: event[0].flipY,
          id: event[0].id,
          tag: event[0].tag,
        },
      ];
      mainStore.updateplace(place);
      console.log(event, "选中单");
    } else if (event.length != 0 && event.length > 1) {
      console.log(event, "选中多");
      mainStore.updateActive(true);
      mainStore.updateCoreActive(true);
      let place = [];
      event.forEach((element) => {
        place.push({
          name: element.name,
          width: parseInt(element.width),
          height: parseInt(element.height),
          x: parseInt(element.x),
          y: parseInt(element.y),
          borderRadius: parseInt(element.borderRadius),
          rotate: parseInt(element.rotate),
          flipX: element.flipX,
          flipY: element.flipY,
          id: element.id,
          tag: element.tag,
        });
      });
      mainStore.updateplace(place);
    } else {
      mainStore.updateCoreActive(false);
      mainStore.updateActive(false);
      mainStore.updateplace([]);
    }
  });
  //移动画笔结束
  // topology.on("translatePens", ()=>{
  //   console.log("移动画笔结束")
  // });
  // topology.on("resizePens", ()=>{
  //   console.log("画笔大小改变")
  // });
  // topology.on("translatingPens", ()=>{
  //   console.log("移动画笔中")
  // });
  // topology.on("enter", ()=>{
  //   console.log("鼠标进入画笔")
  // });
  // topology.on("scale", (event, data)=>{
  //   console.log(event, data,"缩放画布")
  // });

  //生命周期 添加节点前
  topology.beforeAddPens = async (pens: Pen[]) => {
    console.log("addPens", pens);
    // 1. window.confirm 会阻塞后面代码，不推荐
    // return window.confirm("是否添加此类图元？");

    // 2. Promise 类型 Modal
    // showDialog 伪代码，需自行实现
    // const res = await showDialog("是否添加此类图元？");
    // 返回 true 允许 remove
    return true;
  };

  //生命周期 删除节点前
  topology.beforeRemovePens = async (pens: Pen[]) => {
    console.log("removePens", pens);
    // showDialog 伪代码，需自行实现

    // 返回 true 允许 remove
    return true;
  };

  // 使用wbesoket 方式1
  // topology.connectWebsocket("ws://localhost:8088/");

  const params = {
    // mqtt: "ws://192.168.10.130:8083/mqtt",
    mqtt: "ws://broker.emqx.io:8083/mqtt",
    mqttTopics: "topic1", // 多个主题用,分割
    mqttOptions: {
      clientId: "12314",
      username: "emqx",
      password: "public",
      // 如果clientId不为空，默认会随机重新生成一个clientId，避免连接冲突
      // 如果设置customClientId=true，不随机生成，使用用户自定义的固定的clientId
      customClientId: true,
    },
  };

  // topology.store.data.mqtt = params.mqtt;
  // topology.store.data.mqttTopics = params.mqttTopics;
  // topology.store.data.mqttOptions = params.mqttOptions;
  // topology.connectMqtt();
  // console.log(topology.mqttClient.publish("event", "data"), "啥啊");

  // registerEcharts();

  // 监听消息
  topology.on("showDialog", ({ pen }: { pen: Pen }) => {
    currentPen.value = pen;

    // vue 打开弹窗
    visible.value = true;
  });
});

const visible = ref(false);
const currentPen = ref<Pen>({});
console.log(currentPen, "1");
</script>

<template>
  <div class="main">
    <div class="topology" id="topology"></div>
  </div>

  <a-modal v-model:visible="visible" :title="currentPen.text">
    <p>{{ currentPen.name }} asdas</p>
    <p>{{ currentPen.text }}</p>
  </a-modal>
</template>

<style scoped></style>
