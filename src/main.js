window.onload = function(){
    const app = new Vue({
        el: '#app',
        data: {
            currect:1,
            navtrans:'navright',
            pagetrans:'pageup',
            scrollLock:false,
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
            },
            scrollNav(e){
                if(this.scrollLock == true){return}
                this.scrollLock = true
                let currectpage = document.getElementById("page"+this.currect)
                let scrollTop = currectpage.scrollTop
                let scrollHeight = currectpage.scrollHeight
                let clientHeight = currectpage.clientHeight
                e = e || window.event;  
                if (e.wheelDelta) {  //webkit           
                    if (e.wheelDelta > 0) { 
                        if(this.currect == 1){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop == 0){
                            this.clickNav(this.currect-1)
                        }
                    }  
                    if (e.wheelDelta < 0) {
                        if(this.currect == 4){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop + clientHeight + 2 > scrollHeight){
                            this.clickNav(this.currect+1)
                        }
                    }  
                } else if (e.detail) {  //fFirefox  
                    if (e.detail> 0) {  
                        if(this.currect == 1){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop == 0){
                            this.clickNav(this.currect-1)
                        }
                    }  
                    if (e.detail< 0) {  
                        if(this.currect == 4){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop + clientHeight + 2 > scrollHeight){
                            this.clickNav(this.currect+1)
                        }
                    }  
                }
                setTimeout(()=>{this.scrollLock = false},200)  
            }
        },
        mounted(){
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', this.scrollNav, false);  
            }  
            window.onmousewheel = document.onmousewheel = this.scrollNav; 
            setTimeout(()=>{
                document.getElementById('loading').style.opacity = 0
                document.getElementById('content').style.opacity = 1
            }, 2000);
            setTimeout(()=>{
                let i = document.getElementById('loading')
                i.parentNode.removeChild(i)
            }, 3000);
        }
    })
}