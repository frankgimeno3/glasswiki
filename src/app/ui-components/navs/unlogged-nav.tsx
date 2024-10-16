import React, { FC } from 'react';

interface UnloggedNavProps {

}

const UnloggedNav: FC<UnloggedNavProps> = ({ }) => {
    return (
        <div className='flex flex-row justify-between px-12'>
            <div className='flex flex-row'>
                <p>Menu</p>
                <div className='flex flex-row'>
                    <p>Logo</p>
                    <div className='flex flex-col'>
                        <p>GLASSWIKI</p>
                        <p>La enciclopedia del sector del vidrio</p>
                    </div>
                </div>
                <div>
                    <p>Buscador</p>
                    <button>Buscar</button>
                </div>
            </div>
            <div> 
            <button>Iniciar Sesión</button>
            <button>Registro</button>
            <button>Crear una página</button>
            </div>
        </div>
    );
};

export default UnloggedNav;