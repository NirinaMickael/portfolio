let get_parent_scroll=document.querySelector('.project'),tab_scroll=[],tab=[[],[],[],[]];;
for (let index = 0; index < get_parent_scroll.childNodes.length; index++) {
    let i=0;
     let tab=get_parent_scroll.childNodes;
    if(tab[index].innerText==undefined){
        get_parent_scroll.removeChild(tab[index]);
    }
}
for (let index = 0; index < get_parent_scroll.childNodes.length; index++) {
    const element = get_parent_scroll.childNodes[index];
    tab_scroll.push(element);
}
for (let index = 0; index < tab_scroll.length; index++) {
    let element = tab_scroll[index].childNodes;
    element.forEach(elements => {
          if(elements.className=="img"){
              tab[index].push(elements)
          }
      });
    }
    let pos=0,index=0;
   montre_cache();
    function montre_cache() {
    if(index==4) index=0;
    for (i = 0; i < tab[index].length; i++) {
        const el=tab[index][i];
           if(i==pos){
               el.style.display="block";
           }
           else{
            el.style.display="none";
           }  
    }
    pos++;
    if(pos>tab[index].length){
            pos=0;
            tab[index][Math.floor(Math.random() * tab[index].length)].style.display="block";
    }
   index++;
   setTimeout(montre_cache, 500); // Change image every 2 seconds
}
