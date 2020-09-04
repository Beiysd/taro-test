import React, { Component } from "react"
import Taro from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import "./index.scss"

export default class PageOne extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>PageOne</Text>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/test-page/index"
            })
          }}
        >
          Go Test
        </Button>
      </View>
    )
  }
}
