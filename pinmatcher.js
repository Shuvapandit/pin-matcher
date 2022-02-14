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
        const clacInput=document.getElementById('typed-numbers');
        if(isNaN(number)){
            if(number=='C'){
                clacInput.value= ' ';

            }
         
        }
        else{
           
        const previousNumber=clacInput.value;
        const newNumber=previousNumber+number;
        clacInput.value=newNumber;

        }
        

    
   

});
//
function verifypin(){
    const pin =document.getElementById('display-pin').value;
    const typedPin=document.getElementById('typed-numbers').value;
    const successMsg=document.getElementById('notify-success');
    const failMsg=document.getElementById('notify_fail');
    if(pin==typedPin){
       
        successMsg.style.display='block';
        failMsg.style.display='none';
    }
    else {
       
        failMsg.style.display='block';
        successMsg.style.display='none';
      
    }
}



