function telephoneCheck(str) {

	str = str.split(new RegExp(" ", 'g'));

	if(Number(str[0])!==1 && str[0].length!==1 && str[0].length<2){
		console.log("fail on country code");
		return(false);
	}

	str = str.join("");

	if(str.indexOf("-") == 0){
		console.log("Illegal staring character");
		return(false);
	}

	console.log(str);
	str = str.split(new RegExp("-", 'g')).join("");
	if(str.indexOf("?")!== -1){
		console.log("failed on illegal character in number");
		return(false);
	}

	if(str.indexOf(")") !== -1 || str.indexOf("(") !== -1){
		if(str.indexOf("(") == -1 || str.indexOf(")") == -1){
			console.log("Failed at missing parenthesese");
			return(false);
		}else{
			var str2 = str.substring(str.indexOf("(") + 1, str.indexOf(")"));
			if(str2.length>3){
				console.log("Failed on number length inside of (), lenght is: " + str2.length);
				return(false);
			}
		}
	}

	console.log(str);
	//str = str.join("");
	
	str = str.replace(/\D/g, "").split("");

	if(str[0]==1){
		if(str.length==11){
			return(true);
		}else{
			return(false);
		}
	}else{
		if(str.length==10){
			return(true);
		}else{
			return(false);}
	}

}

telephoneCheck("-1 (757) 622-7382");
