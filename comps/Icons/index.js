function TrashBags1 (){
    return ` <div class= "trash" style='
    max-width: 250px;
    max-height: 250px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='TrashBags1.HandleClick(this)'>
    
    <img src="Component_Pictures_copy/Trash_Bags.png" style='
    max-width:250px;
    max-height:250px;
    
    
    '/>
    
    </div> `
}

function GarbageFire1 (){
    return ` <div style='
    max-width: 150px;
    max-height: 150px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='GarbageFire1.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/Garbage_Flames_1.png" style='
    max-height:150px;
    max-width:150px;
    
    '/>
    
    </div> `
}

function Biohazard (){
    return ` <div style='
    max-width: 100px;
    max-height: 100px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='Biohazard.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/Biohazard.png" style='
    max-height:100px;
    max-width:100px;
    
    '/>
    
    </div> `
}

function Dump (){
    return ` <div style='
    max-width: 200px;
    max-height: 200px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='Dump.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/dump.png" style='
    max-height:200px;
    max-width:200px;
    
    '/>
    
    </div> `
}


function FishBone (){
    return ` <div style='
    max-width: 50px;
    max-height: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='FishBone.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/fish-bone.png" style='
    max-height:50px;
    max-width:50px;
    
    '/>
    
    </div> `
}

function Garbage1 (){
    return ` <div style='
    max-width: 150px;
    max-height:150px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='Garbage1.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/garbage_(1).png" style='
    max-height:150px;
    max-width:150px;
    
    '/>
    
    </div> `
}

function Garbage2 (){
    return ` <div style='
    max-width: 250px;
    max-height: 250px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='Garbage2.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/garbage_bags.png" style='
    max-height:250px;
    max-width:250px;
    
    '/>
    
    </div> `
}

function Rubbish1 (){
    return ` <div style='
    max-width: 150px;
    max-height: 150px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='Rubbish1.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/rubbish_(1).png" style='
    max-height:150px;
    max-width:150px;
    
    '/>
    
    </div> `
}

function Rubbish2 (){
    return ` <div style='
    max-width: 250px;
    max-height: 250px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display:inline-flex;
    align-items:center;
    transition:opacity 0.3s;
    opacity:1;
    '
    
    onclick='Rubbish2.HandleClick(this)'
    >
    
    <img src="Component_Pictures_copy/rubbish.png" style='
    max-height:250px;
    max-width:250px;
    
    '/>
    
    </div> `
}

export const Trash = TrashBags1 ();

export const GarbageFire = GarbageFire1 ();

export const Bio = Biohazard ();

export const Dumpy = Dump ();

export const Fish = FishBone ();

export const Garbages1 = Garbage1 ();

export const Garbages2 = Garbage2 ();

export const Rubbishes1 = Rubbish1 ();

export const Rubbishes2 = Rubbish2 ();