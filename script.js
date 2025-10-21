(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    answer.textContent = "Loading…";

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        const posts = data;

        const listItems = posts.map(post => {
          return `<li><strong>${post.title}</strong><br>${post.body}</li>`;
        });

        const html = `<ul>${listItems.join('')}</ul>`;
        answer.innerHTML = html;
      })
      .catch(error => {
        console.error(error);
        answer.innerHTML = "Błąd podczas pobierania postów.";
      });
  });

  cw2.addEventListener("click", function() {
    answer.textContent = "Loading…";

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(post => {
        const html = `<h3>${post.title}</h3><p>${post.body}</p>`;
        answer.innerHTML = html;
      })
      .catch(error => {
        console.error(error);
        answer.innerHTML = "Błąd podczas pobierania posta.";
      });
  });

  cw3.addEventListener("click", function() {
    answer.textContent = "Processing…";

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Nowy post",
        body: "To jest treść nowego posta.",
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        answer.textContent = `Dodano nowy post o ID = ${data.id}`;
      })
      .catch(error => {
        console.error(error);
        answer.textContent = "Błąd podczas dodawania nowego posta.";
      });
  });

})();