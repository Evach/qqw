function font () {

    /* 
        设计稿尺寸 / 字体大小  =  可视窗口宽度 / 浏览器字体大小

        如果是参考的设计稿来说，这里写7.5 
        如果参考的是浏览器中项目，这里写3.75
    
    */
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
}


font()

window.onresize = font 