var lineChart = echarts.init(document.getElementById('line-chart'));

var option = {
    title : {
        text: 'Line Chart',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高销售','最低销售']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            },
            max:'200',
            min:'0',
        }
    ],
    series : [
        {
            name:'最高销售',
            type:'line',
            smooth:true,
            data:[80, 185, 130, 160, 65, 70, 125,175,85,155,195],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低销售',
            type:'line',
            smooth:true,
            data:[50,165,150,175,80,90,100,155,80,145,160],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
                    
lineChart.setOption(option);