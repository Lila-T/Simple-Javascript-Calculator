var resultBox = document.getElementById('resultBox'),	
    screenBox = document.getElementById('screenBox'),	
    inputArray = [],	
    opratorArray = [];
	
init();

function init(){
	screenBox.focus();
}	

function clickOnNumber(number){
	screenBox.innerHTML += number;
}

function clickOnDote(){
	screenBox.innerHTML += '.';
}
function clearResultBox(){
	screenBox.innerHTML = '';
	resultBox.innerHTML = '';
	inputArray = [];
	opratorArray = [];
}

function backSpace(){
	screenBox.innerHTML = screenBox.innerHTML.slice(0,-1);
}

function clickOnOprator(oprator){
	if(opratorArray.length == 0){
		if(resultBox.innerHTML) {
			screenBox.innerHTML = resultBox.innerHTML; 
			inputArray.push(resultBox.innerHTML);
		} else{
			inputArray.push(screenBox.innerHTML);
		}
	}else{
		resultNumber = screenBox.innerHTML.substring(screenBox.innerHTML.lastIndexOf(opratorArray[0])+1 , screenBox.innerHTML.length);
		if(resultNumber == "") return;
		inputArray.push(resultNumber);
	}
	equal();
	opratorArray =[];
	opratorArray.push(oprator);
	if( oprator == "=") {
		screenBox.innerHTML = '';
		opratorArray= [];
	}else{
		screenBox.innerHTML += oprator;
	}
}

function equal(){
	if(opratorArray.length == 0 ) {
		resultBox.innerHTML = inputArray[0];
	}else{
		resultBox.innerHTML = eval(resultBox.innerHTML + opratorArray[opratorArray.length - 1] + inputArray[inputArray.length - 1]);
		inputArray= [];
		inputArray.push(resultBox.innerHTML);
	}
}

   
