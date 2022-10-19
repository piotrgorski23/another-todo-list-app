const addForm = document.querySelector(".add");
const ulList = document.querySelector(".todos");
const todoFeedback = document.querySelector("#todo-feedback");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>
                    ${todo}
                </span>
                <i class="far fa-trash-alt delete"></i>
            </li>
`;

  ulList.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  //   todo.length ? generateTemplate(todo) : console.log("dupa");

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
    todoFeedback.classList.contains("d-block")
      ? todoFeedback.classList.remove("d-block")
      : "";
  } else {
    todoFeedback.classList.add("d-block");
  }
});

// deleting todos
ulList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (text) => {
  Array.from(ulList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(text))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(ulList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(text))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// keyup event
search.addEventListener("keyup", () => {
  const text = search.value.trim().toLowerCase();
  filterTodos(text);
});
