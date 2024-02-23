function buttonclicked() {
    document.querySelector("#answer").innerHTML="iglooes it togther"
}

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(0,0,100,200);
ctx.stroke();

function tmino(x,y) {
    ctx.beginPath();
    ctx.rect(x,y,10,10);
    ctx.rect(x+10,y,10,10);
    ctx.rect(x+20,y,10,10);
    ctx.rect(x+10,y+10,10,10);
    ctx.stroke();                       
}

tmino(40,90)