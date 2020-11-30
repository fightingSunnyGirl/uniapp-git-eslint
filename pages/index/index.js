/** @format */
import { getHomeData } from '@/servers/noLogin'
export default {
    name : 'home',
    data () {
        return {
            title : 'Hello'
        }
    },
    async onLoad () {
        const data = await getHomeData()
        console.log(data)
        // 异步数据
        const params = {
            age : 12,
            gender : 0
        }
        // 异步数据处理
        this.$store.testStore.dispatch('getLoginData', params)
        // 数据获取
        // console.log('store数据获取', this.$store.loginStore.state)
    },
    methods : {
        // 同步数据处理
        changeLoginStore () {
            this.$store.testStore.commit('changeLogStatus')
        },
        change (e) {
            console.log(e)
        }
    }
}
