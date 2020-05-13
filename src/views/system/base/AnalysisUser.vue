<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>用户分析</span>
        </div>
            <el-row :gutter="20">
                <el-col :span="4">
                        <el-select v-model="value1" multiple placeholder="全部平台">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                </el-col>
                <el-col :span="8" >
                    <el-input
                            placeholder="全部频道"
                            v-model="input"
                            clearable>
                    </el-input>
                </el-col>
                <el-col :span="2" style="float: right">
                    <el-button type="success" icon="el-icon-download" circle></el-button>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-date-picker
                            v-model="value2"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions">
                    </el-date-picker>
                </el-col>
                <el-col :span="9">
                    <el-button-group>
                        <el-button type="primary" >今日</el-button>
                        <el-button type="primary" >昨日</el-button>
                        <el-button type="primary" >近7日</el-button>
                        <el-button type="primary" >近30日</el-button>
                    </el-button-group>
                </el-col>
                <el-col :span="2" style="float: right">
                    <el-button type="primary" icon="el-icon-search" circle></el-button>
                </el-col>
            </el-row>

       <el-card class="box-card">
           <div slot="header" class="clearfix">
               <span>图表</span>
           </div>
          <user-charts></user-charts>
       </el-card >
        <el-card class="box-card" style="margin-top: 10px">
            <div slot="header" class="clearfix">
                <span>数据</span>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="dateDay"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="newRegister"
                        label="新增注册"
                        >
                </el-table-column>
                <el-table-column
                        prop="newEquipment"
                        label="新增设备">
                </el-table-column>
                <el-table-column
                        prop="registerConversion"
                        label="注册转化率">
                </el-table-column>
                <el-table-column
                        prop="activeEquipment"
                        label="活跃设备">
                </el-table-column>
                <el-table-column
                        prop="activeUser"
                        label="活跃账号">
                </el-table-column>
                <el-table-column
                        prop="activePayUser"
                        label="老用户活跃（设备）"
                        width="180">
                </el-table-column>
            </el-table>
        </el-card>


        <div class="block">
            <el-pagination layout="prev, pager, next, sizes, total, jumper"
                           :page-sizes="[5, 10,100]"
                           :page-size="pageSize"
                           :total="tableData.length"
                           @current-change="handleCurrentChange"
                           @size-change="handleSizeChange">
            </el-pagination>
        </div>
    </el-card>
</template>

<script>
    import {listMenu} from "../../../api/menu"
    import {listUserAnalysis} from "../../../api/system/base";
    import UserCharts from "../../../components/echarts/UserCharts";
    export default {
        name: "AnaylsisUser",
        components: {UserCharts},
        data() {
            return {
                input: '',
                total: null,
                tableData: null,
                pageSize: 10,
                currentPage: 1 ,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: ''
            }
        },
        methods: {
            initTable() {
                listUserAnalysis(1,10).then(response => {
                    console.log(response)
                    // this.total = response.data.total
                    this.tableData = response.data
                })
            },
            handleCurrentChange:function(cpage){
                this.$data.currentPage = cpage;
            },
            handleSizeChange:function(psize){
                this.$data.pageSize = psize;
            }
        },
        created() {
            this.initTable();
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
</style>