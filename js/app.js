//Grab the addform, itemList and the filter 
const addForm = document.querySelector('#addForm');
const itemList = document.querySelector('#items')
const filter = document.querySelector('#filter');

//Form submit/add event
addForm.addEventListener('submit', addItem);

//Form delete event
itemList.addEventListener('click', removeItem);

//Form filter event
filter.addEventListener('keyup', filterItems);

//Add item function
function addItem(e) {
    e.preventDefault()

    //Get input value
    const newItem = document.querySelector('#item').value;

    //grab the name the user types in the add form
    const newItemValue = addForm.querySelector('input[type = "text"]').value;
    //Test the addFormValue
    console.log(newItemValue);

    //Form Validation
    if (newItemValue === '') {
        alert('Please Enter An Item');
        deleteButton.remove();
        li.remove();
    }

    //Create new li element
    const li = document.createElement('li');
    //Add class
    li.classList.add('list-group-item');
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    const deleteButton = document.createElement('button');
    //Add Class
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'delete', 'float-right');
    //Add text content to button
    deleteButton.textContent = 'X';
    //Add delete button to li
    li.appendChild(deleteButton);

    //Append li to the ul(itemList)
    itemList.appendChild(li);
};

//Remove Item Function
function removeItem(e) {
    //Ensure that the function is added only to the delete button and not the list
    if (e.target.classList.contains('delete')) {
        //Confirm delete?
        if (confirm("You're Sure About That?")) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        };
    };
};

//Filter item function
function filterItems(e) {
    //Convert the inputed values to lower case
    const inputValue = e.target.value.toLowerCase();

    //Grab all the li within the itemlist
    const Items = itemList.querySelectorAll('li');
    //loop through the lis'
    Items.forEach(function(Item) {
        const itemName = Item.firstChild.textContent;

        //Check whether the input value matches with the list contents
        if (itemName.toLocaleLowerCase().indexOf(inputValue) != -1) {
            Item.style.display = "block";
        } else {
            Item.style.display = "none";
        }
        //console.log(Item);

    });

};