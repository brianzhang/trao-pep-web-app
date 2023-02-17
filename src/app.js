import { Component } from 'react'
// rem 单位
import "@tencent/tea-component-taro/dist/h5/tea.css";
// rpx 单位
import "@tencent/tea-component-taro/dist/weapp/tea.css";
import './app.less'

if (process.env.TARO_ENV === 'h5') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
