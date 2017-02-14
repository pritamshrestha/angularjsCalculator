// this is for the angular app reference
var app=angular.module('calculatorApp',[]);
// this is referencing the module to the controller
app.controller('calculatorCtrl',mycalculator);

// creating the function for the mycalculator
function mycalculator(){
	// this is for the +button
	this.resultValue=0;
	this.ButtonClicked=function(button){
    this.selectorOperation=button;
	}
	// this is for the calculation
	this.computeResult=function(){
		// this is very importan to define the input as number.
		var num1=parseFloat(this.input1);
		var num2=parseFloat(this.input2);
		if(this.selectorOperation==='+'){
	
		this.resultValue=num1+num2;
		}
		else if(this.selectorOperation==='/'){
	
		this.resultValue=num1/num2S;
		}


       else if(this.selectorOperation==='-'){
	
		this.resultValue=num1-num2;
		}
		else if(this.selectorOperation==='*'){
	
		this.resultValue=num1*num2;
		}

		// this is for the button clear
		this.ButtonClear=function(){
			this.input1=null;//clearing the input1
			this.input2=null;//clearing the input2
			this.selectorOperation=null;//clearing the selectoroption
			this.resultValue = "0";//clearing the resultvalue.
		}
		}
	}
	
