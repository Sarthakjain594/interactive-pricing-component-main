let changerate = document.querySelector("#change-rate");
let rangeslider = document.querySelector("#range-slider");
let pagecount = document.querySelector("#pageviews");

rangeslider.addEventListener("click" , function(){
    if(rangeslider.value === "1"){
        changerate.innerHTML = "8"
        pagecount.innerHTML = "10K Pageviews"
    }
    if(rangeslider.value === "2"){
        changerate.innerHTML = "12"
        pagecount.innerHTML = "50K Pageviews"
    }
    if(rangeslider.value === "3"){
        changerate.innerHTML = "16"
        pagecount.innerHTML = "100K Pageviews"
    }
    if(rangeslider.value === "4"){
        changerate.innerHTML = "24"
        pagecount.innerHTML = "500K Pageviews"
    }
    if(rangeslider.value === "5"){
        changerate.innerHTML = "36"
        pagecount.innerHTML = "1 M Pageviews"
    }
});




