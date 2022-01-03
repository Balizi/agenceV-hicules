let typee=["Moto","Citadin","Compact","Berlin","Utilitaire","Engin de Chantier","Camion"];
let typeeManuelle=["Citadin","Compact","Utilitaire","Engin de Chantier"];
let typeeAutomatique=["Berlin","Camion"];

let bv="Manuelle";

let MotoCrb=["Essence"];
let CitadinCrb=["Hybride","Essence","Diesel"];
let ComactCrb=["Essence","Diesel"];
let BerlinCrb=["Essence","Diesel"];
let UtilitaireCrb=[];
let EnginCrb=["Diesel"];
let CamionCrb=[];

  
let select1=document.getElementById("select1");
let select2=document.getElementById("select2");
let select3=document.getElementById("select3");
let inp=document.getElementById("num");
let resul=document.getElementById("resulta");

select2.disabled=true;

typee.forEach(function addtypee(item){
    let option=document.createElement("option");
    option.text=item;
    option.value=item;
    select1.appendChild(option);
});

select1.onchange= function() {
    select2.innerHTML="<option></option>";
    select3.innerHTML="<option></option>";
    if(select1.value!="Choisire un type")
    {
        select3.disabled=false;
    }

    if(this.value == "Compact" ){
        select2.innerHTML="<option selected>Manuelle</option>";
        select3.innerHTML="<option selected>Hybride</option>";
        addToSelect3(ComactCrb);
        addToselect2(bv);
    }
    else if(this.value=="Engin de Chantier"){
        select2.innerHTML="<option selected>Manuelle</option>";
        select3.innerHTML="<option selected>Essence</option>";
        addToSelect3(EnginCrb);
        addToselect2(bv);
    }
    else if(this.value=="Utilitaire" ){
        select2.innerHTML="<option selected>Manuelle</option>";
        select3.innerHTML="<option selected>Diesel</option>";
        addToSelect3(UtilitaireCrb);
        addToselect2(bv);
    }
    else if(this.value=="Citadin"){
        select2.innerHTML="<option selected>Manuelle</option>";
        select3.innerHTML="<option selected>Electrique</option>";
        addToSelect3(CitadinCrb);
        addToselect2(bv);
    }
    else if(this.value=="Berlin"){
        select2.innerHTML="<option selected>Automatique</option>";
        select3.innerHTML="<option selected>Hybride</option>";
        addToSelect3(BerlinCrb);
    }
    
    else  if( this.value=="Camion"){
        select2.innerHTML="<option selected>Automatique</option>";
        select3.innerHTML="<option selected>Diesel</option>";
        addToSelect3(CamionCrb);
        addToSelect3(CamionCrb);
    }
    else if(this.value=="Moto"){
        select3.innerHTML="<option selected>Electrique</option>";
        addToSelect3(MotoCrb);
    }
}
function addToselect2(arr){
    arr.forEach(function (item){
        let option =document.createElement("option");
        option.text=item;
        option.value=item;
        
        select2.appendChild(option);
    })
}
function addToSelect3(arr){
    arr.forEach(function (item){
        let option=document.createElement("option");
        option.text=item;
        option.value=item;
        select3.appendChild(option);
    });
}
function Somme(){
    if(select1.value=="Choisire un type")
    {
        alert("veuillez Choisire un type");
        select1.focus();
    }
    else if(inp.value<0 ||inp.value=="")
    {
        alert("le nombre de jours doit être supérieure a 0");
        inp.focus();
    }
    else
    {
        let resu;
        let end;
        if(select1.value=="Moto"&&select3.value=="Electrique"){
            resu=(inp.value*10);
            end=resu+(resu*5)/100;
        }
        else if(select1.value=="Moto"&&select3.value=="Essence"){
            resu=(inp.value*10);
            end=resu+(resu*14)/100;
        }
        // 
        if(select1.value=="Citadin"&&select3.value=="Electrique"){
            resu=(inp.value*12)+(5/100);
            end=resu+(resu*5)/100;
        }
        else if(select1.value=="Citadin"&&select3.value=="Hybride"){
            resu=(inp.value*12);
            end=resu+(resu*9)/100;
        }
        else if(select1.value=="Citadin"&&select3.value=="Essence"){
            resu=(inp.value*12);
            end=resu+(resu*14)/100;
        }
        else if(select1.value=="Citadin"&&select3.value=="Diesel"){
            resu=(inp.value*12);
            end=resu+(resu*21)/100;
        }
        // 
        if(select1.value=="Compact"&&select3.value=="Hybride"){
            resu=(inp.value*14);
            end=resu+(resu*9)/100;
        }
        else if(select1.value=="Compact"&&select3.value=="Essence"){
            resu=(inp.value*14);
            end=resu+(resu*14)/100;
        }
        else if(select1.value=="Compact"&&select3.value=="Diesel"){
            resu=(inp.value*14);
            end=resu+(resu*21)/100;
        }
        // 
        if(select1.value=="Berlin"&&select3.value=="Hybride"){
            resu=(inp.value*20);
            end=resu+((resu*9)/100)+((resu*19)/100);
        }
        else if(select1.value=="Berlin"&&select3.value=="Essence"){
            resu=(inp.value*20);
            end=resu+((resu*14)/100)+((resu*19)/100);
        }
        else if(select1.value=="Berlin"&&select3.value=="Diesel"){
            resu=(inp.value*20);
            end=resu+((resu*21)/100)+((resu*19)/100);
        }
        // 
        if(select1.value=="Utilitaire"&&select3.value=="Diesel"){
            resu=(inp.value*16);
            end=resu+(resu*21)/100;
        }
        // 
        if(select1.value=="Engin de Chantier"&&select3.value=="Essence"){
            resu=(inp.value*900);
            end=resu+(resu*14)/100;
        }
        else if(select1.value=="Engin de Chantier"&&select3.value=="Diesel"){
            resu=(inp.value*900);
            end=resu+(resu*21)/100;
        }
        // 
        if(select1.value=="Camion"&&select3.value=="Diesel"){
            resu=(inp.value*250)+(21/100);
            end=resu+((resu*21)/100)+(resu*19/100);
        }
        resul.innerHTML=end;
    }
    // alert("Prix de réservation : "+resu);
}