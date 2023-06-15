let imgArray=new Array();
imgArray[0]="../img/suzy2.png";
imgArray[1]="../img/suzy3.png";
imgArray[2]="../img/suzy4.png";
imgArray[3]="../img/suzy5.png";

function showImage(){
    let imgNum=Math.round(Math.random()*3);
    let objImg=document.getElementById("front");
    objImg.src=imgArray[imgNum];
    setTimeout(showImage,5000);
}

