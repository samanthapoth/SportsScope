let titleInput = document.getElementById('title');
let descInput = document.getElementById('desc');
let todoId = document.getElementById('todo-id');
let genderInput = document.getElementById('gender')
let titleEditInput = document.getElementById('title-edit');
let descEditInput = document.getElementById('desc-edit');
let genderEditInput = document.getElementById('gender-edit')
let todos = document.getElementById('todos');
let data = [];
let selectedTodo = {};
const api = 'http://localhost:8000';

function tryAdd() {
  let msg = document.getElementById('msg');
  msg.innerHTML = '';
}

document.getElementById('form-add').addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!titleInput.value | !genderInput.value) {
    document.getElementById('msg').innerHTML = 'Team Name or Gender cannot be blank.';
  } else {
    addTodo(titleInput.value, descInput.value, genderInput.value);
    
    // close modal
    let add = document.getElementById('add');
    add.setAttribute('data-bs-dismiss', 'modal');
    add.click();
    (() => {
      add.setAttribute('data-bs-dismiss', '');
    })();
  }
});

let addTodo = (title, description, gender) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 201) {
      const newTodo = JSON.parse(xhr.responseText);
      data.push(newTodo);
      refreshTodos();
    }
  };
  xhr.open('POST', `${api}/todos`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  console.log(gender);
  xhr.send(JSON.stringify({ title, description, gender }));

};


let refreshTodos = () => {
  todos.innerHTML = '';
  data
    .sort((a, b) => b.id - a.id)
    .map((x) => {
      return (todos.innerHTML += `
        <div id="todo-${x.id}">
          <span class="fw-bold fs-4" style="font-family: Georgia, 'Times New Roman', Times, serif;">${x.title}</span>
          <pre class="gender-text">${x.gender} ${x.description}</pre>
  
          <span class="options">
            <i onClick="tryEditTodo(${x.id})" data-bs-toggle="modal" data-bs-target="#modal-edit" class="fas fa-edit"></i>
            <i onClick="deleteTodo(${x.id})" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
    });

  resetForm();
};


let tryEditTodo = (id) => {
  const todo = data.find((x) => x.id === id);
  selectedTodo = todo;
  todoId.innerText = todo.id;
  titleEditInput.value = todo.title;
  descEditInput.value = todo.description;
  genderEditInput.value = todo.gender;

  document.getElementById('msg-edit').innerHTML = '';
};

document.getElementById('form-edit').addEventListener('submit', (e) => {
  e.preventDefault();

  if (!genderEditInput.value | !titleEditInput.value) {
    document.getElementById('msg-edit').innerHTML = 'Team Name or Gender cannot be blank.';
  } else {
    editTodo(titleEditInput.value, descEditInput.value, genderEditInput.value);

    // close modal
    let edit = document.getElementById('edit');
    edit.setAttribute('data-bs-dismiss', 'modal');
    edit.click();
    (() => {
      edit.setAttribute('data-bs-dismiss', '');
    })();
  }
});

let editTodo = (title, description, gender) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      selectedTodo.title = title;
      selectedTodo.description = description;
      selectedTodo.gender = gender;
      refreshTodos();
    }
  };
  xhr.open('PUT', `${api}/todos/${selectedTodo.id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify({ title, description, gender }));
};

let deleteTodo = (id) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = data.filter((x) => x.id !== id);
      refreshTodos();
    }
  };
  xhr.open('DELETE', `${api}/todos/${id}`, true);
  xhr.send();
};

let clearTodos = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      data = data.filter((x) => x.id === 0);
      refreshTodos();
    }
  }
  xhr.open('CLEAR', `${api}/todos`, true);
  xhr.send();
}

let resetForm = () => {
  titleInput.value = '';
  descInput.value = '';
  genderInput.value = '';
};

let getTodos = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText) || [];
      refreshTodos();
    }
  };
  xhr.open('GET', `${api}/todos`, true);
  xhr.send();
};

(() => {
  getTodos();
})();

async function load(url, name){
  const selection = document.getElementById(name);
  const response = await fetch(url);
  const data = await response.json();
  selection.innerHTML = "";
  const blankElement = document.createElement("option");
  blankElement.textContent = "";
  selection.appendChild(blankElement);
  for (i = 0; i < data.length; i++) {
    const nameElement = document.createElement("option");
    nameElement.textContent = data[i].Team;
    nameElement.id = data[i].Team;
    if (i > 0) {
      if (nameElement.textContent == data[i-1].Team) {
        continue;
      }
      else {
        selection.appendChild(nameElement);
      }
    } 
  }
} 
  
load('team_colors.json', "title");
load('team_colors.json', "title-edit");
