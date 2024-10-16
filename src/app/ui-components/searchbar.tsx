import React, { FC } from 'react';

interface SearchbarProps {
  
}

const Searchbar: FC<SearchbarProps> = ({ }) => {
  return (
    <div className='border border-gray-100 shadow rounded m-5 '>
        <input placeholder='Busque por nombre, temática, etiqueta...'/>
        
    </div>
  );
};

export default Searchbar;