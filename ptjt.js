if (screen.width>screen.height) {
    let get_content=document.querySelector('.content'),get_containproject=document.querySelectorAll('.scroll');
    get_containproject.forEach(element => {
        element.style.width=(get_content.clientWidth*95)/100+"px";
        element.style.height=(get_content.clientHeight*90)/100+"px"; 
    });
}
/*Creer un object qui gere l'affichage*/
let get_href=window.location.href,get_array=get_href.split('/'),get_where;
function CarouselPrint(content){
    this.content=content;
    this.SesEnfant=content.childNodes;
    this.taille;
    this.pos;
    this.pos_init=0;
    this.Supp_txt=function(){
    for (const key in this.SesEnfant) {
        if (Object.hasOwnProperty.call(this.SesEnfant, key)) {
            const element = this.SesEnfant[key];
            if(element.innerText==undefined){
                this.content.removeChild(element);
            }
        }
    }
    this.taille=this.content.childNodes.length;
  }
  this.obt_po=function(){
      this.Supp_txt();
    for (const key in this.SesEnfant) {
        if (Object.hasOwnProperty.call(this.SesEnfant, key)) {
            const element = this.SesEnfant[key];
            if(getComputedStyle(element).display=="block"){
                this.pos=key;
            }
        }
    }
  }
  this.Next_page=function(){
      this.obt_po();  
      this.SesEnfant[this.pos].style.display="none";
      this.SesEnfant[this.pos].nextSibling.style.display="block";    
  }
  this.Prev_page=function(){
    this.obt_po();  
    this.SesEnfant[this.pos].style.display="none";
    this.SesEnfant[this.pos].previousSibling.style.display="block";    
}
}
if(get_array[get_array.length-1]=="project.html"){
    get_where=document.querySelector('.project');
}else{
    get_where=document.querySelector('.About');
}
let carousel=new CarouselPrint(get_where),get_btn=document.querySelectorAll('.btN');
 get_btn[1].style.display="none";
 get_btn.forEach(el=>{
    if (el.className=="btN next") {
        el.addEventListener('click',()=>{
         carousel.Next_page();
         if(carousel.pos==carousel.taille-2){
             el.style.display="none";
         }
         get_btn[1].style="block";
        })
    }
    else{
        el.addEventListener('click',()=>{
         carousel.Prev_page();
         if(carousel.pos==1){
            el.style.display="none";
        }
        get_btn[0].style.display="block"
        })
    }
  });