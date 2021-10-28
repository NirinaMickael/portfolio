let button = document.querySelector('.btn'),
 input = document.querySelectorAll('.chiffre input'),
 container = document.querySelector('.container'),
 result=document.querySelector('#result'),
 resultat=document.querySelector('.resultat');
button.addEventListener('click',function(){
  if(getComputedStyle(result).color=='rgb(0,0,0)'){
    result.style.color='rgb(0,0,0)';
  }else{
   result.style.color='white';
  }
  container.classList.toggle('Mode');
  for (let index = 0; index < input.length; index++) {
    input[index].classList.toggle('inputinght');  
  }
  document.querySelector('body').classList.toggle('bodynight');
  resultat.classList.toggle('resnight');
  button.classList.toggle('btnnight');
});
let array_value=[],array_other=[],array_op=[];
/* un objet Machinecal sert gerer le probleme*/
function Machinecalc(el,result,value,other){
   this.value=value;//l'input 
   this.input=el.value;// valeur des  input
   this.op=other;// un tableau qui contient les operateur
   this.test;
   this.result=result;
   this.calc=function(){
     if(this.input=='='){
      if(this.check()){// si le calcule est faisable
        this.begin_calc(this.value);

      }else{
       alert('erreur!!!!');
      }
      for (let index = 0; index < this.op.length; index++) {
        this.op.pop();
      }
     }
     else{  // si val de l'input n'est pas = ni C alors
      this.result.value+=this.input;
      if(isNaN(this.input)){ // si cette valeur n'est pas un nombnre
        this.value.push(this.input);//on met touts dans "value"
      }else{
       this.value.push(parseFloat(this.input))// on le tranforme en nombre
                                              // on les met dans value 
      }
     }
   }
   this.check=function(){
     for (let index = 0; index < this.value.length; index++) {
       if(isNaN(this.value[index])==isNaN(this.value[index+1]) || isNaN(this.value[this.value.length-1])==true || isNaN(this.value[0])==true){
         this.test=false;
       }else{
         this.test=true;
       }
     }
     return this.test;
   }/* methode check:sert a verifier si la calcul est faisable*/
   this.get_op=function(valtab){ // pout obtenir les operateur
    let string=this.calcsuprac(valtab).join(''),array;
    for (let index = 0; index < string.length; index++) {
      const el=string[index];
      let obj={oper:'',index:0};
      if(isNaN(el) && el!=='.'){
        obj.oper=el;
        obj.index=index;
        this.op.push(obj);
      }
    }
   }/* methode get_op:sert a transmeter les operateur dans la propiete this.op*/
   this.calcsuprac=function(valtab){
     let new_value=valtab;
    for (let index = 0; index < new_value.length; index++) {
      const el=new_value[index];
      if(isNaN(el)){
        if(el=='.'){// si l'utilisateur appuie sur le touche .
          if(index==0 || index==new_value.length){ // touche . est appuié premierement
            new_value.splice(index,1);
            new_value[index]=parseFloat(0+'.'+new_value[index]);
          }
          else{
            new_value.splice(index,1);
            new_value[index-1]=parseFloat(new_value[index-1]+'.'+new_value[index]);
            new_value.splice(index,1);
          }
        }
      }
      else{
      new_value[index]=parseFloat(new_value[index]);
      }
    }
    return new_value;
   }/* methode calcsuprac:sert a calculer directement les . et puissance dans sir les eleement du this.value*/
   this.begin_calc=function(valtab){
     this.get_op(valtab);
     let tab=[],posInit=0,posF,i=0,taille=this.op.length,value;
     let string=this.calcsuprac(valtab).join('');
     while(i<taille){// taille nombre d'operation utiliser
      posF=this.op[i].index;//posF=indiice de l'operation utiliser
      tab.push(parseFloat(string.slice(posInit,posF)));
      posInit=posF+1;
      i++;
     }
     tab.push(parseFloat(string.slice(posInit,string.length)));
     /* on met tous les chiffre taper au milieu d'un operateur dans tab*/
     value=tab[0];
     for (let index = 0; index < this.op.length; index++) {
       const element = this.op[index];
       switch (element.oper) {
        case '+':
        value+=tab[index+1];   
        break;
        case '-':
          value-=tab[index+1];
        break;
        case '/':
          value/=tab[index+1]; 
        break;
        case'*':
        value*=tab[index+1]; 
        break;
         default:
        break;
       }
     }
     this.result.value=value;
   }
}/*clean sert a supprimer sur l'ecran*/
let MachineCalc;
input.forEach(el => {
    el.addEventListener('click',()=>{
      if(el.value!="AC"){
         MachineCalc=new Machinecalc(el,result,array_value,array_op);
         MachineCalc.calc();
        if(el.value=="="){
           array_value=result.value.split('');
           ok_its_string=true;
          }
      }
     else{
       let count=array_value.length;
      array_value.splice(array_value.length-1,array_value.length-1);
      result.value=result.value.slice(0,array_value.length);
       if(count==1){
         array_value.pop();
         result.value="";
       }
     }
    })
});
