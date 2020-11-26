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
    },
    methods : {}
}
