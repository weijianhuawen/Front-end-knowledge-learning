<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
        >辅助智能学习系统</el-header
      >
      <el-container>
        <el-aside width="250px" style="border: 1px solid #eee">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>系统信息管理</template
              >
              <el-menu-item index="1-1">
                <router-link
                  to="emp"
                  style="text-decoration: none; color: #409eff"
                >
                  员工管理
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link
                  to="dep"
                  style="text-decoration: none; color: #409eff"
                >
                  部门管理
                </router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      searchForm: {
        name: "",
        gender: "",
      },
      value: [],
    };
  },
  methods: {},
  mounted() {
    // axios
    //   .get("http://yapi.smart-xwork.cn/mock/169327/emp/list")
    //   .then((resp) => {
    //     this.tableData = resp.data.data;
    //   });
  },
};
</script>

<style>
</style>