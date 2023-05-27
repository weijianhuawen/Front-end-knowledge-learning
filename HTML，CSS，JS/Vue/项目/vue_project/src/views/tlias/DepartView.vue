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
          <!-- 按钮 -->
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="dialogAddDepartVisible = true"
            >新增部门</el-button
          >
          <el-dialog
            title="新增部门信息"
            :visible.sync="dialogAddDepartVisible"
          >
            <el-form
              ref="departForm"
              :model="departForm"
              label-width="80px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="部门名称"
                prop="name"
                :rules="[
                  {
                    required: true,
                    message: '信息不能为空',
                  },
                ]"
              >
                <el-input v-model="departForm.name" value></el-input>
              </el-form-item>
              <el-form-item
                label="部门简介"
                prop="description"
                :rules="[
                  {
                    required: true,
                    message: '信息不能为空',
                  },
                ]"
              >
                <el-input v-model="departForm.description" value></el-input>
              </el-form-item>
              <el-form-item id="createDept">
                <el-button type="primary" @click="onSubmit('departForm')"
                  >立即创建</el-button
                >
                <el-button @click="onCancel">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-divider></el-divider>
          <!-- 表格 -->
          <el-table :data="tableData" stripe style="width: 100%" border>
            <el-table-column prop="did" label="序号" width="100">
            </el-table-column>
            <el-table-column prop="name" label="部门名称" width="280">
            </el-table-column>
            <el-table-column prop="createtime" label="部门创建时间" width="280">
            </el-table-column>
            <el-table-column prop="description" label="部门简介" width="280">
            </el-table-column>
            <el-table-column prop="lasttime" label="最后操作时间" width="280">
            </el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
          </el-table>
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
// import axios from "axios";
export default {
  data() {
    return {
      departForm: {
        name: "",
        description: "",
      },
      tableData: [],
      addData: {
        did: "",
        name: "",
        description: "",
      },
      dialogAddDepartVisible: false,
      searchForm: {
        name: "",
        gender: "",
      },
      value: [],
    };
  },
  methods: {
    onSubmit(formName) {
      //   alert(JSON.stringify(this.addDate));
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(JSON.stringify(this.departForm));
          //   alert(valid);
          this.dialogAddDepartVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onCancel() {
      this.dialogAddDepartVisible = false;
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
    // axios
    //   .get("http://yapi.smart-xwork.cn/mock/169327/emp/list")
    //   .then((resp) => {
    //     this.tableData = resp.data.data;
    //   });
  },
};
</script>

<style>
#createDept {
  display: flex;
}
</style>