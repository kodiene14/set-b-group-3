function TryAgainUI(bgcolor="#8ABABD", text="Try Again"){
    return `<button style='
    background-color:${bgcolor};
    border-radius: 15px;
    height: 273px;
    width:273px;
    display:inline-flex;
    margin-left:10px;
    justify-content: center;
    align-items:center;
    border:none;
    font-size:56px;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    padding:0px 30px 0px 30px;
    font-weight:bold;
    '>
    ${text}
    </button>`
}

//export const TryAgain = TryAgainUI();