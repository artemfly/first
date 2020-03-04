 fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data[3]);
    let template = document.getElementById('currency-template');
let mainDiv = document.getElementsByClassName('main')[0];
for(let currency of data) {


	let currencyDiv = template.cloneNode(true);
  	
	currencyDiv.removeAttribute('id');
	 let nameBlock = currencyDiv.querySelector(".name");
	 let rateBlock = currencyDiv.querySelector(".rate");
	nameBlock.innerText = currency.txt;
	rateBlock.innerText = currency.rate;
	mainDiv.appendChild(currencyDiv);
}
mainDiv.removeChild(template);

  });
 function convect(elem){
 	console.log (elem);
 	let rate = elem.querySelector(".rate").innerText;
 	let rateBlock = currencyDiv.querySelector(".rate");
 	console.log(rate);
 	    let sum = document.getElementById('sum').value;
 	    if (sum>0) {
 	    	console.log(sum);
 	    }

 
    let resultElem = document.getElementById('result');
    resultElem.innerText = sum / rate;
    let currencyNameElem = getElementById('currency-name')
   currencyNameElem.innerText = name;
}