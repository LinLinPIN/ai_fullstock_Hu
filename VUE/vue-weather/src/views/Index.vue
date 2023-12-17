<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ localTime }}</div>
            <div class="city">切换城市</div>
        </div>

        <div class="city-info">
            <p class="city">{{ mapData.city }}</p>
            <p class="weather">{{ mapData.weather }}</p>
            <h2 class="temp">
                <em>{{ mapData.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力：{{ mapData.windPower }}</span>|
                <span>风向：{{ mapData.windDirection }}</span>|
                <span>空气湿度：{{ mapData.humidity }}</span>
            </div>
        </div>

        <div class="future" v-if="futureData.length > 0">
            <div class="group">
                明天：
                <span class="tm">白天：{{futureData[0].dayTemp}}℃ {{ futureData[0].dayWeather }} {{futureData[0].dayWindDir}}风 {{ futureData[0].dayWindPower }}</span>
                <span class="tm">夜间：{{futureData[0].nightTemp}}℃ {{ futureData[0].nightWeather }} {{futureData[0].nightWindDir}}风 {{ futureData[0].nightWindPower }}</span>
            </div>
            <div class="group">
                后天：
                <span class="tm">白天：{{futureData[1].dayTemp}}℃ {{ futureData[1].dayWeather }} {{futureData[1].dayWindDir}}风 {{ futureData[1].dayWindPower }}</span>
                <span class="tm">夜间：{{futureData[1].nightTemp}}℃ {{ futureData[1].nightWeather }} {{futureData[1].nightWindDir}}风 {{ futureData[1].nightWindPower }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    data() {
        return {
            localTime: '',
            mapData: {},
            futureData:{}
        }
    },
    created() {// 页面在加载过程中自动执行的函数--生命周期函数
        setInterval(() => {
            this.localTime = new Date().toLocaleTimeString()
        }, 1000)
        this.initAMap()
    },
    methods: {
        initAMap() {
            let that = this
            AMapLoader.load({
                key: "0e4d78357004c1a47e3d0a9429385da1", // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap) => {
                AMap.plugin('AMap.CitySearch', function () {
                    var citySearch = new AMap.CitySearch()
                    citySearch.getLocalCity(function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            // 查询成功，result即为当前所在城市信息
                            console.log(result);


                            that.getWeatherDate(AMap, result.city)
                        }
                    })
                })
            })
        },
        getWeatherDate(AMap, cityName) {
            let that = this
            //加载天气查询插件
            AMap.plugin('AMap.Weather', function () {
                //创建天气查询实例
                var weather = new AMap.Weather();

                //执行实时天气信息查询
                weather.getLive(cityName, function (err, data) {
                    // console.log(err, data);
                    that.mapData = data
                });
                weather.getForecast(cityName, function (err, data) {
                    console.log(err, data);
                    that.futureData = data.forecasts.slice(1,3)
                });
            });
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    background: #000;
    opacity: 0.7;
    color: white;

    .nav {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    .city-info {
        text-align: center;

        .temp {
            font-size: 26px;

            em {
                font-style: normal;
                font-size: 34px;
            }
        }
    }

    .future {
        padding: 0 10px;
        margin-top: 30px;

        .group {
            height: 44px;
            line-height: 44px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.3);
            color: #fff;
            font-size: 13px;
            margin-bottom: 10px;
            padding: 0 10px;
        }
    }
}
</style>