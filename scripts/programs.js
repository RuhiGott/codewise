document.addEventListener("DOMContentLoaded", function() {
    fetch('data/programs.json')
        .then(response => response.json())
        .then(data => {
            const faqsContainer = document.getElementById('faqs');
            data.forEach((faq, index) => {
                const faqElement = document.createElement('div');
                faqElement.classList.add('faq');

                const faqButton = document.createElement('div');
                faqButton.classList.add('faq-button');

                const vLine = document.createElement('div');
                vLine.classList.add('v-line');
                const hLine = document.createElement('div');
                hLine.classList.add('h-line');

                const isEven = index % 2 === 0;
                vLine.classList.add(isEven ? 'dark-blue-line' : 'yellow-line');
                hLine.classList.add(isEven ? 'dark-blue-line' : 'yellow-line');

                faqButton.appendChild(vLine);
                faqButton.appendChild(hLine);

                const questionElement = document.createElement('h2');
                questionElement.classList.add('question');
                questionElement.textContent = faq.question;

                const answerElement = document.createElement('p');
                answerElement.classList.add('answer');
                answerElement.innerHTML = faq.answer;

                faqElement.appendChild(faqButton);
                faqElement.appendChild(questionElement);
                faqElement.appendChild(answerElement);

                faqsContainer.appendChild(faqElement);
            });

            const faqElements = document.querySelectorAll(".faq");
            faqElements.forEach(faq => {
                faq.addEventListener("click", () => {
                    faq.classList.toggle("active");
                });
            });
        })
        .catch(error => console.error('Error fetching FAQs:', error));
});
