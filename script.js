// JavaScript to show/hide the additional input based on the selected gender
const genderSelect = document.getElementById("gender");
const otherGenderLabel = document.getElementById("other-gender-label");

// Event listener to show/hide input dynamically and update required
genderSelect.addEventListener("change", function () {
    otherGenderLabel.style.display = this.value === "other" ? "block" : "none";
    const otherGenderInput = otherGenderLabel.querySelector("input");
    otherGenderInput.required = this.value === "other";
    otherGenderInput.value = ""; // Reset the input value when changing gender selection  
})


// JavaScript to show/hide the additional input based on the selected diet type
const dietTypeSelect = document.getElementById('diet-type');
const otherDietTypeLabel = document.getElementById('other-diet-type-label');

// Event listener to show/hide input dynamically and update required
dietTypeSelect.addEventListener('change', function () {
    otherDietTypeLabel.style.display = this.value === 'other' ? 'block' : 'none';
    const otherDietTypeInput = otherDietTypeLabel.querySelector('input');
    otherDietTypeInput.required = this.value === 'other';
    otherDietTypeInput.value = ''; // Reset the input value when changing diet type selection
});


// JavaScript to show/hide the additional textarea based on the selected radio button for allegies
const foodAllergiesOption = document.querySelector('input[name="food-allergies-option"]:checked');
const foodAllergiesDetailsLabel = document.getElementById('food-allergies-details-label');

if (foodAllergiesOption.value === 'yes') {
    foodAllergiesDetailsLabel.style.display = 'block';
}

// Event listener to show/hide textarea dynamically and update required
document.querySelectorAll('input[name="food-allergies-option"]').forEach((option) => {
    option.addEventListener('change', function () {
        foodAllergiesDetailsLabel.style.display = this.value === 'yes' ? 'block' : 'none';
        foodAllergiesDetailsLabel.querySelector('textarea').required = this.value === 'yes';
    });
});


// JavaScript to show/hide the additional textarea based on the selected radio button for supplements
const supplementsOption = document.querySelector('input[name="nutritional-supplements-option"]:checked');
const supplementsDetailsLabel = document.getElementById('nutritional-supplements-details-label');

if (supplementsOption.value === 'yes') {
    supplementsDetailsLabel.style.display = 'block';
}

// Event listener to show/hide textarea dynamically and update required
document.querySelectorAll('input[name="nutritional-supplements-option"]').forEach((option) => {
    option.addEventListener('change', function () {
        supplementsDetailsLabel.style.display = this.value === 'yes' ? 'block' : 'none';
        supplementsDetailsLabel.querySelector('textarea').required = this.value === 'yes';
    });
});


// JavaScript to show/hide the "Specify other" input based on the triggers checbox
const otherTriggerCheckbox = document.getElementById('trigger-other');
const otherTriggerDescriptionInput = document.getElementById('other-trigger-description');

// Event listener to show/hide input dynamically and update required
otherTriggerCheckbox.addEventListener('change', function () {
    otherTriggerDescriptionInput.style.display = this.checked ? 'block' : 'none';
    otherTriggerDescriptionInput.required = this.checked;
});


// JavaScript to show/hide the "Specify other" input based on the activities checkbox
const otherActivityCheckbox = document.getElementById('activity-other');
const otherActivityDescriptionInput = document.getElementById('other-activity-description');

// Event listener to show/hide input dynamically and update required
otherActivityCheckbox.addEventListener('change', function () {
    otherActivityDescriptionInput.style.display = this.checked ? 'block' : 'none';
    otherActivityDescriptionInput.required = this.checked;
});