// CAlc  Logic 

const dis=document.getElementById("display");

function appendToDis(input){

    dis.value += input;


}


function clrDis(){
    dis.value='';

}


function  calc(){

    dis.value=eval(dis.value);
}