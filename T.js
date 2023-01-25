function FocusBox(NameTxt){
    NameTxt.style.background ="Yellow";
}

function BlurBox(NameTxt){
    NameTxt.style.background ="White";
}

function FocusBox(SurnameTxt){
    SurnameTxt.style.background ="Yellow";
}



function BlurBox(SurnameTxt){
    SurnameTxt.style.background ="White";
}

function Selectedlanguge(){
    const Selected = document.getElementById('language');
   

    choose = Selected.value;
}

const EIEI = document.getElementById('EIEI');
const QIQI = document.getElementById('QIQI');
const Display = document.getElementById('output');

function Submit(){
    let dada = document.getElementById('EIEI').value;
    let abab = document.getElementById('QIQI').value;
    let chvh = document.getElementById('NINI').value;
    let name = document.getElementById('language').value;
    
    console.log(dada)
    console.log(abab)
    console.log(chvh)
    console.log(name)

    if(dada == "" && abab =="" && chvh=="" && name == "--Select--" ){
        Display.innerHTML="Insert Name " +"<br>" + "Insert Surname" + "<br>" + " Insert Birth date" + "<br>" +" Select Language";
        Display.style.color = "red";
    }
    if(dada != "" && abab =="" && chvh=="" && name == "--Select--" ){
        Display.innerHTML="Insert Surname" + "<br>" +"Insert Birth date" + "<br>" + "Select Language" ;
        Display.style.color = "red";
    }
    if(dada == "" && abab !="" && chvh=="" && name == "--Select--" ){
        Display.innerHTML= "Insert Name " +  "<br>" + "Insert Birth date" + "<br>" + "Select Language" ;
        Display.style.color = "red";
    }
    if(dada == "" && abab =="" && chvh !="" && name == "--Select--" ){
        Display.innerHTML= "Insert Name " + "<br>" + "Insert Surname" +  " <br>" + "Select Language" ;
        Display.style.color = "red";
    }
    if(dada == "" && abab =="" && chvh=="" && name != "--Select--" ){
        Display.innerHTML="Insert Name " +"<br>" + "Insert Surname" +  " <br>"  + "Select Language" ;
        Display.style.color = "red";
    }
    if(dada == "" && abab =="" && chvh=="" && name != "--Select--" ){
        Display.innerHTML="Insert Name " +"<br>" + "Insert Surname" + "<br>"  +"Insert Birth date" ;
        Display.style.color = "red";
    }
    if(dada != "" && abab != "" && chvh =="" && name == "--Select--" ){
        Display.innerHTML= "Insert Birth date" + "<br>"  + "Select Language" ;
        Display.style.color = "red";
    }
    
    if(dada == "" && abab !="" && chvh !="" && name == "--Select--" ){
        Display.innerHTML="Insert Name "   + "<br>" + "Select Language" ;
        Display.style.color = "red";
    }
    if(dada == "" && abab =="" && chvh !="" && name != "--Select--" ){
        Display.innerHTML="Insert Name " +"<br>" + "Insert Surname"  ;
        Display.style.color = "red";
    }
    if(dada != "" && abab !="" && chvh !="" && name == "--Select--" ){
        Display.innerHTML=  "Select Language" ;
        Display.style.color = "red";
    }
    if(dada == "" && abab !="" && chvh !="" && name != "--Select--" ){
        Display.innerHTML="Insert Name " ;
        Display.style.color = "red";
    }
    if(dada != "" && abab =="" && chvh !="" && name != "--Select--" ){
        Display.innerHTML="Insert Surname";
        Display.style.color = "red";   
    }
    if(dada != "" && abab !="" && chvh =="" && name != "--Select--" ){
        Display.innerHTML= "Insert Birth date" ;
        Display.style.color = "red";
    }
    if(dada != "" && abab !="" && chvh!="" && name != "--Select--" ){
        Display.innerHTML=dada+abab+chvh+name;
        Display.style.color = "red";
    }
    if(dada == "" && abab !="" && chvh =="" && name != "--Select--" ){
        Display.innerHTML=  "Insert Name"  + "<br>"+"Insert Birth date";
        Display.style.color = "red";
    }
    if(dada != "" && abab =="" && chvh=="" && name != "--Select--" ){
        Display.innerHTML= "Insert Surname" + "<br>" + " Insert Birth date";
        Display.style.color = "red";
    }
}
