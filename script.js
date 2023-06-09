let employees = [];

const form = document.querySelector('#employee-form');
const employeeList = document.querySelector('#employee-list');
const addEmployeeBtn = document.querySelector('#add-employee');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const profession = document.querySelector('#profession').value;
    const age = document.querySelector('#age').value;

    if (name === '' || profession === '' || age === '') {
        const error = document.createElement('p');
        error.className = 'error';
        error.textContent = 'All fields are required.';
        form.appendChild(error);
    } else {
        const employee = {
            id: employees.length + 1,
            name: name,
            profession: profession,
            age: age
        };

        employees.push(employee);
        addEmployeeToList(employee);

        const success = document.createElement('p');
        success.className = 'success';
        success.textContent = 'Employee added successfully.';
        form.appendChild(success);

        form.reset();
    }
});

function addEmployeeToList(employee) {
    const li = document.createElement('li');
    li.id = `employee-${employee.id}`;
    li.innerHTML = `${employee.name}, ${employee.profession}, ${employee.age} <button class="delete-employee" data-id="${employee.id}">Delete</button>`;
    employeeList.appendChild(li);
}

employeeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-employee')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const index = employees.findIndex((employee) => employee.id === id);

        if (index !== -1) {
            employees.splice(index, 1);
            const li = document.querySelector(`#employee-${id}`);
            li.remove();
        }
    }
});
