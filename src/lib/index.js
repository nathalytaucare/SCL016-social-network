// aqui exportaras las funciones que necesites

//export const myFunction = () => {
//aqui tu codigo
//console.log('Hola mundo!');
//};
const db = firebase.firestore();

export default () => {
    const postForm = document.getElementById("post-form");

    const getPosts = () => db.collection("posts").get();
    window.addEventListener("DOMContentLoaded", async (e) => {
        const querySnapshot = await getPosts();
        querySnapshot.forEach(doc => {
            return console.log(doc.data());
        })
    })

    postForm.addEventListener("submit", async e => {
        e.preventDefault();
        const postIt = postForm["post"].value;

        const response = await db.collection("posts").doc().set({
            postIt,
        })

        postForm.reset();
})

}