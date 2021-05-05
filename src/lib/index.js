// aqui exportaras las funciones que necesites

//export const myFunction = () => {
//aqui tu codigo
//console.log('Hola mundo!');
//};
const db = firebase.firestore();


export default () => {
    const postForm = document.getElementById("post-form");
    const postContainer = document.getElementById("post-container");


    const getPosts = () => db.collection("posts").get();

    postForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const postIt = postForm["post"].value;

        const response = await db.collection("posts").doc().set({
            postIt,
        })

        postForm.reset();
        const querySnapshot = await getPosts();
        querySnapshot.forEach(doc => {
            postContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
            ${doc.data().postIt}
            </div>`
            return postContainer
        })
    })

}