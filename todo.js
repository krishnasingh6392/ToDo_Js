let button = document.getElementById("btn");
let items = document.getElementById("todo-items");
let todolist = document.getElementById("todo-list");
button.addEventListener("click", () => {
  let todoitems = document.createElement("li");
  todoitems.innerHTML = `  <input type="checkbox" class="check-box text-red-400 " />
  <p class="task-text">${items.value}</p>

         <button
         
            class="bg-blue-300 px-4  rounded-md ml-2 border border-none edit-btn "
          >
            Edit
        </button>

         <button
            
            class= " bg-red-400 px-4  rounded-md ml-2 border border-none delete-btn "
          >
            Del
        </button>

  `;
  todoitems.className =
    "my-4  w-full  bg-slate-300  h-9 flex justify-center items-center   rounded-md  gap-8  rounded-r-full rounded-l-full ";
  let checkbox = todoitems.querySelector(".check-box");
  let taskText = todoitems.querySelector(".task-text");
  let dltbtn = todoitems.querySelector(".delete-btn");
  let editbtn = todoitems.querySelector(".edit-btn");

  //   editbtn.addEventListener("click", () => {
  //     let input = document.createElement("input");
  //     input.value = taskText.textContent;
  //     input.className =
  //       "my-4   bg-slate-300  h-9 flex justify-center items-center   rounded-md  gap-8 mx-8 rounded-r-full rounded-l-full ";
  //     todoitems.replaceChild(input, taskText);
  //     editbtn.textContent = "Save";
  //     taskText = input;
  //   });

  dltbtn.addEventListener("click", () => {
    todoitems.remove();
  });

  checkbox.addEventListener("change", () => {
    taskText.classList.toggle("line-through");
    taskText.classList.toggle("text-red-400");
  });

  todolist.appendChild(todoitems);

  items.value = "";
});
