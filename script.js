const availableSeat=document.getElementById('available-seat').innerText;
const totalPrices=document.getElementById("total-price");
let prices=totalPrices.innerText;
let totalPrice=parseInt(prices);
let definedSeat=document.getElementById("defined-seat").innerText;
let definedSeats=parseInt(definedSeat);
let phoneInput=document.getElementById("phone-input");
let nextBtn=document.getElementById("next-btn");
let applyBtn=document.getElementById("apply-btn");
const couponInput=document.getElementById("coupon-input");
let discountPrice=document.getElementById("discount-price");
let grandTotal=document.getElementById("grand-total");

var phoneValue=0;
console.log(nextBtn)
phoneInput.addEventListener("keyup",function(){
    phoneValue=parseInt(phoneInput.value.length);
    if(phoneValue>6 && definedSeats>0){
            nextBtn.removeAttribute('disabled');
        }
    
})


 let Avail=parseInt(availableSeat);
const buttons=document.getElementsByClassName('kbd');
const table=document.getElementById("t-body")
for(const btn of buttons) {
    btn.addEventListener("click",function(e){
    
        if(btn.id){
            if(definedSeats<=4){
        btn.classList.add("bg-green-500");
        Avail=Avail-1;
        definedSeats++;
        
        console.log(getComputedStyle(btn));
        
        document.getElementById("defined-seat").innerText=definedSeats;
        document.getElementById('available-seat').innerText=Avail;
        const tr=document.createElement('tr');
        const td1=document.createElement('td');
        const td2=document.createElement('td');
        const td3=document.createElement('td');
        td1.innerText=btn.id;
        td2.innerText="Economy";
        td3.innerText="500";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
        table.appendChild(tr);

        totalPrice=totalPrice+550;
        console.log(totalPrice)
        totalPrices.textContent=totalPrice;
        grandTotal.innerText=totalPrice;
        }
    }
    applyBtn.addEventListener("click",function(){
    let couponText=couponInput.value;
    if(couponText=="NEW15"){
        let grand=(totalPrice*0.15);
        discountPrice.innerText=grand;
        const totalGrand=totalPrice-grand;
        grandTotal.innerText=totalGrand;
    }else if(couponText=="Couple 20"){
        let grand=(totalPrice*0.20);
        discountPrice.innerText=grand;
        const totalGrand=totalPrice-grand;
        grandTotal.innerText=totalGrand;
    }
})

    })
};