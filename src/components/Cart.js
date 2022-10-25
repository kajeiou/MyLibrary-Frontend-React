import { useState } from 'react'
function Cart() {

    const [nbProduit, updateProd] = useState(0)


    function add() {
        updateProd(nbProduit+1)
    }
    return (
        <div>
            <button onClick={add}>Ajouter un produit</button>
            {nbProduit}
        </div>
        
    )
}

export default Cart