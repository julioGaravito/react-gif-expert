import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertAPP = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) =>{

        if( categories.includes(newCategory)) return;

        //console.log(newCategory);
        setCategories( [ newCategory ,...categories]);
        //setCategories( [...categories,'Hola Mundo']);
  }

  return (
    <>
        <h1>GifExpertAPP</h1>
        
        <AddCategory 
            onNewCategory={ onAddCategory }
        />

            {
                categories.map( (category) => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                ))
            }

    </>
  )
}
