export default {
    'name' : 'home',
    data() {
        return {
            'href' : 'https://uniapp.dcloud.io/component/README?id=uniui'
        }
    },
    methods : {
        a (){
            console.log (3)	
        }
    },
    onShow() {
        // #ifdef H5
        console.log(document) ;    
		
        // #endif
		

        // #ifdef APP-PLUS
        // console.log(plus)
        // #endif  
		
    }
		
}	