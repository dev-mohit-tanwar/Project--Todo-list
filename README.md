# Todo List App

A simple, responsive todo list application built with HTML, CSS, and JavaScript.

🚀 **Live Demo:** [Click here to view the web-page](https://dev-mohit-tanwar.github.io/Project--Todo-list/)

## Description

This project lets users create, complete, and delete daily tasks. Tasks are saved in the browser using `localStorage`, so they remain available when the page is reopened in the same browser.

## Features

- Add new tasks to your todo list
- Mark tasks as completed
- Delete tasks from the list
- Save tasks automatically in the browser
- Add tasks with the button or the Enter key
- Delete tasks with the mouse or keyboard
- Responsive layout for desktop and mobile screens

## Technologies Used

- **HTML** - Structure and markup
- **CSS** - Styling and layout
- **JavaScript** - Functionality and interactivity

## Project Structure

```text
.
├── assets/
│   └── images/
│       ├── checked.png
│       ├── icon.png
│       └── unchecked.png
├── css/
│   └── stylesheet.css
├── js/
│   └── script.js
└── index.html
```

## Run the Project

No installation or dependencies are required.

1. Open the project folder in VS Code.
2. Open [index.html](index.html) in a browser.
3. Add tasks, mark them complete, or delete them.

You can also use the VS Code Live Server extension if you prefer to run the project through a local development server.

## File Paths

The project uses relative paths so the complete folder can be moved without changing the code:

- `index.html` loads `css/stylesheet.css` and `js/script.js`.
- `index.html` loads the header icon from `assets/images/`.
- `css/stylesheet.css` loads the checked and unchecked icons from `../assets/images/`.

Keep the folder structure unchanged when moving or sharing the project.

You can test the application directly using the [Live Demo link](https://dev-mohit-tanwar.github.io/Project--Todo-list/) above, or simply clone this repository and open `index.html` in your web browser.
