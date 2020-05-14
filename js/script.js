/********** The below selectors are used throughout the script.js file.
 *********/

const nameInput = document.querySelector('#name');
const jobTitle = document.querySelector('#title')
const otherJobInput = document.querySelector('#other-title');
const themeId = document.querySelector('#design');
const colorId = document.querySelector('#color');

/********** This gives the name input focus when the page is loaded.
 *********/

nameInput.focus();

/********** This ensures that the box for an individual to put their job title if it is
 * other than the provided options does not appear unless they first select 'other' from the
 * job role dropdown. 
 *********/

otherJobInput.style.display = 'none';

jobTitle.addEventListener('click', (e) => {
    if (jobTitle.value === 'other') {
        otherJobInput.style.display = 'block';
    } 
});

/********** chooseATheme sets the default display value for the color 
 * of a shirt to direct the user to first choose a shirt theme before they can
 * select a shirt color. It also hides all color options from the user until they
 * choose a theme. 
 *********/

const chooseATheme = document.createElement('option');
chooseATheme.innerHTML = "Please choose a T-shirt theme";
colorId.append(chooseATheme);
chooseATheme.selected = true;

colorId.placeholder = 'Please choose a T-shirt theme';
const colorChoices = document.querySelectorAll('#color option');
for (let i = 0; i <colorChoices.length - 1; i++) {
    colorChoices[i].hidden = true;
}

/********** The event listener on themeId listens for a user's selection 
 * on the shirt theme drop down menu. If a user selects one shirt, they are provided
 * a set of color options corresponding to that shirt. If they select
 * the other, they get the color options corresponding to the other shirt. 
 * If they switch back to "select a theme," color options disappear.
 *********/

themeId.addEventListener('click', (e) => {
    if (themeId.value === 'js puns') {
        chooseATheme.hidden = true;
        for (let i=0; i<colorChoices.length; i++) {
            if (colorChoices[i].textContent.includes('JS Puns')) {
                colorChoices[i].hidden = false;
            } else {
                colorChoices[i].hidden = true;
            }
        }
    } else if (themeId.value === 'heart js') {
        chooseATheme.hidden = true;
        for (let i=0; i<colorChoices.length; i++) {
            if (colorChoices[i].textContent.includes('JS shirt')) {
                colorChoices[i].hidden = false;
            } else {
                colorChoices[i].hidden = true;
            }
        }
    } else if (themeId.value === 'Select Theme') {
        chooseATheme.hidden = false;
        for (let i=0; i<colorChoices.length; i++) {
            if (colorChoices[i].textContent.includes('Please select')) {
                colorChoices[i].hidden = true;
            } else if (colorChoices[i].textContent.includes('JS')) {
                colorChoices[i].hidden = true;
             }
         }
    }
});

