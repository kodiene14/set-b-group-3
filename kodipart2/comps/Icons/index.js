function TrashBags1 (){
    return ` <div class= "trash" style='
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    margin-left: 60px;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='TrashBags1.HandleClick(this)'>
    
    <img src="imgs/logo.png" style='
    max-width:400px;
    max-height:400px;
    margin-left:auto;
    margin-right:auto;
    padding-top: 50px;
    
    
    '/>
    
    </div> `
}







//export const Trash = TrashBags1 ();


