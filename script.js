const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingNumb = document.querySelector(".pendingNumb");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userData = inputBox.value;

  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};
showTasks();

//if user click on the add button
addBtn.onClick = () => {
  let userData = inputBox.value;

  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();

  //un active the add button
  addBtn.classList.remove("active");
};

function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }

  pendingNumb.textContent = listArr.length; //passing the length value in pending task

  if (listArr.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }

  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li>
               ${element} <span onClick="deleteTask(${index})";><i class="fas fa-trash"></i></span>
            </li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

function deleteTask() {
  let getLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, i);

  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}

//delete all tasks function
deleteAllBtn.onClick = () => {
  listArr = [];

  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
};
