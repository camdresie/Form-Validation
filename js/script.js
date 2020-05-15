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

jobTitle.addEventListener('change', (e) => {
    if (jobTitle.value === 'other') {
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
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

themeId.addEventListener('change', (e) => {
    if (themeId.value === 'js puns') {
        chooseATheme.hidden = true;
        for (let i=0; i<colorChoices.length; i++) {
            if (colorChoices[i].textContent.includes('JS Puns')) {
                colorChoices[i].hidden = false;
                chooseATheme.innerHTML = 'Please choose a T-shirt color';
            } else {
                colorChoices[i].hidden = true;
            }
        }
    } else if (themeId.value === 'heart js') {
        chooseATheme.hidden = true;
        for (let i=0; i<colorChoices.length; i++) {
            if (colorChoices[i].textContent.includes('JS shirt')) {
                colorChoices[i].hidden = false;
                 chooseATheme.innerHTML = 'Please choose a T-shirt color';
            } else {
                colorChoices[i].hidden = true;
            }
        }
    } else if (themeId.firstElementChild) {
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



/********** The event listener on the .activities class removes events that are at
 * a conflicting time by striking through them once a user selects another workshop at the
 * same time. 
 *********/

const checkboxes = document.querySelectorAll('.activities input');
document.querySelector('.activities').addEventListener('change', (e) => {
    const clicked = e.target;
    const clickedTime = clicked.getAttribute('data-day-and-time');
    const totalCostP = document.createElement('p');
    totalCostP.className = 'totalCostP';
    document.querySelector('.activities').appendChild(totalCostP);
    for (let i = 0; i < checkboxes.length; i++) {
        const checkboxTime = checkboxes[i].getAttribute('data-day-and-time');
        if (clickedTime === checkboxTime && clicked !== checkboxes[i]) {
            if (clicked.checked === true) {
                checkboxes[i].disabled = true;
                checkboxes[i].parentElement.style.setProperty('text-decoration', 'line-through');
            } else {
                checkboxes[i].disabled = false;
                checkboxes[i].parentElement.style.setProperty('text-decoration', 'none');
            }
        } 
    }
    for (i = 0; i < checkboxes.length; i++) {
        let totalCost = 0;
        if (checkboxes[i].checked === true) {
            totalCost += parseInt(checkboxes[i].getAttribute('data-cost'));
        }
       
    }
    totalCostP.innerHTML = `<strong>Total: ${totalCost}</strong>`;
});

const totalCostP = document.createElement('p');
totalCostP.className = 'totalCostP';
document.querySelector('.activities').appendChild(totalCostP);



   