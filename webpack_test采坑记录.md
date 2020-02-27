## webpack_test采坑记录

1. 在引入iconfont的时候，想通过点击该图标实现旋转的功能，发现设置`transform:rotate(180deg)`无效，查询资料后发现原因是因为字体图标靠的是伪类元素，它是行内元素，而rotate无法对行内元素起作用，所以得这样设置

   ```javascript
   .iconfont::before{
       display:inline-block;
       transform:rotate(180deg)
   }
   ```

   