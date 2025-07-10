# Todo App

A simple and elegant todo application built with HTML, CSS, and JavaScript.

![Todo App Screenshot](https://github.com/Rohit03022006/Todo-using-js/blob/master/Todo-By-Js.png)

## Features

- Add new tasks to your todo list
- Delete tasks with a single click
- Responsive design that works on mobile and desktop
- Task counter that updates in real-time
- Clean, modern UI with smooth animations
- Form validation to prevent empty tasks

## Technologies Used

- HTML5
- CSS3 (with custom properties and modern layout techniques)
- Vanilla JavaScript (DOM manipulation, event handling)

## Installation

No installation required! Simply open the `index.html` file in your web browser.

## How to Use

1. Type your task in the input field
2. Click "Add task" or press Enter to add it to your list
3. To delete a task, click the "Delete" button next to it
4. The task counter at the top will automatically update

## Code Structure

- `Todo.html`: The main HTML file containing the app structure
- `style.css`: All styling for the application
- `script.js`: JavaScript functionality for adding and deleting tasks
```
Todo-using-js/
│
├── Todo.html
├── style.css
├── script.js
├── README.md
└── Todo-using-js.png
```
## Customization

You can easily customize the app by modifying the CSS variables in the `:root` selector:

```css
:root {
  --primary: #4361ee;       /* Main brand color */
  --primary-dark: #3a56d4;  /* Darker shade of primary */
  --accent: #4cc9f0;        /* Accent color for highlights */
  --danger: #f72585;        /* Color for delete buttons */
  --danger-dark: #e5177b;   /* Darker shade of danger */
  --light: #f8f9fa;         /* Light background color */
  --dark: #212529;          /* Dark text color */
  --gray: #6c757d;          /* Secondary text color */
  --success: #4ad66d;       /* Success color (not currently used) */
}
```
