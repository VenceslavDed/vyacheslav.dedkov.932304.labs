const itemsContainer = document.querySelector('.objects_items');
const savedContainer = document.querySelector('.objects_saved');
const addBtn = document.querySelector('.objects_add');
const saveBtn = document.querySelector('.objects_save');

addBtn.addEventListener('click', () => {
    const newObject = document.createElement('div');

    newObject.classList.add('objects_item');
    newObject.innerHTML = `
        <input type="text" class="objects_input">
        <input type="text" class="objects_input">
        <button type="button" class="objects_btn objects_up-btn">&uarr;</button>
        <button type="button" class="objects_btn objects_down-btn">&darr;</button>
        <button type="button" class="objects_btn objects_close-btn">&times;</button>
    `;
    newObject.querySelector('.objects_up-btn').addEventListener('click', moveObjectUp);
    newObject.querySelector('.objects_down-btn').addEventListener('click', moveObjectDown);
    newObject.querySelector('.objects_close-btn').addEventListener('click', removeObject);

    itemsContainer.append(newObject);
});

saveBtn.addEventListener('click', () => {
    const objectItems = document.querySelectorAll('.objects_item');
    let savedObjects = '{';

    objectItems.forEach((item) => {
        const firstInputValue = item.querySelector('input:nth-child(1)').value;
        const secondInputValue = item.querySelector('input:nth-child(2)').value;

        savedObjects += `"${firstInputValue}":"${secondInputValue}",`;
    });

    savedObjects = savedObjects.slice(0, savedObjects.length - 1);
    savedObjects += '}';

    savedContainer.textContent = savedObjects;
});

const moveObjectUp = ($event) => {
    const currentObj = $event.target.closest('.objects_item');
    const prevObj = currentObj.previousElementSibling;
    prevObj?.before(currentObj);
};

const moveObjectDown = ($event) => {
    const currentObj = $event.target.closest('.objects_item');
    const nextObj = currentObj.nextElementSibling;
    nextObj?.after(currentObj);
};

const removeObject = ($event) => {
    $event.target.closest('.objects_item').remove();
};

document.querySelector('.objects_up-btn').addEventListener('click', moveObjectUp);
document.querySelector('.objects_down-btn').addEventListener('click', moveObjectDown);
document.querySelector('.objects_close-btn').addEventListener('click', removeObject);