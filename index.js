const daily = document.querySelector(".day")
const weekly = document.querySelector(".week")
const monthly = document.querySelector(".month")
const normalWork = document.querySelector(".normal-work")
const previousWork = document.querySelector(".lastt-work")
const normalPlay = document.querySelector(".normal-play")
const previousPlay = document.querySelector(".lastt-play")
const normalStudy = document.querySelector(".normal-study")
const previousStudy = document.querySelector(".lastt-study")
const normalExcercise = document.querySelector(".normal-excercise")
const previousExcercise = document.querySelector(".lastt-excercise")
const normalSocial = document.querySelector(".normal-social")
const previousSocial = document.querySelector(".lastt-social")
const normalSelfCare = document.querySelector(".normal-selfcare")
const previousSelfCare = document.querySelector(".lastt-selfcare")


daily.addEventListener("click", ()=>{
    daily.style.color = "white";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "hsl(235, 45%, 61%)";
    normalWork.textContent = "5hrs";
    previousWork.textContent = "7hrs";
    normalPlay.textContent = "1hrs";
    previousPlay.textContent = "2hrs";
    normalStudy.textContent = "0hrs";
    previousStudy.textContent = "1hrs";
    normalExcercise.textContent = "1hrs";
    previousExcercise.textContent = "1hrs";
    normalSocial.textContent = "1hrs";
    previousSocial.textContent = "3hrs";
    normalSelfCare.textContent = "0hrs";
    previousSelfCare.textContent = "1hrs";
    console.log(`daily clicked`);
})
weekly.addEventListener("click", ()=>{
    weekly.style.color = "white"
    daily.style.color = "hsl(235, 45%, 61%)"
    monthly.style.color = "hsl(235, 45%, 61%)"
    normalWork.textContent = "32hrs";
    previousWork.textContent = "36hrs";
    normalPlay.textContent = "10hrs";
    previousPlay.textContent = "8hrs";
    normalStudy.textContent = "4hrs";
    previousStudy.textContent = "4hrs";
    normalExcercise.textContent = "4hrs";
    previousExcercise.textContent = "5hrs";
    normalSocial.textContent = "5hrs";
    previousSocial.textContent = "10hrs";
    normalSelfCare.textContent = "2hrs";
    previousSelfCare.textContent = "2hrs";
    console.log(`weekly clicked`);
})
monthly.addEventListener("click", ()=>{
    monthly.style.color = "white"
    weekly.style.color = "hsl(235, 45%, 61%)"
    daily.style.color = "hsl(235, 45%, 61%)"
    normalWork.textContent = "103hrs";
    previousWork.textContent = "128hrs";
    normalPlay.textContent = "23hrs";
    previousPlay.textContent = "29hrs";
    normalStudy.textContent = "13hrs";
    previousStudy.textContent = "19hrs";
    normalExcercise.textContent = "11hrs";
    previousExcercise.textContent = "18hrs";
    normalSocial.textContent = "21hrs";
    previousSocial.textContent = "23hrs";
    normalSelfCare.textContent = "7hrs";
    previousSelfCare.textContent = "11hrs";
    console.log(`monthly clicked`);
})