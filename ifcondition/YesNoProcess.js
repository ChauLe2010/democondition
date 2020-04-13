function checkYes(){
    alert("Yess");
}
function checkNo() {
    let top=Math.round(Math.random()*500);
    let left=Math.round(Math.random()*1000);
    document.getElementById("NoButton").style.left=left+"px";
    document.getElementById("NoButton").style.top=top+"px";

}
