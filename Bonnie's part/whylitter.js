document.querySelector(".top").innerHTML += HeadingUI("White", "Knowledge Check!", "75");
document.querySelector(".top-2").innerHTML += HeadingUI("White", "Click for question");

document.querySelector(".button-1").innerHTML += OptionsUI("#B7DEBB", "Don’t know where to put it");
document.querySelector(".button-2").innerHTML += OptionsUI("#B7DEBB", "They’re Stupid");
document.querySelector(".button-3").innerHTML += OptionsUI("#B7DEBB", "People don’t feel responsible");
document.querySelector(".button-4").innerHTML += OptionsUI("#B7DEBB", "They hate the environment");


function wrong(){
    window.location.href = "wronganswer.html";
}

function correct(){
    window.location.href = "correctanswer.html";
}

function question(){
    document.getElementById("question").innerHTML = "So why do people litter?";
    document.getElementById("question").style.fontSize = "36px";
    document.getElementById("question").style.color = "white";
    document.getElementById("question").style.fontFamily = "Montserrat";
}