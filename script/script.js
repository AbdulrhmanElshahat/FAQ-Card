//All selector
let questions = document.querySelectorAll('.question'),
	arroBtns = document.querySelectorAll('.question img'),
	answers = document.querySelectorAll('.answer'),
	qusArr = Array.from(questions),
	ansArr = Array.from(answers),
	questionOpened,
	answerOpened;

questions.forEach((question, index) => {
	question.addEventListener('click', (e) => {
		//Fetch open question and answer
		questionOpened = qusArr.filter((q) => q.classList.contains('opend') && q != e.target);
		answerOpened = ansArr.filter((ans) => ans.classList.contains('block') && ans != e.target.nextElementSibling);
		//Close open question and answer
		questionOpened.forEach((o) => o.classList.remove('opend'));
		answerOpened.forEach((a) => a.classList.remove('block'));
		//open question and answer or close 
		e.target.classList.toggle('opend');
		answers[index].classList.toggle('block');
	});
});
