import React from 'react'

const CardProduct = (props) => {
    const handleButtonClick = () => {
        alert(props.desk);
      };
    
  return (
    <div onClick={handleButtonClick}  style={{
        textAlign:'center',
        border:"4px solid",
        height:200,
        width:200,
        padding:'10px',
        margin:"10px",
        backgroundColor:"brown",
        fontFamily:"monospace",
        color:"white",
        borderRadius:'8px',
        marginLeft:'170%'
        
    }}>
        <img style={{
            width:150,
            height:150,
            borderRadius:8,
        }} src={props.urlImage}></img>
        <h2 style={{
            fontSize:"10px"
        }}>
            {props.productName}
        </h2>
        <p>
            {props.productPrice}
        </p>
    </div>
  )
}

export default CardProduct