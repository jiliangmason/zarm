(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{341:function(n,t,e){"use strict";e.r(t);var i=e(3),r=e.n(i),o=e(4),c=e.n(o),a=e(2),l=e.n(a),s=e(5),d=e.n(s),u=function(n){function t(){var n,i,o,a;c()(this,t);for(var s=arguments.length,d=Array(s),u=0;u<s;u++)d[u]=arguments[u];return i=o=l()(this,(n=t.__proto__||r()(t)).call.apply(n,[this].concat(d))),o.document=function(){return{document:e(417),className:"activity-indicator-page"}},a=i,l()(o,a)}return d()(t,n),t}(e(405).a);t.default=u},417:function(n,t){n.exports="## 活动指示器 ActivityIndicator\n\n### 基本用法\n\n```jsx\nimport { Cell, ActivityIndicator } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell description={<ActivityIndicator />}>普通</Cell>\n        <Cell description={<ActivityIndicator className=\"rotate360\" />}>旋转动画</Cell>\n        <Cell description={<ActivityIndicator size=\"lg\" />}>大号</Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| strokeWidth | number | - | 指示器边框的宽度 |  \n| percent | number | - | 初始百分比 |\n| size | string | 'md' | 大小，可选值 `md`、`lg` |\n"}}]);