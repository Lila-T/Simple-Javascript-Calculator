var resultBox = document.getElementById('resultBox'),	
    screenBox = document.getElementById('screenBox'),	
    inputArray = [],	
    opratorArray = [];
	
init();

function init(){
	screenBox.focus();
}	

function clickOnNumber(number){
	screenBox.value += number;
}

function clickOnDote(){
	screenBox.value += '.';
}
function clearResultBox(){
	screenBox.value = '';
	resultBox.value = '';
	inputArray = [];
	opratorArray = [];
}

function backSpace(){
	screenBox.value = screenBox.value.slice(0,-1);
}

function clickOnOprator(oprator){
	if(opratorArray.length == 0){
		inputArray.push(screenBox.value);
	}else{
		resultNumber = screenBox.value.substring(screenBox.value.lastIndexOf(opratorArray[0])+1 , screenBox.value.length);
		if(resultNumber == "") return;
		inputArray.push(resultNumber);
	}
	equal();
	opratorArray =[];
	opratorArray.push(oprator);
	if( oprator == "=") {
		screenBox.value = '';
		opratorArray= [];
	}else{
		screenBox.value += oprator;
	}
}

function equal(){
	if(opratorArray.length == 0 ) {
		resultBox.value = inputArray[0];
	}else{
		resultBox.value = eval(resultBox.value + opratorArray[opratorArray.length - 1] + inputArray[inputArray.length - 1]);
		inputArray= [];
		inputArray.push(resultBox.value);
	}
}
