import React, { Component } from "react"
import { View, Text, Button } from "@tarojs/components"
import Chart from "@/component/echarts_tcomponents/Chart"

import "./index.scss"

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line"
    }
  ]
}

export default class Index extends Component {
  state = {
    chartOption: {}
  }

  render() {
    return (
      <View className="index">
        <Text>Echarts图表</Text>

        <Chart option={option} />
      </View>
    )
  }
}
