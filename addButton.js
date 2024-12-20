document.addEventListener('DOMContentLoaded', function () {
    function createNewField(sectionClass, templateHTML) {
        const section = document.querySelector(sectionClass);
        const newField = document.createElement('div');
        newField.classList.add('dynamic-section');
        newField.innerHTML = templateHTML;
        section.appendChild(newField);
    }

    document.querySelector('.add-experience').addEventListener('click', function (event) {
        event.preventDefault();
        createNewField('.experience-section', `
            <label for="role">Role:</label>
            <input type="text" class="role" placeholder="Eg: Software Developer, Machine Learning Intern" required>

            <label for="company-name">Company Name:</label>
            <input type="text" class="company-name" placeholder="Eg: Accenture, Ineuron" required>

            <label for="duration">Duration:</label>
            <input type="text" class="duration" placeholder="Eg: July 2023 - Oct 2023" required>

            <label for="internship-summary">Summary of Work/Internship:</label>
            <textarea class="internship-summary" rows="4" placeholder="Describe your work or internship"></textarea>
        `);
    });

    document.querySelector('.add-projects').addEventListener('click', function (event) {
        event.preventDefault();
        createNewField('.projects-section', `
            <label for="project-title">Project Title:</label>
            <input type="text" class="project-title" placeholder="Project Title" required>

            <label for="tools-used">Tools Used:</label>
            <input type="text" class="tools-used" placeholder="Technologies used in this project" required>

            <label for="date">Date:</label>
            <input type="text" class="date" placeholder="Eg: July 2023 - Oct 2023" required>

            <label for="description">Description:</label>
            <textarea class="description" rows="4" placeholder="About the project"></textarea>
        `);
    });

    document.querySelector('.add-certificate').addEventListener('click', function (event) {
        event.preventDefault();
        createNewField('.certification-section', `
            <label for="certification-name">Certification Name:</label>
            <input type="text" class="certification-name" placeholder="Name of the Certificate">

            <label for="issue-by">Issue By:</label>
            <input type="text" class="issue-by" placeholder="Issue By" required>
        `);
    });

    document.querySelector('.add-achievements').addEventListener('click', function (event) {
        event.preventDefault();
        createNewField('.achievements-section', `
            <label for="achievements">Achievements and Awards:</label>
            <input type="text" class="achievements" placeholder="Enter your awards and achievements" required>
        `);
    });

    document.querySelector('.add-leadership').addEventListener('click', function (event) {
        event.preventDefault();
        createNewField('.leaderships-section', `
            <label for="position-name">Position Name:</label>
            <input type="text" class="position-name" placeholder="Enter your position" required>

            <label for="organisation-name">Organization Name:</label>
            <input type="text" class="organisation-name" placeholder="Enter organization name" required>

            <label for="period">Duration:</label>
            <input type="text" class="period" placeholder="Enter duration" required>
        `);
    });

});