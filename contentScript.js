function fillInDetailsFunction() {
    var questionAnswerPairs = [
        { questionId: 'kbq1ReadOnly', answerId: 'kba1_response', answerValue: 'Your Answer 1' },
        { questionId: 'kbq2ReadOnly', answerId: 'kba2_response', answerValue: 'Your Answer 2' },
        { questionId: 'kbq3ReadOnly', answerId: 'kba3_response', answerValue: 'Your Answer 3' }
    ];

    questionAnswerPairs.forEach(function(pair) {
        var questionElement = document.getElementById(pair.questionId);
        var answerInput = document.getElementById(pair.answerId);
        if (questionElement && answerInput) {
            answerInput.value = pair.answerValue;
        }
    });
}

fillInDetailsFunction();