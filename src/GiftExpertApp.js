import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


import './index.css';

// Componente

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer']);

    return (
  
      <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr />

        <ol>
            {
                categories.map(category =>  (
                   <GifGrid 
                        key={ category }
                        category={ category }
                   />
                ))
        
            }
        </ol>
      </>
  
    )
}
