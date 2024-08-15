document.addEventListener("DOMContentLoaded", function() {
    fetch('data/teachers.json')
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.querySelector('.team-flex');
            data.forEach((teacher, index) => {
                const teamMember = document.createElement('div');
                teamMember.classList.add('team-member');

                const teamMemberPicture = document.createElement('div');
                teamMemberPicture.classList.add('team-member-picture');

                const teamMemberText = document.createElement('p');
                teamMemberText.classList.add("team-member-name");
                teamMemberText.textContent = teacher.teacher;

                const teamMemberInfo = document.createElement('p');
                teamMemberText.textContent = teacher.info;

                const teamMemberLine = document.createElement('div');
                teamMemberLine.classList.add('team-member-line');

                const isEven = index % 2 === 0;
                teamMemberLine.classList.add(isEven ? 'dark-blue-line' : 'yellow-line');

                teamMember.appendChild(teamMemberPicture);
                teamMember.appendChild(teamMemberText);
                teamMember.appendChild(teamMemberLine);

                teamContainer.appendChild(teamMember);
            });
        })
        .catch(error => console.error('Error fetching eachers:', error));
});
