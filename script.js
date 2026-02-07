// Save and load timetable + tasks + books

// Function to save data to localStorage
function saveData() {
    // Save timetable cells
    const timetableCells = document.querySelectorAll('.cell');
    timetableCells.forEach((cell, index) => {
        localStorage.setItem('cell_' + index, cell.innerText);
    });

    // Save task boxes
    const taskBoxes = document.querySelectorAll('.task-box');
    taskBoxes.forEach((task, index) => {
        localStorage.setItem('task_' + index, task.innerText);
    });

    // Save book references
    const bookRefs = document.querySelectorAll('.book-ref');
    bookRefs.forEach((book, index) => {
        localStorage.setItem('book_' + index, book.innerText);
    });
}

// Function to load data from localStorage
function loadData() {
    const timetableCells = document.querySelectorAll('.cell');
    timetableCells.forEach((cell, index) => {
        if(localStorage.getItem('cell_' + index)) {
            cell.innerText = localStorage.getItem('cell_' + index);
        }
    });

    const taskBoxes = document.querySelectorAll('.task-box');
    taskBoxes.forEach((task, index) => {
        if(localStorage.getItem('task_' + index)) {
            task.innerText = localStorage.getItem('task_' + index);
        }
    });

    const bookRefs = document.querySelectorAll('.book-ref');
    bookRefs.forEach((book, index) => {
        if(localStorage.getItem('book_' + index)) {
            book.innerText = localStorage.getItem('book_' + index);
        }
    });
}

// Event listener to save whenever you type in cells or tasks
document.addEventListener('input', saveData);

// Load data when page loads
window.addEventListener('load', loadData);
