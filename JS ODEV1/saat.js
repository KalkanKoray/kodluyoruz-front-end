ownerName = prompt ("İsminizi Giriniz")
let greeting = document.querySelector ("h1#greeting")
greeting.innerHTML = `Merhaba ${ownerName}! Hoşgeldin!`
setInterval(() => { //Tarih bilgisinin saniyede bir sürekli alınması için kullandım//
let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
const weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
let day = weekday[date.getDay()]
let time = document.querySelector ("h2#time")
time.innerHTML = `${hour} : ${minute} : ${second}   ${day} `
} , 1000) // 1000 mili saniyede yenileme yapacak 1sn yani//
