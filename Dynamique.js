window.onload=function(){
var show_menu=document.querySelector(".show_menu ion-icon"),hide_menu=document.querySelector(".hide_menu ion-icon");
show_menu.addEventListener('click',()=>{
let get_nav=document.querySelector('nav');
     	get_nav.style.display="block";
		show_menu.style.display="none";
		hide_menu.style.display="block";
});
hide_menu.addEventListener('click',()=>{
	let get_nav=document.querySelector('nav');
			 get_nav.style.display="none";
			hide_menu.style.display="none";
			show_menu.style.display="block";
	});
}
/*hauteeur home
 page
 
     montre_cache(tab);
        function montre_cache(tab){
            let pos=0;
            for(let i=0;i<tab.length;i++){
                const el=tab[i];
               if(i==pos){
                   el.style.display="block";
               }
               else{
                el.style.display="none";
               }
            };
            pos++;
            if(pos>tab.length){
                pos=0;
                tab[0].style.display="block";
            }
            setTimeout(montre_cache(tab),2000);
     }
 
 */
