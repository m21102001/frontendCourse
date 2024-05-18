let x = myFunction(100, 10);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    console.log(a + b);
    return a * b;
}
// fetch('https://jsonplaceholder.org/users')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(users => {
//         console.log(users);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then(res => console.log(res))

const fruits = new Map(
    [['Apple', 'Red'], ['Banana', 'Yellow']]
);

console.log(fruits.get('Banana'))



// method post
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json;',
        // 'Content-type': 'Multipart/form-data;',
    },
})
    .then((response) => response.json())
    .then((json) => console.log('id', json));


// method put

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


// delete method

fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'DELETE',
});

// filter method
// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?page=4')
    .then((response) => response.json())
    .then((json) => console.log('user2',json));


// from postman
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((result) => console.log('from postman', result))
    .catch((error) => console.error(error));



fetch("https://67.205.154.132/api/v1/about-me", {
    method: "POST",
    body: JSON.stringify({
        id: 1,
        name: 'foo',
        description: 'bar',
        our_vision: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


fetch("https://67.205.154.132/api/v1/about-me", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        name: 'foo',
        description: 'bar',
        our_vision: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));



