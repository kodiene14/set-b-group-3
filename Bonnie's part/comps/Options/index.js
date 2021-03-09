function OptionsUI(bgcolor="#B7DEBB", text="Question", answer="X"){
    return `<button style='
    background-color:${bgcolor};
    border-radius: 15px;
    min-height: 133px;
    width:219px;
    display:inline-flex;
    margin-left:10px;
    justify-content: center;
    align-items:center;
    border:none;
    font-size:18px;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight:bold;
    '
    onclick='answer(this)'
    >
    ${text}

    </button>`

}


//export const Options = OptionsUI();