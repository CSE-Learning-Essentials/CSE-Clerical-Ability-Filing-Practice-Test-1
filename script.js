function checkAnswers() {
    // Correct answers for the questions
    const correctAnswers = {
        q1: "A",
        q2: "A",
        q3: "D",
        q4: "E",
        q5: "A",
        q6: "D",
        q7: "A",
        q8: "B",
        q9: "A",
        q10: "C"
    };

    // Get the user's answers from the form
    const form = document.getElementById('examForm');
    let userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value,
        q7: form.q7.value,
        q8: form.q8.value,
        q9: form.q9.value,
        q10: form.q10.value
    };

    let score = 0;
    let results = '';

    // Check answers and give feedback
    for (let q in correctAnswers) {
        if (userAnswers[q] === correctAnswers[q]) {
            score++;
            results += `<p><strong>Question ${q.charAt(1)}:</strong> Correct!</p>`;
        } else {
            results += `<p><strong>Question ${q.charAt(1)}:</strong> Incorrect! Your answer: ${userAnswers[q]}</p>`;
        }
    }

    // Display the results
    results += `<p><strong>Total Score: ${score}/10</strong></p>`;
    if (score >= 8) {
        results += "<p><strong>You passed!</strong></p>";
    } else {
        results += "<p><strong>You failed. Try again!</strong></p>";
    }

    document.getElementById('results').innerHTML = results;
}
