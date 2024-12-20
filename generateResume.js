document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('generate-resume').addEventListener('click', function (event) {
        event.preventDefault();

        const data = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value,
            portfolio: document.getElementById('portfolio').value,
            summary: document.getElementById('summary').value,
            skills: document.getElementById('skills').value,
            course: document.getElementById('course').value,
            college: document.getElementById('college').value,
            year: document.getElementById('year').value,
            experiences: Array.from(document.querySelectorAll('.experience-section .dynamic-section')).map(item => ({
                role: item.querySelector('.role').value,
                company: item.querySelector('.company-name').value,
                duration: item.querySelector('.duration').value,
                summary: item.querySelector('.internship-summary').value
            })),
            projects: Array.from(document.querySelectorAll('.projects-section .dynamic-section')).map(item => ({
                title: item.querySelector('.project-title').value,
                toolsUsed: item.querySelector('.tools-used').value,
                date: item.querySelector('.date').value,
                description: item.querySelector('.description').value
            })),
            certifications: Array.from(document.querySelectorAll('.certification-section .dynamic-section')).map(item => ({
                name: item.querySelector('.certification-name').value,
                issuedBy: item.querySelector('.issue-by').value
            })),
            achievements: Array.from(document.querySelectorAll('.achievements-section .dynamic-section')).map(item =>
                item.querySelector('.achievements').value),
            leaderships: Array.from(document.querySelectorAll('.leaderships-section .dynamic-section')).map(item => ({
                position: item.querySelector('.position-name').value,
                organization: item.querySelector('.organisation-name').value,
                period: item.querySelector('.period').value
            }))
        };

        // Generate Resume Content
        const resumeContent = `
    <div>
        <!-- Header Section -->
        <h1 class="name">${data.fullName}</h1>
        <p class="contact">${data.email} | ${data.phone} |
        LinkedIn <a href="${data.linkedin}" target="_blank"></a> | 
        GitHub <a href="${data.github}" target="_blank"></a> | Portfolio <a href="${data.portfolio}" target="_blank"></a></p>

        <!-- Summary Section -->
        <h2>Professional Summary</h2>
        <hr>
        <p>${data.summary}</p>

        <!-- Skills Section -->
        <h2>Skills</h2>
        <hr>
        <ul>
            <li><p>${data.skills}</p></li>
        </ul>
    

        <!-- Education Section -->
        <h2>Education</h2>
        <hr>
        <div class="education">
        <p><strong>${data.course}</strong> </p>
        <p class="year">${data.year}</p>
        <p>${data.college}</p> 
        </div>
        <!-- Experience Section -->
        <h2>Experience</h2>
        <hr>
        ${data.experiences.map(exp => `
            <div class="experience">
                <p><strong>${exp.role}</strong> at ${exp.company} </p> 
                <p class="year">${exp.duration}</p>
                <p>${exp.summary}</p>
            </div>
        `).join('')}

        <!-- Projects Section -->
        <h2>Projects</h2>
        <hr>
        ${data.projects.map(proj => `
            <div class="project">
                <p><strong>${proj.title}</strong> </p>
                <p class="year">${proj.date}</p>
                <p>Tools Used: ${proj.toolsUsed}</p>
                <p>${proj.description}</p>
            </div>
        `).join('')}

        <!-- Certifications Section -->
        <h2>Certifications</h2>
        <hr>
        ${data.certifications.map(cert => `
            <div>
                <ul>
                    <li><p><strong>${cert.name}</strong>, ${cert.issuedBy}</p></li>
                </ul>
            </div>
        `).join('')}

        <!-- Achievements Section -->
        <h2>Achievements</h2>
        <hr>
        <ul>
            ${data.achievements.map(ach => `<li>${ach}</li>`).join('')}
        </ul>

        <!-- Leadership Section -->
        <h2>Leadership</h2>
        <hr>
        ${data.leaderships.map(lead => `
            <div class="leadership">
            <ul>
                    <li><p><strong>${lead.position}</strong> , ${lead.organization}</p> 
                <p class="year">${lead.period}</p></li>
                </ul>
                
            </div>
        `).join('')}
    </div>
   `;


        document.getElementById('resume-container').innerHTML = resumeContent;

        const downloadButton = `<button>Download Resume</button>`;
        document.getElementById('download-resume').innerHTML = downloadButton;
    });
});
