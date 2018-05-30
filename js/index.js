// 折线图
var lineChart = echarts.init(document.getElementById('line-chart'));
lineCharts()
function lineCharts(){
    let option = {
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
                max:'400',
                min:'0',
            }
        ],
        series : [
            {
                name:'最高销售',
                type:'line',
                smooth:true,
                itemStyle:{
                    normal:{
                        lineStyle:{
                            color:'#1cc09f',
                            width:3
                        }
                    }
                },
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
}

//百分比

var shopper = echarts.init(document.getElementById('shopper'));
var sell = echarts.init(document.getElementById('sell'));
var gain = echarts.init(document.getElementById('gain'));
var degree = echarts.init(document.getElementById('degree'));

percents(shopper,'#30a5ff',68,32,'68%')
percents(sell,'#ffb53e',68,10,'80%')
percents(gain,'#1ebfae',68,80,'45%')
percents(degree,'#f9243f',68,1,'98%')

function percents(ele,colors,valone,valtow,valthree){
    var placeHolderStyle = {
        normal : {
            color: '#eaeaea',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    let option = {
        title: {
            text: valthree,
            sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle : {
                color : 'rgba(30,144,255,0.8)',
                fontFamily : '微软雅黑',
                fontSize : 30,
                fontWeight : 'bolder'
            }
        },
        tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            showContent: false
        },
        legend: {
            show:false,
            orient : 'vertical',
            // x : document.getElementById('shopper').offsetWidth / 2,
            // y : 45,
            // itemGap:12,
            data:['顾客'],
            selectedMode:true,
            textStyle:{
                fontSize:20
            }
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: false},
                dataView : {show: false, readOnly: false},
                restore : {show: false},
                saveAsImage : {show: false}
            }
        },
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [50, 60],
                itemStyle:{
                    normal:{
                        label: {show:false},
                        labelLine: {show:false},
                        color:colors
                    }
                },
                data:[
                    {
                        value:valone,
                        name:'顾客'
                    },
                    {
                        value:valtow,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }
        ]
    };

    ele.setOption(option);
}

//柱形图
var bar = echarts.init(document.getElementById('bar'));

bars();
function bars(){
    let option = {
        title : {
            text: 'Bar Chart Example'
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
                data : ['2006','2007','2008','2009','2010','2010','2010']
            }
        ],
        yAxis : [
            {
                type : 'value',
                max:100,
                min:0
            }
        ],
        series : [
            {
                name:'最高销售',
                type:'bar',
                data:[100,75,50,75,50,15,100],
                itemStyle:{
                    normal:{
                        label: {show:false},
                        labelLine: {show:false},
                        color:'#1cc09f'
                    }
                },
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
                type:'bar',
                data:[90,65,50,65,40,65,90],
                itemStyle:{
                    normal:{
                        label: {show:false},
                        labelLine: {show:false},
                        color:'#63a3df'
                    }
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    bar.setOption(option);                    
}

var cook = echarts.init(document.getElementById('cook'));
cooks();
function cooks(){
    let option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '30',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    };
    cook.setOption(option);                   
}