// var greeting = "hola, ";
// var button = document.getElementById("su");

// button.addEventListener("click", function() {
//   alert(greeting + ".");
// }, false);
// document.onmousedown=function(){
//     alert("aaa");
// };
var kw=document.getElementById("kw");
document.ondrag = function(e){
    
        //kw.value+="drag"
    
}
// document.ondblclick = function(e){
//     //var selectobj = document.selection.createRange();
//     var selectstr = document.getSelection();
//     alert(selectstr);
// }
document.ondragend =function(e){
    //kw.value+="end,"
    searchtxt=e.dataTransfer.getData("Text");
    alert(searchtxt);
    window.open(searchtxt);
}


document.ondragstart = function(e){
    // var selectobj = document.selection.createRange();
    // var selectstr = selectobj.text;
    // alet(selectstr);
    var selectstr = document.getSelection();
    kw.value+=selectstr;
    e.dataTransfer.setData("Text",selectstr);
}
document.ondrag = function(e){
    //kw.value+="drag,"
}
document.ondrop = function(e){
    kw.value+="drop,"
}



document.onmousemove = function(e){
        //div.innerText = '('+e.pageX +', '+e.pageY+')';
}
document.onmouseup = function(e){
            //window.open("www.baidu.com");
}