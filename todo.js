let button = document.getElementById("btn");
let items = document.getElementById("todo-items");
let todolist = document.getElementById("todo-list");
button.addEventListener("click", () => {
  let todoitems = document.createElement("li");
  todoitems.innerHTML = `
    <span class="flex justify-center items-center gap-1">
      <input type="checkbox" class="check-box accent-green-500  w-4 h-4  rounded-full border-2 border-green-500 " />
  <p class="task-text">${items.value}</p>
    </span>

      

         <button
            
            class= "  ml-2 border border-none delete-btn "
          >
       <i class="fa-solid fa-trash text-red-500 "></i>
        </button>

  `;
  todoitems.className =
    " flex justify-between m-4 px-4 items-center  py-2 mx-8 rounded-l-full rounded-r-full bg-slate-100 placeholder:text-slate-600 text-center";
  let checkbox = todoitems.querySelector(".check-box");
  let taskText = todoitems.querySelector(".task-text");
  let dltbtn = todoitems.querySelector(".delete-btn");
  let editbtn = todoitems.querySelector(".edit-btn");

  dltbtn.addEventListener("click", () => {
    todoitems.remove();
  });

  checkbox.addEventListener("change", () => {
    taskText.classList.toggle("line-through");
    taskText.classList.toggle("text-green-700");
  });

  todolist.appendChild(todoitems);

  items.value = "";
});
