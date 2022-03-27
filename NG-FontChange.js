//font size change

function changeFontSize(type){
    //console.log(type);

    //IDs to select
    let ids = ['#h','#p'];
    ids.forEach(id =>{
        //Get element
        let el = document.querySelector(".Grammer-Group");

        //Get font size
        let fontSize = window.getComputedStyle(el, null)
                    .getPropertyValue("font-size"); // el က element
        //Convert to float
        fontSize = parseFloat(fontSize);
        
        //Increase / Decrease font-size
        if(type === "increase"){
            el.style.fontSize = (fontSize + 2) +"px";
        }else{
            el.style.fontSize = (fontSize - 2) +"px";
        }

    });
}