document.querySelector(".heading").innerHTML += HeadingUI("#DEFFDD", "Yes! Correct Answer! You're an expert in waste management!", );
document.querySelector(".one").innerHTML += HeadingUI("#FFD8D8", "1", "56");
document.querySelector(".mid-col").innerHTML += HeadingUI("#DBF396", "300 Million", "48");


document.querySelector(".description-1").innerHTML += DescriptionUI("White", "Click for More Information!");
document.querySelector(".description-2").innerHTML += DescriptionUI("white","Click for More Information!");

function back(){
    window.location.href = "whylitter.html";
}

function next(){
    window.location.href = "";
}

function Road(){
    document.getElementById("icon-1").innerHTML = "Road";
}

function moreInfo(){
    document.getElementById("info").innerHTML = "People litter because they do not feel responsible for the public spaces like the streets, parks, and public transportations.";
    document.getElementById("info").style.fontSize = "18px";
    document.getElementById("info").style.color = "white";
    document.getElementById("info").style.fontFamily = "Montserrat";
    document.getElementById("info").style.textAlign = "center";
}

function secondrow(){
    document.getElementById("desc-2").innerHTML = "However, if each person picked up 1 piece of litter, there would be 300 million less pieces of litter.";
    document.getElementById("desc-2").style.fontSize = "18px";
    document.getElementById("desc-2").style.color = "white";
    document.getElementById("desc-2").style.fontFamily = "Montserrat";
    document.getElementById("desc-2").style.textAlign = "center";
}

