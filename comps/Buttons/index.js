function ButtonUI (text='Next Question!'){
    return `<a href="#">
    <div style='
        background-color:#8ABABD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        min-height:175px;
        min-width:300px;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        font-family: Futura;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 71px;
    margin-top:50px;
    margin-left:50px;
    
    '
 
    
    >

    <b>${text}</b>
    </div></a>`
}





function UK (text='X'){
    return ` <div style='
    max-width: 169px;
    max-height: 250px;
    border-radius:25px;
    margin-left:120px;
    '
    
    >
<img src="Component_Pictures_copy/United_Kingdom_Flag.png" style='

max-width:169px;
max-height:169px;

'/>

<div class='text' style='
font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 27px;
    text-align: center;
    color: red;
'>${text}</div>
    
    </div> `
}

function CHI (text='X'){
    return ` <div style='
    max-width: 169px;
    max-height: 250px;
    border-radius:25px;
    margin-left:120px;
    '
    
    >
    <img src="Component_Pictures_copy/China_Flag.png" style='

    max-width:169px;
    max-height:169px;
    '/>

    <div class='text' style='
font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 27px;
    text-align: center;
    color: red;
'>${text}</div>
    
    </div> `
}
function USA (text='X'){
    return ` <div style='
    max-width: 169px;
    max-height: 250px;
    border-radius:25px;
    margin-left:120px;
    '
    
    >
    <img src="Component_Pictures_copy/United_States_Flag.png" style='

    max-width:169px;
    max-height:169px;'
    
    />
    
    <div class='text' style='
    font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 27px;
        text-align: center;
        color: red;
    '>${text}</div>

    </div> `
}

function CAN (text='Correct Answer! In Canada, the open burning of garbage produces more dioxins and furans than all industrial activities combined.'){
    return ` <div style='
    max-width: 169px;
    max-height: 500px;
    border-radius:25px;
    margin-left:120px;
    '
    onclick='CAN.HandleClick(this)'
    
    >
    <img src="Component_Pictures_copy/Canada_Flag.png" style='

    max-width:169px;
    max-height:169px;
    '/>

    <div class='text' style='
    font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: #94FF40;
    '>${text}</div>

    </div> 
    `
}

//function Back (){
    //return ` <a href="#"<div style='
    //max-width: 150px;
    //max-height: 150px;
    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    //display:inline-flex;
    //align-items:center;
    //font-style: normal;
    //font-weight: normal;
    //font-size: 32px;
    //line-height: 71px;
    //text-decoration:none;
    //'
    
    
    //>
    
    //<img src="Component_Pictures_copy/world-peace.png" style='
    //max-height:100px;
    //max-width:100px;
    //'/>
    //Back
    //</div> 
    //</a>`
//}






export const Button = ButtonUI();



export const UK1 = UK();

export const CHI1 = CHI();

export const USA1 = USA();

export const CAN1 = CAN();