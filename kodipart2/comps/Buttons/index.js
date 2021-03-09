


function Choose (){
    return ` <div style='
    max-width: 293px;
    max-height: 293px;
    display:inline-flex;
    align-items:center;
    '>
    
    <img src="https://placekitten.com/50/50"/>
    
    </div> `
}



function UK (text='1. Collect Trash'){
    return ` <div style='
    max-width: 169px;
    max-height: 250px;
    border-radius:25px;
    transition:opacity 1s;
    margin-right:300px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.50));
    '
    onclick='UK.HandleClick(this)'
    
    >
<img src="imgs/trashcan.png" style='

max-width:169px;
max-height:169px;

'/>

<div class='text' style='
font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: #F8F3EB;
    
opacity:0;
transition:opacity 0.5s;
'>${text}</div>
    
    </div> `
}

function CHI (text='2. Input How Much You Collected'){
    return ` <div style='
    max-width: 169px;
    max-height: 250px;
    border-radius:25px;
    transition:opacity 1s;
    margin-left:300px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.50));
    '
    onclick='UK.HandleClick(this)'
    
    >
    <img src="imgs/smartphone.png" style='

    max-width:169px;
    max-height:169px;
    '/>

    <div class='text' style='
font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: #F8F3EB;
opacity:0;
transition:opacity 0.5s;
'>${text}</div>
    
    </div> `
}
function USA (text='3. Get Rewards!'){
    return ` <div style='
    max-width: 169px;
    max-height: 250px;
    border-radius:25px;
    transition:opacity 1s;
    margin-right:300px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.50));
    '
    onclick='USA.HandleClick(this)'
    
    >
    <img src="imgs/gift.png" style='

    max-width:169px;
    max-height:169px;'
    
    />
    
    <div class='text' style='
    font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        color: #F8F3EB;
    opacity:0;
    transition:opacity 0.5s;
    '>${text}</div>

    </div> `
}

function CAN (text='Correct Answer! In Canada, the open burning of garbage produces more dioxins and furans than all industrial activities combined.'){
    return ` <div style='
    max-width: 169px;
    max-height: 500px;
    border-radius:25px;
    transition:opacity 0.5s;
    margin-left:120px;
    '
    onclick='CAN.HandleClick(this)'
    
    >

    <div class='text' style='
    font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: #94FF40;
        
    opacity:0;
    transition:opacity 1s;
    '>${text}</div>

    </div> 
    `
}



UK.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = 2;
    }


CHI.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = 2;
    }


USA.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = 2;
    }


//export const Button = ButtonUI();

//export const PickQuestion = Choose();

//export const CAN1 = CAN();

//export const UK1 = UK();

//export const CHI1 = CHI();

//export const USA1 = USA();