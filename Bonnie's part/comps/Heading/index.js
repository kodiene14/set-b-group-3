function HeadingUI (color="black", heading="So why do people keep littering?", size="36"){
    return `<h1 style='
    font-size:${size}px;
    font-weight:bold;
    font-family:Montserrat;
    color:${color};
    text-align:center;
    text-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    margin:0px;
    '
    >
    ${heading}
    </h1>`
}

//export const Heading = HeadingUI();