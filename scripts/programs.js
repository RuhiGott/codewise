document.addEventListener("DOMContentLoaded", function() {
    fetch('data/programs.json')
        .then(response => response.json())
        .then(data => {
            const programsContainer = document.querySelector('.program-sections');

            data.forEach((program, index) => {
                // Create the outer program div
                const programFlex = document.createElement('div');
                programFlex.classList.add('program-flex');

                // Create the img element
                const programImage = document.createElement('img');
                programImage.src = program.img;
                programImage.classList.add('program-poster');

                // Create the right div
                const programRight = document.createElement('div');
                programRight.classList.add('program-right');

                // Create the title element
                const programTitle = document.createElement('h2');
                programTitle.classList.add('program-title');
                programTitle.textContent = program.title;

                // Create the lines container
                const linesDiv = document.createElement('div');
                linesDiv.classList.add('lines', 'program-lines');

                // Create the three lines
                const edgeLine1 = document.createElement('div');
                edgeLine1.classList.add('line', 'edge-line', 'yellow-line');

                const middleLine = document.createElement('div');
                middleLine.classList.add('line', 'middle-line', 'yellow-line');

                const edgeLine2 = document.createElement('div');
                edgeLine2.classList.add('line', 'edge-line', 'yellow-line');

                // Append lines to the lines div
                linesDiv.appendChild(edgeLine1);
                linesDiv.appendChild(middleLine);
                linesDiv.appendChild(edgeLine2);

                // Create the text element
                const programText = document.createElement('p');
                programText.classList.add('program-text');
                programText.textContent = program.text;

                // Create the registration button with dynamic link
                const registerButton = document.createElement('a');
                registerButton.classList.add('box-button');
                registerButton.target = "_blank";
                registerButton.href = program.link; // Dynamic link from JSON
                registerButton.textContent = "Register!";

                // Append elements to the right div
                programRight.appendChild(programTitle);
                programRight.appendChild(linesDiv);
                programRight.appendChild(programText);
                programRight.appendChild(registerButton);

                // Append the image and right div to the program flex div
                programFlex.appendChild(programImage);
                programFlex.appendChild(programRight);

                // Append the program flex div to the container
                programsContainer.appendChild(programFlex);
            });
        })
        .catch(error => console.error('Error fetching programs:', error));
});
