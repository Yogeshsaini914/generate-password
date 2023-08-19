const inputSlider=document.querySelector("[slider-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const coptbtn=document.querySelector("[data-copy]");
const copymsg=document.querySelector("[data-copyMsg]");
const uppercaseCheack=document.querySelector("#uppercase");
const lowercaseCheack=document.querySelector("#lowercase");
const numberCheck=document.querySelector("#number");
 const SymbolsCheack=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicato]");
const generateBtn=document.querySelector(".generatebutton");
const allCheackBox=document.querySelectorAll("input[type=cheackbox]");

let password=" ";
let passwordLength=10;
let cheackCount=0;
let Symbol="~!@#$%^&*(){}[]+<>?/";
   handleSlider();
   
 

//set passwordlength
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
}
function setIndicator(color){
    indicator.style.backgroundcolor=color;
}
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)) +min;
    
   

}
 function generateRandomNumber(){
    return getRndInteger(0,9);
    
 }
 function genearteLowerCase(){
    return String.fromCharCode(getRndInteger(97,123))
 }
 function genearteUpperCase(){
    return String.fromCharCode(getRndInteger(65,90))
 }
 function generateSymbol(){
   const randNum=getRndInteger(0,symbols.length)
   return symbols.charAt(randNum);
 }
 function calStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hassym=false;
    if(uppercaseCheack.checked) hasLower=true;
    if(lowercaseCheack.cheacked) hasLower=true;
    if(numberCheck.cheacked) hasNum=true;
    if(SymbolsCheack.cheacked) hassym=true;
    if(hasUpper && hasLower &&(hasLower||hassym) && passwordLength>=8){
        setIndicator("#ff0");
    }
    else if((hasLower||hassym) && (hasNum||hassym) && passwordLength>=6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
 }
  async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value)
        copymsg.innerText="copied";
    }
    catch(e){
        copymsg.innerText="failed";


        copymsg.classList.add("active")
        setTimeout(()=>{
            copymsg.classList.remove("active")
        },2000)
    }
    // function shufflePassword(){

    // }
     

 }
 function handlecheackbox(){
    
    cheackCount=0;
    allCheackBox.forEach((cheackbox)=>{
        if(cheackbox.cheacked)
        cheackCount++;
    console.log('ok')
    })
    if(passwordLength<cheackCount)
    passwordLength=cheackCount;
     handleSlider();
 }
 allCheackBox.forEach((cheackbox)=>{
    cheackbox.addEventListener('change',handlecheackbox());
 })
 inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider(passwordLength);
 })
 coptbtn.addEventListener('click',(e)=>{
    if(passwordDisplay.value)
    copyContent();
   
 })
 generateBtn.addEventListener('click',()=>{
     
    if(cheackCount <=0 ) return;
    if(passwordLength<cheackCount){
        passwordLength=cheackCount;
        handleSlider();
    }
    password="";
    if(uppercaseCheack.cheacked){
        password+=genearteUpperCase();
    }
    
    if(lowercaseCheack.cheacked){
        password=+genearteLowerCase();
    }
    if(numberCheck.checked){
        password+=generateRandomNumber();
    }
    if(SymbolsCheack.cheacked){
        password=+generateRandomNumber();
    }
    let funarr=[];
    if(uppercaseCheack.cheacked)
    funarr.push(genearteUpperCase());
    if(lowercaseCheack.cheacked)
    funarr.push(genearteLowerCase());
    if(SymbolsCheack.cheacked)
    funarr.push(generateSymbol())
    if(numberCheck.cheacked)
    funarr.push(generateRandomNumber());
for(let i=0;i<funarr.length; i++){
    password+=funarr[i]();
}

for(let i=0;i<passwordLength-funarr.length; i++){
    let randamIndex=getRndInteger(0,funarr.length)
    password+=funarr[randamIndex]();
  

}
    //suffle the password
    // password=shufflePassword(array.from(password));
    passwordDisplay.value=password;
   

 });

