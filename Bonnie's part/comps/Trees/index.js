function TreesUI (url='https://placekitten.com/300/300', x=0,y=0, dim=100){
    return `
    <div style='
        overflow:hidden;
        height:${dim}px;
        width:${dim}px;
        position:absolute;
        top:${y}px;
        left:${x}px;
        z-index:0;
        transition:opacity 1s, left 3s;
        opacity:1;
    '
        onclick='AvatarUI.HandleClick(this)'
    >
        <img style='
            width:100%;
            height:100%;
            object-fit:cover;
        '
         src='${url}' />
    </div>
    `
}

//export const Trees = TreesUI();