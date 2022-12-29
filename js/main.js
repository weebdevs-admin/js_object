let elModel = document.querySelector('.model')
let elRang = document.querySelector('.rang')
let elYil = document.querySelector('.yil')
let elPoz = document.querySelector('.poz')
let elNarx = document.querySelector('.narx')
let elBtn = document.querySelector('.btn')
let elTitleM = document.querySelector('.model__title')
let elTitleR = document.querySelector('.rang__title')
let elTitleY = document.querySelector('.yil__title')
let elTitleP = document.querySelector('.poz__title')
let elTitleN = document.querySelector('.narx__title')
let elForm = document.querySelector('form')
const data = []

elBtn.addEventListener('click',function(){
const  mashina ={
    model: elModel.value,
    rang: elRang.value,
    yil: elYil.value,
    poz: elPoz.value,
    narx:elNarx.value
}
data.push(mashina)
console.log(data);
elTitleM.textContent = "Modeli "+ mashina.model
elTitleR.textContent = "Rangi "+ mashina.rang
elTitleY.textContent = "Yili "+ mashina.yil
elTitleP.textContent = "Pozitsiyasi "+ mashina.poz
elTitleN.textContent = "Narxi "+ mashina.narx
})