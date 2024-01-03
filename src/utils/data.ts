import { EventAction } from '@topology/core';
import axios from "axios";
import { parseSvg } from "@topology/svg";
import pipe1 from '../../public/svg/pipe1.svg'
console.log(pipe1,"svg图片")
/*
 * @Description:
 * @Author: W
 * @Date: 2022-10-13 11:23:17
 * @LastEditTime: 2022-10-13 11:24:26
 */


export const icons = [
  {
    group: '基本形状',
    children: [
      {
        key: 'juxing',
        title: '矩形',
        data: {
          name: 'rectangle',
          // text: '矩形',
          width: 100,
          height: 100,
          title: '',
        },
      },
      {
        key: 'weixuanzhongyuanquan',
        title: '圆形',
        data: {
          name: 'circle',
          text: 'le5le',
          width: 100,
          height: 100,
          title: '',
          events: [
            {
              name: 'click',
              action: EventAction.Emit, // 执行动作
              value: 'showDialog',
            },
          ],
        },
      },

      {
        key: 'tupian',
        title: '图片',
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016ba9554b952b000001bf72fa6574.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636344024&t=f977b8ad47acf62ee3579d594f32489a',
        },
      },

      {
        key: 'shipinbofang',
        title: '视频',
        data: {
          name: 'video',
          width: 100,
          height: 100,
          video: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          autoPlay: true,
        },
      },
      {
        key: 'yinpin',
        title: '音频',
        data: {
          name: 'video',
          width: 100,
          height: 100,
          audio: 'https://down.ear0.com:3321/preview?soundid=37418&type=mp3',
          autoPlay: true,
        },
      },
      {
        title: '三角形',
        key: 'xingzhuang-sanjiaoxing',
        data: {
          text: '三角形',
          width: 100,
          height: 100,
          name: 'triangle',
        },
      },
      {
        title: '左箭头',
        key: 'web__bitebizuojiantou',
        data: {
          text: '左箭头',
          width: 200,
          height: 100,
          name: 'leftArrow',
        },
      },
      {
        title: '消息框',
        key: 'xiaoxikuang',
        data: {
          text: '消息框',
          width: 100,
          height: 100,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'message',
        },
      },
      {
        key: 'zhuxianzuhetu',
        title: '图表',
        data: {
          name: 'echarts',
          width: 400,
          height: 300,
          externElement: true,
          disableAnchor: true,
          echarts: {
            option: {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line',
                },
              ],
            },
          },
        },
      },
    ],
  },
  {
    group: '阀门',
    children: [
      {
        title: '水平管道',
        svg:"../../public/svg/pipe1.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/pipe1.svg"
        },
      },
      {
        title: '垂直管道',
        svg:"../../public/svg/pipe2.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/pipe2.svg"
        },
      },
      {
        title: 'T型管道',
        svg:"../../public/svg/pipe3.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/pipe3.svg"
        },
      },
      {
        title: '圆型转角',
        svg:"../../public/svg/pipe4.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/pipe4.svg"
        },
      },
      {
        title: 'L型管道',
        svg:"../../public/svg/pipe5.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/pipe5.svg"
        },
      },
      {
        title: '十字形接头',
        svg:"../../public/svg/pipe6.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/pipe6.svg"
        },
      },
      {
        title: '罐1',
        svg:"../../public/svg/conic_tank_w_support.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/conic_tank_w_support.svg"
        },
      },
      {
        title: '罐2',
        svg:"../../public/svg/gas_vessel_2.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/gas_vessel_2.svg"
        },
      },
      {
        title: '罐3',
        svg:"../../public/svg/simple-tank.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/simple-tank.svg"
        },
      },
      {
        title: '罐4',
        svg:"../../public/svg/hydropneumatic.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/hydropneumatic.svg"
        },
      },
      {
        title: '阀1',
        svg:"../../public/svg/control_valve.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/control_valve.svg"
        },
      },
      {
        title: '阀2',
        svg:"../../public/svg/hand_valve_2.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/hand_valve_2.svg"
        },
      },
      {
        title: '阀3',
        svg:"../../public/svg/hand_valve_3.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/hand_valve_3.svg"
        },
      },
      {
        title: '关断阀',
        svg:"../../public/svg/hand_valve_4.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/hand_valve_4.svg"
        },
      },

      {
        title: '截止阀',
        svg:"../../public/svg/BatteryValve.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/BatteryValve.svg"
        },
      },
      {
        title: '截止阀2',
        svg:"../../public/svg/BatteryValveTwo.png",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/BatteryValveTwo.png"
        },
      },
      {
        title: '太阳能板',
        svg:"../../public/svg/solarPanel.png",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/solarPanel.png"
        },
      },
      {
        title: '网关',
        svg:"../../public/svg/gateway.png",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/gateway.png"
        },
      },
      {
        title: '网络信号',
        svg:"../../public/svg/signalIntensity.gif",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/signalIntensity.gif"
        },
      },
      {
        title: '阀5',
        svg:"../../public/svg/hand_valve_5.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/hand_valve_5.svg"
        },
      },
      {
        title: '流量计',
        svg:"../../public/svg/流量计.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/流量计.svg"
        },
      },
      {
        title: '温度计',
        svg:"../../public/svg/温度计.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/温度计.svg"
        },
      },
      {
        title: '调压器',
        svg:"../../public/svg/调压器.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/调压器.svg"
        },
      },
      {
        title: '执行器',
        svg:"../../public/svg/actuator.svg",
        data: {
          name: 'image',
          width: 100,
          height: 100,
          image:"../../public/svg/actuator.svg"
        },
      },
    ],
  },
];

