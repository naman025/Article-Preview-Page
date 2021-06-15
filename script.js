var y = 300;
var x = 400;

document.getElementById('teaser1').textContent = document.getElementById('textbox').value.slice(0,y);        
document.getElementById('more1').textContent = document.getElementById('textbox').value.slice(y,);
document.getElementById('teaser2').textContent = document.getElementById('textbox').value.slice(0,x);        
document.getElementById('more2').textContent = document.getElementById('textbox').value.slice(x,);

function copy() {
    document.getElementById('teaser1').innerText = document.getElementById('textbox').value.slice(0,y);        
    document.getElementById('more1').innerText = document.getElementById('textbox').value.slice(y,);
    document.getElementById('teaser2').textContent = document.getElementById('textbox').value.slice(0,x);        
    document.getElementById('more2').textContent = document.getElementById('textbox').value.slice(x,);
    

    if(document.getElementById('textbox').value.length < y) {
        var dot1 = document.getElementById("dot1");
        var btnText1 = document.getElementById("readMore1");
        dot1.style.display = "none";
        btnText1.style.display = "none";
    }else {
        var dot1 = document.getElementById("dot1");
        var btnText1 = document.getElementById("readMore1");
        dot1.style.display = "inline";
        btnText1.style.display = "inline";
    }


    if(document.getElementById('textbox').value.length < x) {
        var dot2 = document.getElementById("dot2");
        var btnText2 = document.getElementById("readMore2");
        dot2.style.display = "none";
        btnText2.style.display = "none";
    }else {
        var dot2 = document.getElementById("dot2");
        var btnText2 = document.getElementById("readMore2");
        dot2.style.display = "inline";
        btnText2.style.display = "inline";
    }


    if(document.getElementById("readMore1").textContent == "Read less") {
        var dot1 = document.getElementById("dot1");
        dot1.style.display = "none";
    }

    if(document.getElementById("readMore2").textContent == "Read less") {
        var dot2 = document.getElementById("dot2");
        dot2.style.display = "none";
    }
}

function myFunction1() {
    var dot1 = document.getElementById("dot1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("readMore1");

    if (dot1.style.display === "none") {
        dot1.style.display = "inline";
        btnText1.innerHTML = "Read more"; 
        moreText1.style.display = "none";
    } else {
        dot1.style.display = "none";
        btnText1.innerHTML = "Read less"; 
        moreText1.style.display = "inline";
    }
}

function myFunction2() {
    var dot2 = document.getElementById("dot2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("readMore2");

    if (dot2.style.display === "none") {
        dot2.style.display = "inline";
        btnText2.innerHTML = "Read more"; 
        moreText2.style.display = "none";
    } else {
        dot2.style.display = "none";
        btnText2.innerHTML = "Read less"; 
        moreText2.style.display = "inline";
    }
}


function fb () {
    document.querySelector("body").style.background = "#104B80";
    document.getElementById("mobileFB").style.display = "inline";
    document.getElementById("dekstopFB").style.display = "none";
    document.getElementById("instafeed").style.display = "none";
    document.querySelectorAll(".preview-btn")[0].style.display = "inline";
    document.querySelectorAll(".preview-btn")[1].style.display = "inline";
    document.querySelectorAll(".preview-btn")[2].style.display = "inline";
    document.getElementById("mobileFB").style.borderBottom = "none";
    document.getElementById("mobileFB").style.marginBottom = "0em";
}

function insta() {
    document.querySelector("body").style.background= "linear-gradient(165deg, rgba(193, 53, 132, 0.9) 20%, rgba(225,48,108,0.8) 65%, rgba(253,29,29,0.8) 95%)";
    document.getElementById("mobileFB").style.display = "none";
    document.getElementById("dekstopFB").style.display = "none";
    document.getElementById("instafeed").style.display = "inline";
    document.querySelectorAll(".preview-btn")[0].style.display = "inline";
    document.querySelectorAll(".preview-btn")[1].style.display = "inline";
    document.querySelectorAll(".preview-btn")[2].style.display = "inline";
}

function previewAll() {
    document.getElementById("mobileFB").style.display = "inline";
    document.getElementById("dekstopFB").style.display = "inline";
    document.getElementById("instafeed").style.display = "inline";
    document.querySelectorAll(".preview-btn")[0].style.display = "none";
    document.querySelectorAll(".preview-btn")[1].style.display = "none";
    document.querySelectorAll(".preview-btn")[2].style.display = "none";
    document.getElementById("mobileFB").style.borderBottom = "1px solid #302c2c";
    document.getElementById("dekstopFB").style.borderBottom = "1px solid #302c2c";
    document.getElementById("mobileFB").style.marginBottom = "1em";
    document.getElementById("dekstopFB").style.marginBottom = "1em";
}
// 