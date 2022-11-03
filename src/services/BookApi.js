export async function getAllBooks() {
    return await fetch('http://localhost:2000/books')
    .then(response => response.json());
}