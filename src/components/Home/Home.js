import './Home.css';
import { InputGrafo } from '../InputGrafo/InputGrafo';
import { React, useState } from 'react';

export function Home() {
    const [tipo, setTipo] = useState(1);

    return (
       <div className='div-home'>
            <div className='row-home'>
                <p>SELECIONE O TIPO DO GRAFO:</p>
            </div>
            <div className='row-home'>
                <button className='switch' onClick={() => setTipo(1)}>NÃO DIRECIONADO</button>
                <button className='switch' onClick={() => setTipo(2)}>DIRECIONADO</button>
            </div>

            <InputGrafo direcionado={tipo === 1 ? false : true} />
       </div>
    );
}