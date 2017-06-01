//模拟效果而伪造的数据
let zhangsan={
    "success": true,
    "data": {
        "uid": "11111111",
        "nickname": "张三",
        "bio": "Hello World!",
        "following": 222,
        "followers": 111
    }
};

//客户端检测
// XHR对象检测
function creatXHR() {
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            let versions = [ "MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
            for (let i=0,len=versions.length;i<len;i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString=versions[i];
                    break;
                }catch (error){
                    console.log(error)
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString)
    }
}
//事件监听检测
let EventUtil = {
    addHandler(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent(`on${type}`,handler);
        }else {
            element[`on${type}`]=handler;
        }
    }
};
//客户端检测结束

//选择器,可以选择第几个子节点，思路是把子节点放入数组中
function nth(parent,ele,num){
    let _ele=Array.prototype.slice.call(parent.childNodes),
        eleArray=[];
    //将父节点的子节点转换成数组_ele
    for(let i= 0,len=_ele.length;i<len;i++){
        if(_ele[i].nodeType==1){
            eleArray.push(_ele[i]);//过滤掉非元素节点
        }
    }
    if(arguments.length===2){
        //如果只传入2个参数，则如果第二个参数是数字，则选取父节点下的第几个元素
        //如果第二个参数是字符串，则选取父节点下的所有参数代表的节点
        if(typeof arguments[1]==="string"){
            _ele=Array.prototype.slice.call(parent.getElementsByTagName(arguments[1]));
            return _ele;
        }else if(typeof arguments[1]==="number"){
            return eleArray[arguments[1]];
        }
    }else{
        //如果参数齐全，则返回第几个某节点,索引从0开始
        _ele=Array.prototype.slice.call(parent.getElementsByTagName(ele));
        return _ele[num];
    }
}

//自执行
(()=>{
    //获取节点
    let users=document.getElementsByClassName('user-header'),
        overBox=document.getElementsByClassName('overbox'),
        boxTop=document.getElementById('users').offsetTop;  //获取容器距离顶部高度

    for(let i=0,n=users.length;i<n;i++){

        EventUtil.addHandler(users[i],"mouseenter", ()=> {
             //设置延迟，防止鼠标误触
             miss = setTimeout(() => {
                let promise = new Promise((resolve, reject) => {
                    //如果高度过小，使浮动框右移动
                    if (boxTop < 100 && i === 0) {
                        overBox[i].classList.add("overbox-right");
                        overBox[i].firstChild.classList.add("down-right")
                    } else {
                        overBox[i].classList.add("overbox-up");
                        overBox[i].firstChild.classList.add("down-up")
                    }
                    overBox[i].style.display = "block";
                    resolve();
                }).then(() => {
                    //ajax操作
                    let url = `/user/detail?uid=${users[i].dataset.uid}`; //根据每个用户的id不同获取不同的url

                    let xhr = creatXHR();
                    EventUtil.addHandler(xhr, "readystatechange", () => {
                        if (xhr.readyState == 4) {
                            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                                let user = JSON.parse(xhr.responseText);
                                if (user.success) {
                                    let nickname = zhangsan.data.nickname,
                                        bio = zhangsan.data.bio,
                                        following = zhangsan.data.following,
                                        followers = zhangsan.data.followers;
                                    //渲染数据
                                    nth(overBox[i], 2).innerHTML = nickname;
                                    nth(overBox[i], 3).innerHTML = `个人简介：${bio}`;
                                    nth(overBox[i], 4).innerHTML = `关注：${following}`;
                                    nth(overBox[i], 5).innerHTML = `粉丝：${followers}`;
                                    nth(overBox[i], 6).style.display = "none"
                                }
                            }
                        }
                    });
                    xhr.open("get", url, true);
                    xhr.send(null);
                }).catch((err) => {
                    console.log(err);
                });
                //由于没有真实的数据，这里是一个伪造的数据以及模拟的效果
                let nickname = zhangsan.data.nickname,
                    bio = zhangsan.data.bio,
                    following = zhangsan.data.following,
                    followers = zhangsan.data.followers;
                nth(overBox[i], 2).innerHTML = nickname;
                nth(overBox[i], 3).innerHTML = `个人简介：${bio}`;
                nth(overBox[i], 4).innerHTML = `关注：${following}`;
                nth(overBox[i], 5).innerHTML = `粉丝：${followers}`;
                mr=setTimeout(() => {
                    nth(overBox[i], 6).style.display = "none"
                }, 300);
                //以上都为模拟的操作

            }, 100)
        });

        EventUtil.addHandler(users[i],"mouseleave",()=>{
            window.clearTimeout(miss);
            window.clearTimeout(mr);
            overBox[i].style.display="none";
            nth(overBox[i],6).style.display="block";
        });
    }
})();