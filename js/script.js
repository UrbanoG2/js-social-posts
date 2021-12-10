// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
//- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


//creo un array

const posts =[
    {
        name: "Giuseppe Urbano",
        profileImg: Math.floor(Math.random() * 100) + 1,
        date:"1 anno fa",
        image:Math.floor(Math.random() * 100) + 1,
        likes: 1002,
    },

    {
        name: "Giuseppe Urbano",
        profileImg: Math.floor(Math.random() * 100) + 1,
        date:"1 anno fa",
        image:Math.floor(Math.random() * 100) + 1,
        likes: 1002,
    },

    {
        name: "Giuseppe Urbano",
        profileImg: Math.floor(Math.random() * 100) + 1,
        date:"1 anno fa",
        image:Math.floor(Math.random() * 100) + 1,
        likes: 1002,
    },

    {
        name: "Giuseppe Urbano",
        profileImg: Math.floor(Math.random() * 100) + 1,
        date:"1 anno fa",
        image:Math.floor(Math.random() * 100) + 1,
        likes: 1002,
    },
]

console.log(posts.length);

//prendo il mio elemento di riferimento dal dom 

const container = document.getElementById("container");

// const postContainer = document.createElement("div");
// container.append(postContainer);

// console.log(postContainer);

//richiamo la funzione
createPost (posts, container)

//creo una funzione per creare qualcosa nel dom (nel container di riferimento)

function createPost (array, container) {

    for (let i = 0; i < array.length; i++) {


        const container = document.getElementById("container");

        container.innerHTML = " ";

        // const postContainer = document.createElement("div");
        // container.append(postContainer);

        // console.log(postContainer);
        const object = array[i];

        //scriviamo il dom

        const containedPost = `
        
        <div class="post">
            <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="https://unsplash.it/300/300?image=${object.profileImg}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${object.name}</div>
                            <div class="post-meta__time">${object.date}</div>
                        </div>                    
                    </div>
            </div>

            <div class="post__text">
                    Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.  
            </div>

            <div class="post__image">
                <img src="https://unsplash.it/300/300?image=${object.image}">   
            </div>

            <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${object.likes}</b> persone
                        </div>
                    </div> 
            </div>        
        </div>

        `
        container.innerHTML += containedPost;
    }   
}

