function convertToRoman(num) {

	var string = num.toString().split("");
	var numSplit = [];
	var romanSplit = [];
	var prime = 0;
	var sub = 0;
	var romanNumeral = 0;

	while(string.length > 0){
		var stringSplit = string.shift();
		numSplit.unshift(Number(stringSplit));
	}

	for(var x = 0; x < numSplit.length; x++){
		if(x==0){
			if(numSplit[x]>=1 && numSplit[x]<=3){
				prime = "I";
			}else if(numSplit[x]>=4 && numSplit[x]<=8){
				prime = "V";
				sub = "I";
			}else if(numSplit[x]==9){
			prime = "X";
			sub = "I";
		}}
		

		if(x==1){
			if(numSplit[x]>=1 && numSplit[x]<=3){
				prime = "X";
			}else if(numSplit[x]>=4 && numSplit[x]<=8){
				prime = "L";
				sub = "X";
		}else if(numSplit[x]==9){
			prime = "C";
			sub = "X";
	}}

		if(x==2){
			if(numSplit[x]>=1 && numSplit[x]<=3){
				prime = "C";
			}else if(numSplit[x]>=4 && numSplit[x]<=8){
				prime = "D";
				sub = "C";
			}else if(numSplit[x]==9){
			prime = "M";
			sub = "C";
	}}

		if(x==3){
			if(numSplit[x]>=1 && numSplit[x]<=3){
				prime = "M";
			}else if(numSplit[x]>=4 && numSplit[x]<=8){
				prime = "P";
				sub = "M";
		}}
		
		if(numSplit[x]==1){
			romanSplit.unshift(prime);
		}else if(numSplit[x]==2){
			romanSplit.unshift(prime+prime);
		}else if(numSplit[x]==3){
			romanSplit.unshift(prime+prime+prime);
		}else if(numSplit[x]==4){
			romanSplit.unshift(sub+prime);
		}else if(numSplit[x]==5){
			romanSplit.unshift(prime);
		}else if(numSplit[x]==6){
			romanSplit.unshift(prime+sub);
		}else if(numSplit[x]==7){
			romanSplit.unshift(prime+sub+sub);
		}else if(numSplit[x]==8){
			romanSplit.unshift(prime+sub+sub+sub);
		}else if(numSplit[x]==9){
			romanSplit.unshift(sub+prime);
		}		

}
		romanNumeral = romanSplit.join("");
		console.log(romanNumeral);
}
convertToRoman(891);

