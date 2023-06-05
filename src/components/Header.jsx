import React from 'react'

const Header = () => {
    const nama = "Helmi Tris Edyan"
  return (
    <header style={{
        border:'5px solid',
        backgroundColor: "brown",
        fontSize:"50px",
        color:"white",
        padding:'10px'

    }}>{nama}</header>
  )
}

export default Header