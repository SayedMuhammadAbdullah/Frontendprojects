const mainContainer=document.querySelector(".main-container");
const containerBack=document.querySelector(".container-back");
const submitBtn=document.getElementById("submit-btn")
const rateBtn=document.getElementById("rate-btn")
const starbtn=document.querySelectorAll(".btn")
const rating=document.getElementById("test")

submitBtn.addEventListener("click",() =>{
    containerBack.classList.remove("hidden")
    mainContainer.classList.add("hidden")

})
rateBtn.addEventListener("click",() =>{
    containerBack.classList.add("hidden")
    mainContainer.classList.remove("hidden")

})

starbtn.forEach((rate) => {
    rate.addEventListener("click", ()=>{
      rating.innerHTML=rate.innerHTML
        console.log(rate.innerHTML)
    })
});