import Modal from 'react-modal';
import React, {  useState } from 'react';
import { useForm  } from "react-hook-form";
import { toast } from 'react-toastify';

export default function BookEdit(props) {
    console.log(props.book)
         
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
          bookName: props.book.bookName,
          price: props.book.price,
          stock: props.book.stock,
          isbn: props.book.isbn,
          pageCount:props.book.pageCount,
        }
      });
    const [modalIsOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(0)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const onSubmit = async dataForm => {
        try {
            
            toast.success("Le livre a été modifié")
            //closeModal();
            
    
        } catch ({ response }) {
            setMessage({type:"danger", message:"Une erreur est survenue"})
        }
    }
        
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
    return(
        <div className="BookEdit">
            <button id="editBook" className="btn w-100 btn-block btn-secondary " onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                </svg>
            </button>
            
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" shouldCloseOnOverlayClick={false}>
            <div className="card">
                    <h5 className="card-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                        Éditer le livre</h5>
                    {message
                    ?
                    <div className={"alert alert-"+message.type} role="alert">
                        {message.message}
                    </div>
                    :
                    ''
                    }

                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row">
                                <label htmlFor="bookName" className="col col-form-label">Nom</label>
                                <div className="col-8 text-center">
                                    <input name="bookName" type="text" className="form-control" id="bookName" aria-describedby="bookNameHelp" placeholder="Entrez un nom" {...register("bookName", {required:'Nom du livre obligatoire'})}  />
                                    {errors.bookName && errors.bookName.type === "required" && <p className="text-white bg-danger ">
                                        Nom du livre non renseigné
                                    </p>}
                                </div>
                            </div>
                            <br/>
                            <div className="form-group row">
                                <label htmlFor="price" className="col col-form-label">Prix</label>
                                <div className="col-8 text-center">
                                    <input name="price" type="number" className="form-control" id="price" aria-describedby="bookPriceHelp" placeholder="Entrez un prix" {...register("price", {required:'Prix du livre obligatoire'})}  />
                                    {errors.price && errors.price.type === "required" && <p className="text-white bg-danger ">
                                        Prix non renseigné
                                    </p>}
                                </div>
                            </div>
                            <br/>
                            <div className="form-group row ">
                                <label htmlFor="stock" className="col col-form-label">Stock</label>
                                <div className="col-8 text-center">
                                    <input name="stock" type="number" className="form-control" id="stock" aria-describedby="bookStockHelp" placeholder="Entrez un stock" {...register("stock", {required:'Stock du livre obligatoire'})}  />
                                    {errors.stock && errors.stock.type === "required" && <p className="text-white bg-danger ">
                                        Stock non renseigné
                                    </p>}
                                </div>
                            </div>
                            <br/>
                            <div className="form-group row">
                                <label htmlFor="stock" className="col col-form-label">ISBN </label>
                                <div className="col-8 text-center">
                                    <input name="isbn" type="text" className="form-control" id="isbn" aria-describedby="bookStockHelp" placeholder="Entrez un ISBN" {...register("isbn", {required:'ISBN du livre obligatoire', minLength: 10, maxLength:11})}  />
                                    {errors.isbn && errors.isbn.type === "required" && <p className="text-white bg-danger ">
                                        ISBN non renseigné
                                    </p>}
                                    {errors.isbn && errors.isbn.type === "minLength" && <p className="text-white bg-danger">
                                        ISBN trop court (10 caractères minimum)
                                    </p>}
                                    {errors.isbn && errors.isbn.type === "maxLength" && <p className="text-white bg-danger">
                                        ISBN trop long (10 caractères minimum)
                                    </p>}
                                </div>
                            </div>
                            <br/>
                            <div className="form-group row">
                                <label htmlFor="stock" className="col col-form-label">Pages</label>
                                <div className="col-8 text-center">
                                    <input name="pageCount" type="number" className="form-control" id="stock" aria-describedby="bookStockHelp" placeholder="Entrez un nombre" {...register("pageCount", {required:'Nombre de pages du livre obligatoire'})}  />
                                    {errors.stock && errors.stock.type === "required" && <p className="text-white bg-danger ">
                                        Nombre de pages non renseigné
                                    </p>}
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-block btn-danger w-100"onClick={closeModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x m-0" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="col-8">
                                    <button className="btn btn-success btn-block w-100" type="submit">
                                        Modifier le livre
                                    </button>
                                </div>
                            </div>
                            
                            
                        </form>
                    </div>
                </div><br/>
               
                
            </Modal>
        </div>
        
    )
}