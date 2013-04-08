/**
   sensitivity变量表示的是拖曳的灵敏度，数字越小越灵敏
   */ 


var selectstr
var originX
var originY
var sensitivity=20

document.ondragstart = function(e){
    selectstr = document.getSelection();
    originX=e.clientX
    originY=e.clientY

}

document.ondragend =function(e){
    var result=toWhichWay(e.clientX,e.clientY);
    if (result==1) {
        window.open(googleSearchText(selectstr));
    }else if(result==2){
        window.open(doubanSearchText(selectstr));
    }else if (result==3) {
        window.open(icibaSearchText(selectstr));
    }else if(result==4){
        window.open(weiboSearchText(selectstr));
    }
}
document.ondrag = function(e){
    document.style.cursor=""
}

function googleSearchText(str){
    var t1="https://www.google.com.hk/search?q=";
    return t1+str;
}
function doubanSearchText(str){
    var t1="http://movie.douban.com/subject_search?search_text="
    var t2="&cat=1002"
    return t1+str+t2;
}
function icibaSearchText(str){
    return "http://www.iciba.com/search?s="+str;
}
function weiboSearchText(str){
    return "http://s.weibo.com/weibo/"+str;
}
function iaskSearchText(str){
    var t1="http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key="
    return t1+encodeURI(str);
}
function toWhichWay(x,y){
    if (x > (originX+sensitivity) && y < (originY-sensitivity)) {
        return 1;
    }
    else if(x > (originX+sensitivity) && y > (originY+sensitivity)){
        return 3;
    }
    else if(x< (originX-sensitivity) && y < (originY-sensitivity)){
        return 2;
    }
    else if(x < (originX-sensitivity) && y > (originY+sensitivity)){
        return 4;
    }
    return 5;
}