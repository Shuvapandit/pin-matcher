function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+ '';
    if(pinString.length==4){
        return pin;
    }
    else{
        //console.log("Got 3 digit and calling again",pin)
        return getPin();
    }

}


function generatePin(){
    const pin=getPin();
    document.getElementById('display-pin').value=pin;

   
    
}
document.getElementById('key-pad').addEventListener('click', function(event){
    
        const number=event.target.innerText;
        if(isNaN(number)){
            console.log(number)
        }
        else{
            const clacInput=document.getElementById('typed-numbers');
        const previousNumber=clacInput.value;
        const newNumber=previousNumber+number;
        clacInput.value=newNumber;

        }
        

    
   

});
