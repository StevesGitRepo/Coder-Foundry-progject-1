let count = 0;

const addTask = () => {
  count++;
  let Tasktemplate = `<li class="item list-group-item">Task ${count}</li>`;
  let element = document.getElementById('list');
  element.innerHTML += Tasktemplate;
};
