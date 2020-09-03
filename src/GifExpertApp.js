import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () =>{        
    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories = { setCategories }/>
            <ol>
                {
                    categories.map( category =>
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    )
                }
            </ol>
        </div>
    )
}
