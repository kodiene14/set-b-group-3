
function H2 (text='Click for Question', bgcolor='#ffffff', ){
    return `<div style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    color: ${bgcolor};
    margin-top:40px;
    text-decoration:underline;
    '
    

    >
    
    ${text} 


    <div class='text' style='
    font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: #F8F3EB;
        text-decoration:none;
    '>Which Country produces more dioxins and furans than all industrial activities combined?
    </div>`
}

function H1 (text='Question Time!'){
    return `<p style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    
    color: #F8F3EB;
    
    
    '> ${text} </p>`
}



function Title (){
    return `<p class="none" style='
    
    font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 75px;
    line-height: 96px;
    text-align:center;
    color: #F8F3EB;
    
    
    '> Knowledge Check </p>`
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



export const header2 = H2();

export const header1 = H1();

export const KnowledgeCheck = Title();

export const Paragraph1 = Para();