let menu= document.getElementById("menu");
let list = document.getElementById("ulist");
let text = document.getElementById("para");

menu.addEventListener("click", ()=>{
    if((list.style.left=="0px")){
        list.style.left="-120px";
    }
    else{
        list.style.left="0px"
    }

    if(list.style.left=="-120px"){
        text.style.visibility="visible";
    }
    else{
        text.style.visibility="hidden";
    }

    
})
  