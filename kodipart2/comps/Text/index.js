
function H2 (text='Click an image to learn the steps!', bgcolor='#ffffff', ){
    return `<div style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    color: ${bgcolor};
    margin-top:40px;
    '
    
    

    >
    
    ${text} 


    <div class='text' style='
    font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: #F8F3EB;
        text-decoration:none;
    opacity:0;
    transition:opacity 1s;
    '>Click an image to learn the steps!
    </div>`
}

function H1 (text='Our group is focused on providing users with an app that is a type of trash collection app that rewards the user by picking up trash!'){
    return `<p style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    
    color: #F8F3EB;
    
    
    '> ${text} </p>`
}

function logo (){
    return `<p style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    
    color: #F8F3EB;
    
    
    '> ${text} </p>`
}



function Title (){
    return `<p class="none" style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    line-height: 96px;
    text-align:center;
    color: #F8F3EB;
    
    
    '> That Is Where We Come In! </p>`
}

function Para (){
    return `<p style='
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    
    color: #F8F3EB;
    
    
    '> Which country produces more dioxins and furans than all industrial
    activities combined? </p>`
}

H2.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = 1;
}


//export const header2 = H2();

//export const header1 = H1();

//export const KnowledgeCheck = Title();

//export const Paragraph1 = Para();