define(['text!../component/paradise/paradise.html',"css!../component/paradise/paradise.css"],function(content){
    function paradiseJS() {
        $('#container').html(content);
            $.ajax({
                type:"get",
                url:"http://duif.applinzi.com/leyuan/leyuan_data.php?address=%E5%85%A8%E5%9F%8E",
                async:true,
                success:function(res){
                    // console.log(res);
                    //这里要注意为什么获取到的是undefine，因为是php文件，返回的是字符串，
                    res = JSON.parse(res);
                    setData(res.data);
                }
            });
            function setData(arr){
                for(var i=0;i<arr.length;i++){
                    var obj = arr[i];
                    var liObj = $('<li><img src="'+obj.img+'"><div class="lDiv"><p>'+obj.name+'</p><p>'+obj.address+'</p></div><div class="rDiv"><p>定位</p>'+obj.dist+'公里</div></li>');
                    $('.p2List').append(liObj);
                }
            }

    }

    return{
        paradiseJS:paradiseJS

    }



})