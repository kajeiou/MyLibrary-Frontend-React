export async function getAllBooks() {
  return await fetch('http://localhost:2000/books')
    .then(response => response.json());
}

export async function createBookApi(token,dataForm) {
    return await fetch('http://localhost:2000/books/create', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            bookName: dataForm.bookName,
            price: dataForm.price,
            stock: dataForm.stock,
            isbn: dataForm.isbn,
            pageCount: dataForm.pageCount
        }),
      })
    .then(response => response.json());  
}
export async function deleteBookApi(bookId, token) {
  return await fetch('http://localhost:2000/books/' + bookId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });  
}

export async function updateBookApi(bookId, token, dataForm) {

  return await fetch('http://localhost:2000/books/' + bookId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({
        bookName: dataForm.bookName,
        price: dataForm.price,
        stock: dataForm.stock,
        isbn: dataForm.isbn,
        pageCount: dataForm.pageCount
    }),
  });  
}