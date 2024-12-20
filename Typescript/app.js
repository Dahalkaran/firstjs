var num11 = document.getElementById('num1');
var num22 = document.getElementById('num2');
var button = document.querySelector('button');
var numResults = [];
var textResults = [];
function add1(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(ResultObj) {
    console.log(ResultObj.val);
}
console.log(add1(1, 6));
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    var num1 = parseFloat(num11.value);
    ;
    var num2 = parseFloat(num22.value);
    ;
    var result = add1(num1, num2);
    numResults.push(result);
    var stringResult = add1(num1, num2);
    printResult({ val: result, time: new Date() });
    var resultParagraph = document.querySelector('p');
    if (resultParagraph) {
        resultParagraph.textContent = "Result: ".concat(result);
    }
    console.log(numResults);
});
