// Ensuring that the form element exists in the DOM
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Adding event listener to the form submit event
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        // Retrieving values from form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Checking if the resume display exists before updating it
        if (resumeDisplay) {
            // Creating dynamic resume content
            resumeDisplay.innerHTML = "\n                <h2><span contenteditable=\"true\">".concat(name, "</span>'s Resume</h2>\n                <div class=\"section\">\n                    <h3>Personal Information</h3>\n                    <p><b<span contenteditable=\"true\">Email: ").concat(email, "</b></span></p>\n                    <p><b><span contenteditable=\"true\">Phone: ").concat(phone, "</b></span></p>\n                </div>\n                <div class=\"section\">\n                    <h3>Education</h3>\n                    <p contenteditable=\"true\">").concat(education, "</p>\n                </div>\n                <div class=\"section\">\n                    <h3>Experience</h3>\n                    <p contenteditable=\"true\">").concat(experience, "</p>\n                </div>\n                <div class=\"section\">\n                    <h3>Skills</h3>\n                    <p contenteditable=\"true\">").concat(skills, "</p>\n                </div>\n            ");
            // Display the generated resume
            resumeDisplay.style.display = 'block';
        }
    });
}
