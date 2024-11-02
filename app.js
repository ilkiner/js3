
const User= document.querySelector ".users";


const BASE_URL = "https://jsonplaceholder.typicode.com/users";
async function fetchApidata (url, cb) {
    return await fetch(url)
    .then ( (res) => res.json() )
    .then((data) => {
        cb(data);
    })
    .catch ((err) => {
        console.log (err);

    })
    .finally (() =>{
console.log("fetch completed")
});
}

const User = document.querySelector(".users");

fetchApidata("photos", (data) => {
    
    const limitedData = data.slice(0, 5);
    data.forEach(element => {
        data.forEach(element => {
            let data + `
                <div class="col-xl-3">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                            <h5 class="card-title">${element.username}</h5>
                            <p class="card-text">${element.name}</p>
                            <a href="#" class="btn btn-primary">${element.email}</a>
                        </div>
                    </div>
                </div>`;
        });
        
        
        User.innerHTML += userCards;
    });
});

fetchApidata("photos", (data) => {

}let userCards = "";
    const limitedData = data.slice(0, 5);
    data.forEach(element => {
        imitedData.forEach(element => {
            userCards += `
                <div class="col-xl-3">
                    <div class="card">
                        <img src="${element.url}" class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                            <h5 class="card-title">${element.username}</h5>
                            <p class="card-text">${element.name}</p>
                            <a href="#" class="btn btn-primary">${element.email}</a>
                        </div>
                    </div>
                </div>`;
        });
        
        
        User.innerHTML += data;
    });

)



fetchApidata("todos", (data) => {
    console.log(data);
});

fetchApidata("photos", (data) => {
    console.log(data);
});






// const API_URL = "https://jsonplaceholder.typicode.com/users";
// const APIURL_TODOS = "https://jsonplaceholder.typicode.com/todos";
// const APIURL_POSTS = "https://jsonplaceholder.typicode.com/pots";


// fetch (API_URL)
// .then ( (res) => res.json() )
// .then ((responseData) {
//     console.log(responseData)
// }

// )
// fetch (APIURL_TODOS)
// .then ( (res) => res.json() )
// .then ((responseData) {
//     console.log(responseData)
// }

// )
// fetch (APIURL_POSTS)
// .then ( (res) => res.json() )
// .then ((responseData) {
//     console.log(responseData)
// }

// )