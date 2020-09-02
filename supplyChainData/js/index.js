$(function () {
    // 初始化最新消息
    initNews();
    // 初始化园区图表
    initParkChart();
    // 初始化车辆统计图表
    initCarStatisticsChart();
    // 初始化来访人员图表
    initPeopleChart();
    // 初始化订单统计图表
    initOrderChart();
    // 初始化订单列表
    initOrderList();
});

/**
 * 初始化最新消息
 */
const initNews = function () {
    // 最新消息滚动
    $('.div-news-content').liMarquee({
        direction: 'left',
        scrollamount: 20,
        drag: false
    });
}

/**
 * 初始化车辆统计图表
 */
const initCarStatisticsChart = function () {
    const dataAxis = ['罐车', '铝罐车', '飞翼车', '平板车', '高栏车'];
    const data = [220, 182, 191, 234, 290];
    const yMax = 500;
    const dataShadow = [];

    for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }

    const option = {
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: true,
                lineStyle: {
                    color: '#fff'
                },
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                lineStyle: {
                    color: '#fff'
                },
                textStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            containLabel: true,
            top: 60,
            right: 20,
            bottom: 60,
            left: 10
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                // For shadow
                type: 'bar',
                itemStyle: {
                    color: 'rgba(131,191,246,0.2)'
                },
                barGap: '-100%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data
            }
        ]
    };

    const div_car_statistics = echarts.init(document.getElementById('div_car_statistics'));
    div_car_statistics.setOption(option);
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    div_car_statistics.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        div_car_statistics.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });
}

/**
 * 初始化来访人员图表
 */
const initPeopleChart = function () {

    const data = [
        ["2020-08-27", 10],
        ["2020-08-28", 129],
        ["2020-08-29", 135],
        ["2020-08-30", 86],
        ["2020-08-31", 73],
        ["2020-09-01", 50],
        ["2020-09-02", 30]
    ]

    const dateList = data.map(function (item) {
        return item[0];
    });
    const valueList = data.map(function (item) {
        return item[1];
    });

    const option = {
        // Make gradient line here
        visualMap: {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b}: {c} 人'
        },
        grid: {
            containLabel: true,
            top: 30,
            right: 45,
            bottom: 30,
            left: 10
        },
        xAxis: {
            data: dateList,
            boundaryGap: false,
            axisLabel: {
                lineStyle: {
                    color: '#fff'
                },
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLabel: {
                lineStyle: {
                    color: '#fff'
                },
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: {
            name: '来访人员',
            type: 'line',
            areaStyle: {},
            showSymbol: false,
            data: valueList
        }
    };

    const div_visitors = echarts.init(document.getElementById('div_visitors'));
    div_visitors.setOption(option);
}

/**
 * 初始化园区图表
 */
const initParkChart = function () {
    const data = [
        {
            name: '库房A',
            value: 10,
            children: [
                {
                    name: '库房A-1',
                    value: 4
                },
                {
                    name: '库房A-2',
                    value: 6
                }
            ]
        },
        {
            name: '库房B',
            value: 20,
            children: [
                {
                    name: '库房B-1',
                    value: 20,
                    children: [
                        {
                            name: '库房B-1-1',
                            value: 20
                        }
                    ]
                }
            ]
        }
    ];
    const option = {
        series: [{
            type: 'treemap',
            data: data
        }]
    };
    const div_park = echarts.init(document.getElementById('div_park'), 'walden');
    div_park.setOption(option);
}

/**
 * 初始化订单统计图表
 */
const initOrderChart = function () {
    const data = [
        {value: 335, name: '采购订单'},
        {value: 310, name: '销售订单'},
        {value: 274, name: '入库单'},
        {value: 235, name: '出库单'}
    ];
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '订单统计',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                data: data.sort(function (a, b) {
                    return a.value - b.value;
                }),
                label: {
                    show: false,
                    position: 'center',
                    color: '#cdddf7'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '24',
                        fontWeight: 'bold'
                    }
                },
            }
        ]
    };
    const div_order_statistics = echarts.init(document.getElementById('div_order_statistics'), 'walden');
    div_order_statistics.setOption(option);
}

/**
 * 初始化订单列表
 */
const initOrderList = function () {
    // 订单列表滚动
    $('.order_list').liMarquee({
        direction: 'up',
        scrollamount: 10
    });
}