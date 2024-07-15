const refs = {
  users: document.querySelector('.users'),
};

for (let i = 0; i < 50; i++) {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
      const user = json[i];
      const renderUser = `<p>id: ${user.id}<br>title: ${user.title}<br>completed: ${user.completed}</p><br>`;
      console.log(renderUser);
      refs.users.insertAdjacentHTML('beforeend', renderUser);
    });
}
