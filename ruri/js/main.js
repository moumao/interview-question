const lists=$("input[type='checkbox']");

function addServe(name) {
    let box=$("<div></div>").addClass("box"),
        p=$("<p>"+name+"</p>").appendTo(box),
        close=$("<div ><img data-name="+name+" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk5OC45MTYyOCAzNTMuNjM2NTg5Yy0yMC40OTU4MjMtNjIuODg3MTgzLTUyLjU4OTI4Mi0xMjAuNTc1NDI2LTk1LjQ4MDU0LTE3MS40NjUwNTQtNDIuNzkxMjc5LTUwLjc4OTY0OS05NC4xODA4MDUtOTIuMjgxMTkyLTE1Mi43Njg4NjQtMTIzLjE3NDg5Ni02MC41ODc2NTItMzEuOTkzNDc5LTEyNi4yNzQyNjQtNTEuMTg5NTY3LTE5NS4xNjAyMjUtNTcuMDg4MzY1LTY4Ljc4NTk4MS01Ljg5ODc5OC0xMzYuNzcyMTI1IDEuODk5NjEzLTIwMS45NTg4MzkgMjMuMDk1MjkzLTYyLjg4NzE4MyAyMC40OTU4MjMtMTIwLjU3NTQyNiA1Mi41ODkyODItMTcxLjQ2NTA1NCA5NS40ODA1NFM4OS45MDE1NDUgMjE0Ljc2NDg5MiA1OS4wMDc4NDIgMjczLjI1Mjk3MWMtMzEuOTkzNDc5IDYwLjU4NzY1Mi01MS4xODk1NjcgMTI2LjI3NDI2NC01Ny4wODgzNjUgMTk1LjA2MDI0NS05LjA5ODE0NiAxMDYuODc4MjE3IDE0Ljc5Njk4NCAyMTIuMDU2NzgxIDY5LjM4NTg1OSAzMDQuMTM4MDE0IDguOTk4MTY2IDE1LjE5NjkwMyAyOC41OTQxNzIgMjAuMTk1ODg0IDQzLjc5MTA3NSAxMS4xOTc3MTggMTUuMTk2OTAzLTguOTk4MTY2IDIwLjE5NTg4NC0yOC41OTQxNzIgMTEuMTk3NzE4LTQzLjc5MTA3NS00Ny42OTAyOC04MC40ODM1OTctNjguNjg2MDAxLTE3Mi40NjQ4NS02MC42ODc2MzEtMjY2LjA0NTc3OCAxOS44OTU5NDUtMjMzLjE1MjQ4MiAyMTYuMDU1OTY2LTQwOS44MTY0NzYgNDQ1LjkwOTEyLTQwOS44MTY0NzYgMTIuNjk3NDEyIDAgMjUuNTk0Nzg0IDAuNDk5ODk4IDM4LjQ5MjE1NSAxLjU5OTY3NEM2NjkuMzgzNDQyIDc1Ljg5MzE5NSA3NzcuNDYxNDE1IDEzMS44ODE3ODQgODU0LjU0NTcwNCAyMjMuMzYzMTM5Yzc3LjA4NDI5IDkxLjQ4MTM1NSAxMTMuODc2NzkxIDIwNy41NTc2OTggMTAzLjc3ODg0OSAzMjYuNzMzNDA5LTEwLjE5NzkyMiAxMTkuMTc1NzExLTY2LjE4NjUxMSAyMjcuMzUzNjYzLTE1Ny42Njc4NjYgMzA0LjQzNzk1M0M3MDkuMDc1MzUyIDkzMS42MTg3OTEgNTkzLjA5ODk4OSA5NjguNDExMjkyIDQ3My44MjMyOTkgOTU4LjMxMzM1Yy03MS44ODUzNDktNi4xOTg3MzctMTM5LjE3MTYzNi0yOC41OTQxNzItMTk5Ljg1OTI2Ny02Ni42ODY0MDktMTQuOTk2OTQzLTkuMzk4MDg1LTM0LjY5MjkyOS00Ljg5OTAwMi00NC4wOTEwMTQgMTAuMDk3OTQyLTkuMzk4MDg1IDE0Ljk5Njk0My00Ljg5OTAwMiAzNC42OTI5MjkgMTAuMDk3OTQyIDQ0LjA5MTAxNCAzMy43OTMxMTMgMjEuMTk1NjggNzAuMDg1NzE2IDM4LjQ5MjE1NSAxMDcuNzc4MDM0IDUxLjE4OTU2NyAzOC43OTIwOTQgMTMuMDk3MzMxIDc5LjM4MzgyMSAyMS41OTU1OTkgMTIwLjY3NTQwNSAyNS4wOTQ4ODUgMTQuODk2OTY0IDEuMjk5NzM1IDI5LjY5Mzk0OCAxLjg5OTYxMyA0NC4zOTA5NTMgMS44OTk2MTMgNTMuNTg5MDc4IDAgMTA2LjQ3ODI5OS04LjM5ODI4OCAxNTcuNTY3ODg2LTI0Ljk5NDkwNiA2Mi44ODcxODMtMjAuNDk1ODIzIDEyMC41NzU0MjYtNTIuNTg5MjgyIDE3MS40NjUwNTQtOTUuNDgwNTQgNTAuNzg5NjQ5LTQyLjc5MTI3OSA5Mi4yODExOTItOTQuMTgwODA1IDEyMy4xNzQ4OTYtMTUyLjc2ODg2NCAzMS45OTM0NzktNjAuNTg3NjUyIDUxLjE4OTU2Ny0xMjYuMjc0MjY0IDU3LjA4ODM2NS0xOTUuMDYwMjQ1QzEwMjcuOTEwMzcxIDQ4Ni43MDk0NjcgMTAyMC4xMTE5NiA0MTguODIzMzAzIDk5OC45MTYyOCAzNTMuNjM2NTg5eiIgZmlsbD0iIzhhOGE4YSIgLz48cGF0aCBkPSJNMjgwLjU2MjY4NyA3MzguMDU4MjRjNi4xOTg3MzcgNi4xOTg3MzcgMTQuMzk3MDY2IDkuMzk4MDg1IDIyLjU5NTM5NSA5LjM5ODA4NXMxNi4zOTY2NTgtMy4wOTkzNjggMjIuNTk1Mzk1LTkuMzk4MDg1bDE4MC45NjMxMTgtMTgwLjk2MzExOCAxODAuOTYzMTE4IDE4MC45NjMxMThjNi4xOTg3MzcgNi4xOTg3MzcgMTQuMzk3MDY2IDkuMzk4MDg1IDIyLjU5NTM5NSA5LjM5ODA4NXMxNi4zOTY2NTgtMy4wOTkzNjggMjIuNTk1Mzk1LTkuMzk4MDg1YzEyLjQ5NzQ1My0xMi40OTc0NTMgMTIuNDk3NDUzLTMyLjc5MzMxNiAwLTQ1LjI5MDc2OWwtMTgwLjk2MzExOC0xODAuOTYzMTE4IDE4MC45NjMxMTgtMTgwLjk2MzExOGMxMi40OTc0NTMtMTIuNDk3NDUzIDEyLjQ5NzQ1My0zMi43OTMzMTYgMC00NS4yOTA3NjktMTIuNDk3NDUzLTEyLjQ5NzQ1My0zMi43OTMzMTYtMTIuNDk3NDUzLTQ1LjI5MDc2OSAwbC0xODAuOTYzMTE4IDE4MC45NjMxMTgtMTgwLjk2MzExOC0xODAuOTYzMTE4Yy0xMi40OTc0NTMtMTIuNDk3NDUzLTMyLjc5MzMxNi0xMi40OTc0NTMtNDUuMjkwNzY5IDAtMTIuNDk3NDUzIDEyLjQ5NzQ1My0xMi40OTc0NTMgMzIuNzkzMzE2IDAgNDUuMjkwNzY5bDE4MC45NjMxMTggMTgwLjk2MzExOC0xODAuOTYzMTE4IDE4MC45NjMxMThDMjY4LjA2NTIzNCA3MDUuMjY0OTI0IDI2OC4wNjUyMzQgNzI1LjU2MDc4NyAyODAuNTYyNjg3IDczOC4wNTgyNHoiIGZpbGw9IiM4YThhOGEiIC8+PC9zdmc+'></div>").addClass("close-box").appendTo(box);
    $("#big-box").append(box)
}

function addList(name,text) {
    let list=$("<li></li>").addClass("drag_module_main"),
        h=$("<h4>"+name+"</h4>").appendTo(list),
        p=$("<p>"+text+"</p>").appendTo(list);
    $("#check-lists").append(list);
}

function removeList(name) {
    for(let i=0,m=lists.length;i<m;i++){
        let thisName=lists[i].dataset.name;
        if (thisName===name){
            lists[i].parentNode.parentNode.style.display="none";
        }
    }
}

(($)=>{
    $("#server-list").on("change","input[type='checkbox']",(event)=>{
        let _this=event.target,
            name=_this.dataset.name,
            text=_this.dataset.text,
            obj={
                name:name,
                text:text
            },
            str = JSON.stringify(obj);

        localStorage.setItem(name,str);
        addServe(name);
        _this.parentNode.parentNode.style.display="none"
    });

    $("#big-box").on("click",".close-box",(event)=>{
        let _this=event.target,
            text=_this.dataset.name;

        for(let i=0,m=lists.length;i<m;i++){
            let name=lists[i].dataset.name;
            if (name===text){
                lists[i].parentNode.parentNode.style.display="block";
                lists[i].checked = false;
                _this.parentNode.parentNode.style.display="none";
                localStorage.removeItem(name);
            }
        }
    });



})(jQuery);

