page.config({
    url:'http://wx.iddi-inc.com/css/wx/app/180801/images/',//图片路径
    staticImg: [ //静态文件名
        'loading-all.jpg', 
        'lun_03.png',
        'loading-sign.png',
        'home.gif',   
        'active-rule.png',
        'code.png',        
        'com6.png',        
        'combg5_02.jpg',       
        'home-bk.jpg',     
        'liuzi-bk.jpg',        
        'movie2.jpg',      
        'movie_3.jpg',               
    ],
    loadingfn:function(loadingNumber) { //加载处理函数
        console.log(loadingNumber)
        $('.js-loading-number').text(loadingNumber + '%');
        if(loadingNumber == 100) {
        	alert('加载完毕');
        }
    }
})	