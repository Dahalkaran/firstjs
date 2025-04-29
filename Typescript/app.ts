const num11=document.getElementById('num1') as HTMLInputElement;
const num22=document.getElementById('num2') as HTMLInputElement;
let button=document.querySelector('button');
const numResults :number[] =[];
const textResults=[];

type NumOrString=number|string;
  type Result ={val : number; timestamp:Date}  ;
interface ResultObj{
    val:number;
    timestamp:Date;
}

function add1(num1: NumOrString, num2: NumOrString){
    if(typeof num1 ==='number' && typeof num2 ==="number"){
        return num1 + num2;
    }  else if (typeof num1 ==='string' && typeof num2 ==="string"){
    return num1+" " + num2;
    }
    return +num1 + +num2
}
function printResult(ResultObj: Result){
    console.log(ResultObj.val);

}
console.log(add1(1,6));
 button?.addEventListener('click',()=>{
    const num1=parseFloat(num11.value); ;
    const num2=parseFloat(num22.value); ;
    const result=add1(num1,num2);
    numResults.push(result as number);
    const stringResult=add1(num1,num2);
    
    printResult( Result)
    const resultParagraph = document.querySelector('p');
    if (resultParagraph) {
        resultParagraph.textContent = `Result: ${result}`;
    }
    console.log(numResults);
 })
