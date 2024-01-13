document.addEventListener('DOMContentLoaded', function () {
    // JavaScript to show/hide the additional input based on the selected gender
    const genderSelect = document.getElementById('gender');
    const otherGenderLabel = document.getElementById('other-gender-label');

    // Event listener to show/hide input dynamically and update required
    genderSelect.addEventListener('change', () => {
        otherGenderLabel.style.display = genderSelect.value === 'other' ? 'block' : 'none';
        const otherGenderInput = otherGenderLabel.querySelector('input');
        otherGenderInput.required = genderSelect.value === 'other';
        otherGenderInput.value = ''; // Reset the input value when changing gender selection
    });

    // JavaScript to show/hide the additional input based on the selected diet type
    const dietTypeSelect = document.getElementById('diet-type');
    const otherDietTypeLabel = document.getElementById('other-diet-type-label');

    // Event listener to show/hide input dynamically and update required
    dietTypeSelect.addEventListener('change', () => {
        otherDietTypeLabel.style.display = dietTypeSelect.value === 'other' ? 'block' : 'none';
        const otherDietTypeInput = otherDietTypeLabel.querySelector('input');
        otherDietTypeInput.required = dietTypeSelect.value === 'other';
        otherDietTypeInput.value = ''; // Reset the input value when changing diet type selection
    });

    // JavaScript to show/hide the additional textarea based on the selected radio button for allergies
    const foodAllergiesDetailsLabel = document.getElementById('food-allergies-details-label');

    // Event listener to show/hide textarea dynamically and update required
    document.querySelectorAll('input[name="food-allergies-option"]').forEach((option) => {
        option.addEventListener('change', () => {
            foodAllergiesDetailsLabel.style.display = option.value === 'yes' ? 'block' : 'none';
            foodAllergiesDetailsLabel.querySelector('textarea').required = option.value === 'yes';
        });
    });

    // JavaScript to show/hide the additional textarea based on the selected radio button for supplements
    const supplementsDetailsLabel = document.getElementById('nutritional-supplements-details-label');

    // Event listener to show/hide textarea dynamically and update required
    document.querySelectorAll('input[name="nutritional-supplements-option"]').forEach((option) => {
        option.addEventListener('change', () => {
            supplementsDetailsLabel.style.display = option.value === 'yes' ? 'block' : 'none';
            supplementsDetailsLabel.querySelector('textarea').required = option.value === 'yes';
        });
    });

    // JavaScript to show/hide the "Specify other" input based on the triggers checkbox
    const otherTriggerCheckbox = document.getElementById('trigger-other');
    const otherTriggerDescriptionInput = document.getElementById('other-trigger-description');

    // Event listener to show/hide input dynamically and update required
    otherTriggerCheckbox.addEventListener('change', () => {
        otherTriggerDescriptionInput.style.display = otherTriggerCheckbox.checked ? 'block' : 'none';
        otherTriggerDescriptionInput.required = otherTriggerCheckbox.checked;
    });

    // JavaScript to show/hide the "Specify other" input based on the activities checkbox
    const otherActivityCheckbox = document.getElementById('activity-other');
    const otherActivityDescriptionInput = document.getElementById('other-activity-description');

    // Event listener to show/hide input dynamically and update required
    otherActivityCheckbox.addEventListener('change', () => {
        otherActivityDescriptionInput.style.display = otherActivityCheckbox.checked ? 'block' : 'none';
        otherActivityDescriptionInput.required = otherActivityCheckbox.checked;
    });
});
