const apiKey = "50e3f4daf979c3292eea1ff0";

const url ="https://v6.exchangerate-api.com/v6/" + apiKey;

const url2 = "https://v6.exchangerate-api.com/v6/50e3f4daf979c3292eea1ff0/latest/";


const  currency1 = document.getElementById("currency1");
const  currency2 = document.getElementById("currency2");

const lis1 = document.getElementById("list1");
const lis2 = document.getElementById("list2");


const amount = document.getElementById("amount");

const calculate = document.getElementById("calculate");

const result = document.getElementById("result");


fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;
        let options;
        for(let item of items){
            options +=`
            
                <option value=${item[0]}>${item[1]}</option>        
     
            
            `;
        }


        list1.innerHTML = options;
        list2.innerHTML = options;
    })

calculate.addEventListener("click", ()=>{
    const doviz1 = currency1.value;
    const doviz2 = currency2.value;  
    const miktar = amount.value;

    fetch(url2 + doviz1)
        .then(res => res.json())
        .then(data => {
            const sonuc = (data.conversion_rates[doviz2] * miktar).toFixed(3);
            
            result.innerHTML= `
            <div class="card border-primary">
                <div class="card-body text-center" style="font-size:30px;">
                        ${miktar} ${doviz1} = ${sonuc} ${doviz2}
                </div>
             </div> 
            `;


        })

        

});
