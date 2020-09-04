import React, { Component } from "react"
import { View } from "@tarojs/components"
import echarts from "@/component/echarts_tcomponents/ec-canvas/echarts"

class Chart extends Component {
  static defaultProps = {
    option: {},
    width: "100%",
    height: "300px",
    className: ""
  }

  constructor() {
    super()

    const that = this
    that.chartIns = null
    this.state = {
      ec: {
        onInit: function(canvas, width, height) {
          that.chartIns = echarts.init(canvas, null, {
            width: width,
            height: height
          })

          canvas.setChart(that.chartIns)
          that.setChartOption()
          return that.chartIns
        }
      }
    }
  }

  componentDidUpdate(prevProps) {
    const prevOption = JSON.stringify(prevProps.option)
    const currOption = JSON.stringify(this.props.option)
    if (prevOption !== currOption) {
      this.setChartOption()
    }
  }

  setChartOption = () => {
    const { option = {} } = this.props
    if (this.chartIns) {
      this.chartIns.setOption(option)
    }
  }

  render() {
    const { className = "", width = "100%", height = "300px" } = this.props
    return (
      <View className={className} style={{ width, height }}>
        <ec-canvas force-use-old-canvas="true" id="mychart-dom-area" canvas-id="mychart-area" ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Chart
