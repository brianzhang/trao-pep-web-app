// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false,
      'dynamic-import-node': true
    }]
  ],
  h5: {
    // ...
    // 经过这一配置之后，代码中引入的处于 `node_modules/@tencent/tea-component-taro/` 路径下的样式文件均会经过 postcss 的编译处理。
    esnextModules: ["@tencent/tea-component-taro"],
  }
}
