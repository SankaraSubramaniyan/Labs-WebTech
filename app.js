var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

app.factory('quizFactory', function() {
	var questions = [
		{
			question: "____________is collection of interrelated data and set of program to access them.",
			options: ["Database Management System", "Data Structure System", "File Management System", "Hadoop"],
			answer: 0
		},
		{
			question: "_________ is used to define code that is executed/fired when certain actions or event occur.",
			options: ["Cursor", "1Trigger", "1Keywords", "Truncate"],
			answer: 1
		},
		{
			question: "Which is used to specify the user views and their mappings to the conceptual schema?",
			options: ["DDL", "DML", "VDL", "SQL"],
			answer: 2
		},
		{
			question: "In __________, the management of the password for the account can be handled outside of oracle such as operating system",
			options: ["Database Authentication", "External Authentication", "Root Authentication", "OS Authentication"],
			answer: 0
		},
		{	
			question: "Which year was Java invented and by who?",
			options: ["1997,Charles Babbage", "1990,Bill Gates", "1992,Steve Jobs", "1995,James Gosling"],
			answer: 1
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});