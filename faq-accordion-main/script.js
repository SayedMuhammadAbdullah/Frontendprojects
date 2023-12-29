// const mainContent=document.getElementsByClassName('.content');
// const card=document.getElementsByClassName('.card');
// console.log(mainContent)
// console.log(card)
// console.log(answer)


const question=document.querySelectorAll(".card");
const answer=document.getElementsByClassName('.ans');

question.forEach(test => {
  const questionTitle=test.querySelector(".quest")
  questionTitle.addEventListener("click", () => {
   for (let i = 0; i < question.length; i++) {
if (question[i] !=test) {
  question[i].classList.remove("active")
} else {
  test.classList.toggle("active");
}
    
   }
});
});