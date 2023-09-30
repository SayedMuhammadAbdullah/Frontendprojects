
const question=document.querySelectorAll(".card");

question.forEach(test => {
  const questionTitle=test.querySelector(".question-title")
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