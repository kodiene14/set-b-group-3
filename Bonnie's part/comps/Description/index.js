function DescriptionUI(color="black", description="Description"){
    return `<p style='
    justify-content: center;
    align-items:center;
    font-size:18px;
    font-weight:Regular;
    font-family:Montserrat;
    text-align:center;
    color:${color}
    '
    >
    ${description}
    </p>`
}


//export const Description = DescriptionUI();