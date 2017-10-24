const app = new Vue({
    el: '#app',
    data: {
        currect:2,
        navtrans:'navright',
        pagetrans:'pageup'
    },
    methods:{
        clickNav(index){
            if(index > this.currect){
                this.navtrans = 'navright'
                this.pagetrans = 'pageup'
            }else{
                this.navtrans = 'navleft'
                this.pagetrans = 'pagedown'
            }
            this.currect = index
        }
    }
})