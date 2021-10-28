let get_form=document.querySelector("#myform"),input_form=get_form.childNodes;
let tab=[];
get_form.addEventListener('submit',(e)=>{
e=e ||e.event;
e.preventDefault();
input_form.forEach(element => {
    if(element.nodeName=="INPUT"){
       if(element.value){
        tab.push(1);
       } 
    }
});
 if(tab.length!=3){
   alert("Remplir bien les champs!!!");     
 }
 else{
     alert("Message reçu");
 }
})
