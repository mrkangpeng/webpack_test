## webpack_test采坑记录

1. 在引入iconfont的时候，想通过点击该图标实现旋转的功能，发现设置`transform:rotate(180deg)`无效，查询资料后发现原因是因为字体图标靠的是伪类元素，它是行内元素，而rotate无法对行内元素起作用，所以得这样设置

   ```javascript
   .iconfont::before{
       display:inline-block;
       transform:rotate(180deg)
   }
   ```

2. 如果需要vue支持jsx语法，那你或许需要安装这个插件以支持在vue中使用jsx语法,详细参考https://github.com/vuejs/jsx
  > npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props   

  然后将设置添加到`.babelrc`中

  ```javascript
    {
      "presets": ["@vue/babel-preset-jsx"]
    }
  ```

3. 在使用`Element-Ui`的`NavMenu`组件时，发现动态渲染菜单数据后折叠菜单栏时文字不隐藏，
  * 出现这个问题是因为我们在`<el-menu>`嵌套中出现了意料之外的`<div>`,而`<el-menu>`标签本身希望里面嵌套的是`<el-menu-item>`,`<el-submenu>`,`<el-menu-item-group>`其中之一
  * 但是我们又不能直接删掉`<div>`,因为`<template>`中包含的必须是一个根标签，而v-for会形成不确定的并列标签
  * 于是我们找到了`vue-fragment`这个库

  安装`vue-fragment`:
  > npm i --save vue-fragment

  在`main.js`中引入:

  ```javascript
    // main.js
    import Fragment from 'vue-fragment'
    Vue.use(Fragment.Plugin)
  ```
  然后将`SideBarItem`组件根标签`div`替换为`fragment`
  
