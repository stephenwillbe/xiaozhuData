<template>
    <div>


    <el-row :gutter="20">
        <el-col :span="12">
            <el-button-group>
                <el-button size="mini" autofocus="true" type="primary" v-on:click="newDevice" >新增设备</el-button>
                <el-button size="mini" type="primary" v-on:click="newAccount" >新增账号</el-button>
                <el-button size="mini" type="primary" v-on:click="livelyDevice" >活跃设备</el-button>
                <el-button size="mini" type="primary" v-on:click="livelyAccount" >活跃账号</el-button>
                <el-button size="mini" type="primary" v-on:click="oldUserLively" >老用户活跃</el-button>
            </el-button-group>
        </el-col>

        <el-col :span="6" style="float: right">
            <el-button-group>
                <el-button size="mini" autofocus="true" type="success" v-on:click="chooseDay">日</el-button>
                <el-button size="mini" type="success" v-on:click="chooseWeek">周</el-button>
                <el-button size="mini" type="success" v-on:click="chooseMonth">月</el-button>
            </el-button-group>
        </el-col>
    </el-row>

        <el-row :gutter="20" id="lineChart">
            <el-col :span="24">
            <div id="main" style="width: 100%;height:400px;"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "UserCharts",
        data: {

        },
        methods: {
            drawChart(MyOptions) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("main"));
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: MyOptions
                    },
                    tooltip: {},
                    legend: {
                        data: [MyOptions]
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: MyOptions,
                            type: "bar",
                            data: [5, 20, 36, 10, 10, 20,32],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            newDevice: function () {
                this.drawChart("新增设备");
            },
            newAccount: function () {
                this.drawChart("新增账号");
            },
            livelyDevice: function () {
                this.drawChart("活跃设备");
            },
            livelyAccount: function () {
                this.drawChart("活跃账号");
            },
            oldUserLively: function () {
                this.drawChart("老用户活跃");
            },
            chooseDay:function () {

            },
            chooseWeek:function () {

            },
            chooseMonth:function () {

            },
        },
        mounted() {
            this.drawChart("新增设备");
        }
    }
</script>

<style scoped>
#lineChart{
    margin-top: 30px;
}
</style>