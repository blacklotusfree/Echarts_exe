var t = null;
t = setTimeout(time, 1000); //開始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    document.querySelector(".showTime").innerHTML =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        day +
        "-" +
        h +
        "时" +
        m +
        "分" +
        s +
        "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}

//图标左一
(function () {
 var myChart = echarts.init(document.querySelector('.panel .chart'));
 var    option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10%',
            tight:"0%",
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签样式
                axisLabel:{
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                //不显示x坐标轴的样式
                axisLine: {
                    show: false
                }
            }

        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                        width: 2
                        // type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)"
                    }
                }
            }

        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    //图表缩放
    window.addEventListener("resize",function () {
        myChart.resize();
    });

})();
//学习进度图
(function () {
    var myChart = echarts.init(document.querySelector(".bar_r1 .chart"));

    option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%'
        },
        xAxis: {
            show:false
        },
        yAxis: {
            type: 'category',
            show:false,
            //不显示y轴
            axisLine: {show: false},
            splitLine: {show: false},
            //不显示刻度
            axisTick: {show: false},
            axisLabel: {color: "#fff"}

    },
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                //条之间的距离
                barCategoryGap: 50,
                //条的宽度
                barWidth: 10,
                itemStyle: {
                        barBorderRadius: 20
                        // color: function(params) {
                        //     var num = myColor.length;
                        //     return myColor[params.dataIndex % num];
                        // }

                }
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    myChart.setOption(option);
})();
