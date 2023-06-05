import React from 'react'
import CardProduct from './CardProduct'

const Produk = () => {
    const listProduct = [
        {
          id: 1,
          productName: 'Sneakers Converse CTAS',
          desk:'Sepatu dengan kualitas sultann 😨',
          productPrice: 'Rp. 599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg'
        },
        {
          id: 2,
          productName: 'Converse Run Star Motion Canvas',
          desk:'Sepatu dengan kualitas horang kayahhhh',
          productPrice: 'Rp. 1.799.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
        },
        {
          id: 3,
          productName: 'Converse CTAS Construct Colorblock',
          desk:'Sepatu ini bekas dipakai ronaldowati!!',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
        },
        {
          id: 4,
          productName: 'Converse Chuck Taylor All Star',
          desk:'Sepatu ini pernah di pakai messi',
          productPrice: 'Rp. 899.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
        },
        {
          id: 5,
          productName: 'Converse Unisex Chuck 70 Plus',
          desk:'Sepatu ini bisa dipakai ke sawahhhh!!',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg'
        },
      ]
  return (
    
    <div style={{
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto',
        justifyContent: 'space-around',
        padding: '5px',
  
    }}>
        {
            listProduct.map((value, index) =>{
                return <CardProduct key={index} id={value.id} desk={value.desk} productName={value.productName} productPrice={value.productPrice} urlImage={value.urlImage} />
            })
        }
    </div>
  )
}

export default Produk