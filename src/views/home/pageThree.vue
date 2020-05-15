<!--
 * @Description: 
 * @Autor: kangpeng
 * @Date: 2020-02-28 14:00:48
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-25 18:15:06
 -->
<template>
  <el-table
    :data="
      tableData.filter(
        data =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column label="Date" prop="date"> </el-table-column>
    <el-table-column label="Name" prop="name"> </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <component
          :is="element"
          :value="name"
          @click="change"
          @blur="changeName"
        >
          {{ name }}
        </component>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      name: '您好',
      element: 'span',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    change() {
      this.element = 'input'
    },
    changeName(e) {
      console.log(e)
      this.name = e.target.value
      this.element = 'span'
    }
  }
}
</script>
