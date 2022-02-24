import React, { useState } from 'react';


import './index.css';

// Componente

export const GiftExpertApp = () => {

    //const categories = ['Demon Slayer', 'One punch', 'Attack on Titan'];
    const [categories, setCategories] = useState(['Demon Slayer', 'One punch', 'Attack on Titan']);

    const handleAdd = () => {
        setCategories( [...categories, 'Full Metal Alchemist'] );
    }



    return (
  
      <>
        <h2>GiftExpertApp</h2>
        <hr />

        <button onClick = {handleAdd}>Agregar</button>

        <ol>
            {
                categories.map(category => {
                    return <li  key = { category }>{ category }</li>
                })
            }
        </ol>
      </>
  
    )
}
