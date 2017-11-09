window.onload = function(){
    const app = new Vue({
        el: '#app',
        data: {
            currect:1,
            navtrans:'navright',
            pagetrans:'pageup',
            scrollLock:false,
            content:{
                navtitle:['个人介绍','能力清单','项目、作品','了解更多'],
                page1:{
                    titleh1:'你好，我是火星人',
                    titleintro:[
                        {
                            span:'个人简介',
                            p:'火星人，108岁'
                        },
                        {
                            span:'毕业院校',
                            p:'火星大学驻冥王星分院'
                        },
                        {
                            span:'所学专业',
                            p:'人类语言'
                        },
                        {
                            span:'兴趣爱好',
                            p:'火星救援'
                        },
                    ],
                    section1:{
                        h2:'自我介绍',
                        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto assumenda obcaecati ratione qui explicabo cum excepturi? Architecto porro quasi pariatur aut aliquid autem, optio iste ex exercitationem iusto distinctio.',
                    },
                    section2:{
                        h2:'实践经历',
                        contents:[
                            {
                                h3:'火星情报站',
                                span:'1930 ~ 至今',
                                p:'给火星飞船打扫卫生，采用先进技术疏通堵塞马桶。',
                            },
                        ]
                    },
                    section3:{
                        h2:'近期目标',
                        contents:[
                            '赚钱造整个银河最大的宙际飞船旅馆。',
                            '做出宇宙里最好吃的银河凉拌陨石色拉。',
                            '有个志同道合的好朋友，最好不是地球人。',
                        ]
                    },
                },
                page2:{
                    contents:[
                        {
                            h2:'HTML+CSS',
                            p:'可以熟练的进行前端页面设计布局、页面重构，熟悉HTML5、CSS3新特性，并会加以运用。',
                        },
                        {
                            h2:'JAVASCRIPT',
                            p:'熟悉原生JS的使用，会在项目中使用ES6/ES7新语法，并在项目中使用BABEL进行转换。',
                        },
                        {
                            h2:'NODEJS',
                            p:'能够运用Node.js进行web开发，会使用Express.js、Pug.js等框架及工具。',
                        },
                        {
                            h2:'VUEJS',
                            p:'深入学习过渐进式框架Vue，有结合Node.js、Vue及其插件开发SAP应用的经验。',
                        },
                        {
                            h2:'PS/AI',
                            p:'熟练使用Photoshop、Illustrator进行图像处理、绘制矢量图形，有制作svg动画的经验。',
                        },
                        {
                            h2:'DESIGN',
                            p:'喜欢追随流行的UI设计潮流，对网页设计元素进行重构，优化用户体验与观感。',
                        },
                    ]
                },
                page3:[
                    {
                        span:'2017',
                        works:[
                            {
                                href:'https://github.com/howie95/helpmechoose',
                                imgsrc:'./img/work0.jpg',
                                tags:['WIP','微信小程序'],
                                h2:'帮我做决定',
                                p:'拯救选择困难症患者于水火之中，两难选择、买哪一件东西、吃哪家餐厅都不会再是难题，简单实用的小程序。'
                            },
                            {
                                href:'https://github.com/howie95/lather',
                                imgsrc:'./img/work1.jpg',
                                tags:['WIP','Vue'],
                                h2:'Lather',
                                p:'一个简单的博客系统，支持日期归档/标签分类/单页面/markdown等功能，前端：Vue+Vue-Router，后端：Nodejs+express+mongoose，数据库：MongoDB。'
                            },
                            {
                                href:'',
                                imgsrc:'./img/work2.jpg',
                                tags:['SUSPEND','微信小程序'],
                                h2:'枕边明月光',
                                p:'一个简单易用的入睡电台，设定喜好及时间即可播放音乐，没有其他繁杂的功能。*暂时因个人小程序号功能限制无法访问'
                            },
                            {
                                href:'https://github.com/howie95/vue-typingit',
                                imgsrc:'./img/work3.gif',
                                tags:['WIP','Vue插件'],
                                h2:'Vue-TypingIt',
                                p:'模拟文字更新的打字/删除效果的小插件，在data里进行简单的配置并在模板中引用即可使用，支持单条、多条、动态更新的文字列表。'
                            },
                        ],
                    },
                    {
                        span:'2016',
                        works:[
                            {
                                href:'',
                                imgsrc:'./img/work4.jpg',
                                tags:['设计'],
                                h2:'19酒商城',
                                p:'一个线上酒水商城的微信公众号的LOGO、标识、部分VI设计，包括在线商城界面的设计、制作。'
                            },
                            {
                                href:'',
                                imgsrc:'./img/work5.jpg',
                                tags:['设计'],
                                h2:'Roar社区',
                                p:'2016“创青春”全国大学生创业大赛参赛作品Roar社区，负责相关概念、网页部分、标识、LOGO的设计与制作。'
                            },
                        ],
                    },
                ],
                page4:{
                    link1:{
                        h2:'我的博客'
                    },
                    link2:{
                        h2:'摄影剪辑'
                    },
                },
            },
            contentEn:{
                navtitle:['Introduce','Abilities','Works','About'],
                page1:{
                    titleh1:'I\'m from Mars',
                    titleintro:[
                        {
                            span:'Info',
                            p:'Mr.mars，108 y/o'
                        },
                        {
                            span:'毕业院校',
                            p:'火星大学驻冥王星分院'
                        },
                        {
                            span:'所学专业',
                            p:'人类语言'
                        },
                        {
                            span:'兴趣爱好',
                            p:'火星救援'
                        },
                    ],
                    section1:{
                        h2:'自我介绍',
                        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto assumenda obcaecati ratione qui explicabo cum excepturi? Architecto porro quasi pariatur aut aliquid autem, optio iste ex exercitationem iusto distinctio.',
                    },
                    section2:{
                        h2:'实践经历',
                        contents:[
                            {
                                h3:'火星情报站',
                                span:'1930 ~ 至今',
                                p:'给火星飞船打扫卫生，采用先进技术疏通堵塞马桶。',
                            },
                        ]
                    },
                    section3:{
                        h2:'近期目标',
                        contents:[
                            '赚钱造整个银河最大的宙际飞船旅馆。',
                            '做出宇宙里最好吃的银河凉拌陨石色拉。',
                            '有个志同道合的好朋友，最好不是地球人。',
                        ]
                    },
                },
                page2:{
                    contents:[
                        {
                            h2:'HTML+CSS',
                            p:'可以熟练的进行前端页面设计布局、页面重构，熟悉HTML5、CSS3新特性，并会加以运用。',
                        },
                        {
                            h2:'JAVASCRIPT',
                            p:'熟悉原生JS的使用，会在项目中使用ES6/ES7新语法，并在项目中使用BABEL进行转换。',
                        },
                        {
                            h2:'NODEJS',
                            p:'能够运用Node.js进行web开发，会使用Express.js、Pug.js等框架及工具。',
                        },
                        {
                            h2:'VUEJS',
                            p:'深入学习过渐进式框架Vue，有结合Node.js、Vue及其插件开发SAP应用的经验。',
                        },
                        {
                            h2:'PS/AI',
                            p:'熟练使用Photoshop、Illustrator进行图像处理、绘制矢量图形，有制作svg动画的经验。',
                        },
                        {
                            h2:'DESIGN',
                            p:'喜欢追随流行的UI设计潮流，对网页设计元素进行重构，优化用户体验与观感。',
                        },
                    ]
                },
                page3:[
                    {
                        span:'2017',
                        works:[
                            {
                                href:'https://github.com/howie95/helpmechoose',
                                imgsrc:'./img/work0.jpg',
                                tags:['WIP','微信小程序'],
                                h2:'帮我做决定',
                                p:'拯救选择困难症患者于水火之中，两难选择、买哪一件东西、吃哪家餐厅都不会再是难题，简单实用的小程序。'
                            },
                            {
                                href:'https://github.com/howie95/lather',
                                imgsrc:'./img/work1.jpg',
                                tags:['WIP','Vue'],
                                h2:'Lather',
                                p:'一个简单的博客系统，支持日期归档/标签分类/单页面/markdown等功能，前端：Vue+Vue-Router，后端：Nodejs+express+mongoose，数据库：MongoDB。'
                            },
                            {
                                href:'',
                                imgsrc:'./img/work2.jpg',
                                tags:['SUSPEND','微信小程序'],
                                h2:'枕边明月光',
                                p:'一个简单易用的入睡电台，设定喜好及时间即可播放音乐，没有其他繁杂的功能。*暂时因个人小程序号功能限制无法访问'
                            },
                            {
                                href:'https://github.com/howie95/vue-typingit',
                                imgsrc:'./img/work3.gif',
                                tags:['WIP','Vue插件'],
                                h2:'Vue-TypingIt',
                                p:'模拟文字更新的打字/删除效果的小插件，在data里进行简单的配置并在模板中引用即可使用，支持单条、多条、动态更新的文字列表。'
                            },
                        ],
                    },
                    {
                        span:'2016',
                        works:[
                            {
                                href:'',
                                imgsrc:'./img/work4.jpg',
                                tags:['设计'],
                                h2:'19酒商城',
                                p:'一个线上酒水商城的微信公众号的LOGO、标识、部分VI设计，包括在线商城界面的设计、制作。'
                            },
                            {
                                href:'',
                                imgsrc:'./img/work5.jpg',
                                tags:['设计'],
                                h2:'Roar社区',
                                p:'2016“创青春”全国大学生创业大赛参赛作品Roar社区，负责相关概念、网页部分、标识、LOGO的设计与制作。'
                            },
                        ],
                    },
                ],
                page4:{
                    link1:{
                        h2:'我的博客'
                    },
                    link2:{
                        h2:'摄影剪辑'
                    },
                },
            },
            contentSwitcher:[],
            switched:false,
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
            switchLang(){
                this.switched = !this.switched
                this.contentSwitcher = this.content
                this.content = this.contentEn
                this.contentEn = this.contentSwitcher
            },
            scrollNav(e){
                if(this.scrollLock == true){return}
                let currectpage = document.getElementById("page"+this.currect)
                let scrollTop = currectpage.scrollTop
                let scrollHeight = currectpage.scrollHeight
                let clientHeight = currectpage.clientHeight
                e = e || window.event
                if (e.wheelDelta) {  //webkit           
                    if (e.wheelDelta > 0) { 
                        if(this.currect == 1){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop == 0){
                            this.scrollLock = true
                            this.clickNav(this.currect-1)
                        }
                    }  
                    if (e.wheelDelta < 0) {
                        if(this.currect == 4){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop + clientHeight + 2 > scrollHeight){
                            this.scrollLock = true
                            this.clickNav(this.currect+1)
                        }
                    }  
                } else if (e.detail) {  //Firefox  
                    if (e.detail> 0) {  
                        if(this.currect == 1){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop == 0){
                            this.scrollLock = true
                            this.clickNav(this.currect-1)
                        }
                    }  
                    if (e.detail< 0) {  
                        if(this.currect == 4){
                            this.scrollLock = false
                            return
                        }
                        if(scrollTop + clientHeight + 2 > scrollHeight){
                            this.scrollLock = true
                            this.clickNav(this.currect+1)
                        }
                    }  
                }
                setTimeout(()=>{this.scrollLock = false},1000)  
            }
        },
        mounted(){
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', this.scrollNav, false)
            }  
            window.onmousewheel = document.onmousewheel = this.scrollNav
            setTimeout(()=>{
                document.getElementById('loading').style.opacity = 0
                document.getElementById('content').style.opacity = 1
            }, 2000)
            setTimeout(()=>{
                let i = document.getElementById('loading')
                i.parentNode.removeChild(i)
            }, 3000)
        }
    })
}