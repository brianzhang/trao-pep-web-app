import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { SegmentedControl, Button, Level, Typography } from "@tencent/tea-component-taro";
import './index.less'

export default class Index extends Component {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button>Default</Button>
        <Button type='primary'>Primary</Button>
        <Button.Group
          type='fixed'
          content={
            <Typography.Text>
              <Typography.Text size='xs' theme='light'>
                费用：
              </Typography.Text>
              1200.00 元
            </Typography.Text>
          }
        >
          <Button type='primary'>立即支付</Button>
        </Button.Group>

        <Button.Group
          type='fixed'
          content={
            <Level
              style={{ height: "100%", width: "100%" }}
              start={
                <Typography.Text>
                  <Typography.Text size='xs' theme='light'>
                    费用：
                  </Typography.Text>
                  1200.00 元
                </Typography.Text>
              }
              end={
                <Button type='primary' text>
                  取消
                </Button>
              }
            />
          }
        >
          <Button type='primary'>立即支付</Button>
        </Button.Group>
        <View className='page'>
          <Text className='header'>SegmentedControl 分段器</Text>
          <Text className='header'>基本用法</Text>
          <SegmentedControl
            values={["实时", "昨天", "近 7 天"]}
            onChange={console.log}
          />
          <Text className='header'>更多场景</Text>
          <SegmentedControl
            values={["这是第一项", "第二", "第三项六个字", "第四项"]}
            onChange={console.log}
          />
        </View>
      </View>
    )
  }
}
