<template>
  <div id="app">
    <h1>ElementUI按钮库</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <br /><br />
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <br /><br />
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <br /><br />
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <br /><br />
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary"
      >上传<i class="el-icon-upload el-icon--right"></i
    ></el-button>
    <br /><br /><br />
    <h1>Table表格</h1>

    <el-table
      :data="tableData"
      style="width: 100%"
      size="medium"
      max-height="200px"
    >
      <el-table-column prop="date" label="日期" width="120"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-divider></el-divider>
    <el-input v-model="total" placeholder="请输入分页总页数"></el-input>
    <br /><br />
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000"
      :page-size="10"
    >
    </el-pagination>
    <!-- 
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination> -->

    <br /><br />

    <!-- Table -->
    <el-button type="text" @click="dialogTableVisible = true"
      >打开嵌套表格的 Dialog</el-button
    >

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>

    <br /><br />
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true"
      >打开嵌套表单的 Dialog</el-button
    >

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 2,
      total: 100,
      tableData: [
        {
          date: "2023-05-25",
          name: "小花",
          address: "福建省厦门市湖里区",
        },
        {
          date: "2023-05-24",
          name: "小卷",
          address: "湖南省长沙市雨花区",
        },
        {
          date: "2023-05-23",
          name: "小明",
          address: "湖南省长沙市雨花区",
        },
        {
          date: "2023-05-23",
          name: "小明",
          address: "湖南省长沙市雨花区",
        },
        {
          date: "2023-05-23",
          name: "小明",
          address: "湖南省长沙市雨花区",
        },
        {
          date: "2023-05-23",
          name: "小明",
          address: "湖南省长沙市雨花区",
        },
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log("当前的页数为 ${val} 条");
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log("总页数为 页");
      console.log(`当前页: ${val}`);
    },
    submit() {
      alert("提交成功！");
      console.log(JSON.stringify(this.form));
      this.dialogFormVisible = false;
    },
  },
};
</script>

<style lang="">
</style>

