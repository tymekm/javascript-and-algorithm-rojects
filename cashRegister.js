function checkCashRegister(price, cash, cid) {

	var returnObj = {
		status: "",
		change: []
	};

	for(var j=0; j < cid.length; j++){
		cid[j][1] = Math.round(cid[j][1] * 100);
	}


  var rest = Math.round(cash *100)- Math.round(price *100);
	console.log("$ " + rest + " in change");

var	cidTotal = 0;
	for(var i=0; i < cid.length; i++){
		cidTotal = cidTotal + cid[i][1];
	}
	console.log("$ " + cidTotal + " in register");
	
	if(rest > cidTotal){
		returnObj.status = "INSUFFICIENT_FUNDS";
		console.log(returnObj);
		return(returnObj);
	}else if(rest == cidTotal){
		returnObj.status = "CLOSED";
	}

		var x=0;

	if(rest > 10000){
		while(rest >= 10000 && cid[8][1]!==0){
			cid[8][1] -= 10000;
			rest -= 10000;
			x ++;
		}
		returnObj.change.push(["ONE HUNDRED", x * 10000]);
	}

	if(rest > 2000){
		x=0;
		while(rest >= 2000 && cid[7][1]!==0){
			cid[7][1] -= 2000;
			rest -= 2000;
		x ++;
		}
		returnObj.change.push(["TWENTY", x * 2000]);
	}

	if(rest > 1000){
		x=0;
		while(rest >= 1000 && cid[6][1]!==0){
			cid[6][1] -= 1000;
			rest -= 1000;
			x ++;
		}
		returnObj.change.push(["TEN", x * 1000]);
	}

	if(rest > 500){
		x=0;
		while(rest >= 500 && cid[5][1]!==0){
			cid[5][1] -= 500;
			rest -= 500;
			x ++;
		}
		returnObj.change.push(["FIVE", x * 500]);
	}

	if(rest > 100){
		x=0;
		while(rest >= 100 && cid[4][1]!==0){
			cid[4][1] -= 100;
			rest -= 100;
			x ++;
		}
		returnObj.change.push(["ONE", x * 100]);
	}

	if(rest > 25){
		x=0;
		while(rest >= 25 && cid[3][1]!==0){
			cid[3][1] -= 25;
			rest -= 25;
			x ++;
		}
		returnObj.change.push(["QUARTER", x * 25]);
	}

	if(rest > 10){
		x=0;
		while(rest >= 10 && cid[2][1]!==0){
			cid[2][1] -= 10;
			rest -= 10;
			x ++;
		}
		returnObj.change.push(["DIME", x * 10]);
	}

	if(rest > 5){
		x=0;
			cid[1][1] *= 100;
		while(rest >= 5 && cid[1][1]!==0){
			cid[1][1] -= 5;
			rest -= 5;
			x ++;
		}
		returnObj.change.push(["NICKEL", x * 5]);
	}

	if(rest > 1){
		x=0;
		while(rest >= 1 && cid[0][1]!==0){
			cid[0][1] -= 1;
			rest -= 1;
			x ++;
		}
		returnObj.change.push(["PENNY", x * 1]);
	}
	console.log("the rest = " + rest);

	for(var n=0; n < returnObj.change.length; n++){
		returnObj.change[n][1] = returnObj.change[n][1] / 100;
	}

		console.log(returnObj.change[7[1]]);
			console.log(rest + " and " + cid[0][1]);

	console.log(rest + "sdsadad" + cidTotal);
	if(returnObj.status == "CLOSED"){
		returnObj.change.reverse();
		for(var m =0; m < cid.length; m++ ){
			if(returnObj.change[m] == undefined){
				returnObj.change[m] = example[m];
			} 
		}
	}else if(rest !== 0){
				returnObj.change = [];
				returnObj.status = "INSUFFICIENT_FUNDS";
				console.log(returnObj);
	}else{
		returnObj.status = "OPEN";
	}

	console.log(returnObj);
	return(returnObj);
  //return change;
}

var example =
 [["PENNY", 0],
 ["NICKEL", 0],
 ["DIME", 0],
 ["QUARTER", 0],
 ["ONE", 0],
 ["FIVE", 0],
 ["TEN", 0],
 ["TWENTY", 0],
 ["ONE HUNDRED", 0]];

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
