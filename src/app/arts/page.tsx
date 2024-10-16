import React, { FC } from 'react';
import UnloggedNav from '../ui-components/navs/unlogged-nav';

interface ArtsProps {
  
}

const Arts: FC<ArtsProps> = ({ }) => {
  return (
    <div className='min-h-screen p-12'>
        <UnloggedNav/>
        <p>Listado de artículos en orden cronológico</p>
    </div>
  );
};

export default Arts;