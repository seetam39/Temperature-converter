let celinput=document.getElementById("cel-input")
let fahrninput=document.getElementById("fahrn-input")
let kelinput=document.getElementById("kel-input")
let btn=document.getElementById("btn")

fahrninput.addEventListener("input",function(){
   
   celinput.value=Math.round(fahrninput.value-32)*5/9;
   kelinput.value=Math.round((fahrninput.value-32)*5/9)+273.15;
    
})

celinput.addEventListener("input",function(){
    fahrninput.value=(celinput.value*9/5)+32;
    kelinput.value=(celinput.value)*1+273.15

})

kelinput.addEventListener("input",function(){
    fahrninput.value=(kelinput.value-273.15)*9/5+32;
    celinput.value=(kelinput.value-273.15)
})

btn.addEventListener("click",function(){
    celinput.value=""
    fahrninput.value=""
    kelinput.value=""
})