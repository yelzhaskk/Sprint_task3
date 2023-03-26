function moneyConventer() {
    
    var valNum = document.getElementById("amount").value;
	var money = document.getElementById("money").value;
    var outputKzt = document.getElementById("outputKzt");
    var outputUsd = document.getElementById("outputUsd");
    var outputEur = document.getElementById("outputEur");
    const moneySelect = document.getElementById("money");
    

    
    
    if (money == "kzt") {
        const kzt = valNum * 1;
        const usd = valNum / 431;
        const eur = valNum / 509;
        outputKzt.innerHTML=kzt.toFixed(2);
        outputUsd.innerHTML=usd.toFixed(2);
        outputEur.innerHTML=eur.toFixed(2);          
    }
    else if(money == "usd"){
        const kzt = valNum * 429;
        const usd = valNum * 1;
        const eur = valNum / 1.176335;
        outputKzt.innerHTML=kzt.toFixed(2);
        outputUsd.innerHTML=usd.toFixed(2);
        outputEur.innerHTML=eur.toFixed(2); 
    }
    else{
        const kzt = valNum * 507;
        const usd = valNum * 1.176335;
        const eur = valNum * 1;
        outputKzt.innerHTML=kzt.toFixed(2);
        outputUsd.innerHTML=usd.toFixed(2);
        outputEur.innerHTML=eur.toFixed(2); 
    }

    moneySelect.addEventListener('change', moneyConventer);
    moneyConventer();


    
}




