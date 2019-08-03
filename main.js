// 變數
var text = "Lian says:";
var number = 1.5;

// 顯示插入
document.getElementById("title").innerHTML = text;

// 運算子
var a = 11;
var b = 6;

c = a + b;  // 加法
c = a - b;  // 減法
c = a * b;  // 乘法
c = a / b;  // 除法
c = a % b;  // 餘數

document.getElementById("box1").innerHTML = c;

//遞增
var d = 2;
var e = 1;

// 只適用於加減
f = d++;    //先給值在遞增
g = ++e;    //先遞增再給值

document.getElementById("box2").innerHTML = e;

// 改變遞增數(適用+-*/%)

h = -5;
h +=5;

document.getElementById("box3").innerHTML = h;

// 判斷式

// var i = 2;
// var box4 = document.getElementById("box4");

// if (i > 0) {
//     box4.innerHTML = "i>0";
// }
// else (i < 0){
//     box4.innerHTML = "i<0";
// }
// 判斷式
var Howlong = 100;
var box4 = document.getElementById("box4");

// if 可搭配一個 else 與多個 else if
if (Howlong >= 60) {
    box4.innerHTML = "forever";
}
else if (Howlong >= 50) {
    box4.innerHTML = "now";
}
else {
    box4.innerHTML = "past";
}

// 函式
// 匿名函式
// function(){}

function test1(test){
    document.getElementById("box5").innerHTML= test;
}

// 使用
test1("TO");

// 陣列

var names = ["Lian" , "Sussie" , "Jing" ];
document.getElementById("box6").innerHTML= names[1];