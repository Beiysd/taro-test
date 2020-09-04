import React, { Component } from "react"
import Taro from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import "./index.scss"

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button
          onClick={() => {
            Taro.switchTab({
              url: "/pages/pageone/index"
            })
          }}
        >
          登录
        </Button>
      </View>
    )
  }
}
