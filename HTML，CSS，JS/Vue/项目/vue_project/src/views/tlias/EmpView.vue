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
          <!-- 查询栏 -->
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="searchForm.gender" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="选择日期">
              <el-date-picker
                v-model="value"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <!-- 新增 -->
          <!-- 按钮 -->
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="dialogAddEmpVisible = true"
            >新增员工</el-button
          >
          <el-dialog
            title="员工信息"
            :visible.sync="dialogAddEmpVisible"
          >
            <el-form
              ref="addEmpForm"
              :model="addEmpForm"
              label-width="80px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="用户名"
                prop="username"
                :rules="[
                  {
                    required: true,
                    message: '用户名不能为空',
                  },
                ]"
              >
                <el-input v-model="addEmpForm.username" value></el-input>
              </el-form-item>
              <el-form-item
                label="姓名"
                prop="name"
                :rules="[
                  {
                    required: true,
                    message: '姓名不能为空',
                  },
                ]"
              >
                <el-input v-model="addEmpForm.name" value></el-input>
              </el-form-item>
             
              <el-form-item id="createDept">
                <el-button type="primary" @click="onSubmit('departForm')"
                  >立即创建</el-button
                >
                <el-button @click="onCancel">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <!-- 表格 -->
          <el-table :data="tableData" border>
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
            ></el-table-column>
            <el-table-column prop="image" label="图像" width="180">
              <template slot-scope="scope">
                <div
                  img_container
                  style="display: flex; justify-content: center"
                >
                  <img
                    :src="scope.row.image"
                    alt=""
                    width="100px"
                    height="100px"
                    style="margin: auto auto"
                  />
                </div>
              </template>
            </el-table-column>
            <el-table-column label="性别" width="140">
              <template slot-scope="scope">
                {{ scope.row.gender == 1 ? "男" : "女" }}
              </template>
            </el-table-column>
            <el-table-column
              prop="job"
              label="职位"
              width="140"
            ></el-table-column>
            <el-table-column
              prop="entrydate"
              label="入职日期"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="updatetime"
              label="最后操作时间"
              width="230"
            ></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
          </el-table>
          <!-- <br /> -->
          <el-divider></el-divider>
          <!-- 分页条 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
            :page-size="10"
          >
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      searchForm: {
        name: "",
        gender: "",
      },
      value: [],
      addEmpForm: {
        username: '',
        name: '',
        gender: '',
        image: '',
        post: '',
        joinDate: '',
        depart: ''
      }
    };
  },
  methods: {
    onSubmit() {
      alert("提交数据成功！");
    },
    handleSizeChange(val) {
      // console.log("当前的页数为 ${val} 条");
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log("总页数为 页");
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    axios
      .get("http://yapi.smart-xwork.cn/mock/169327/emp/list")
      .then((resp) => {
        this.tableData = resp.data.data;
      });
  },
};
</script>

<style>
</style>