import './Home.css';
import { InputGrafo } from '../InputGrafo/InputGrafo';

export function Home() {

    return (
       <div className='div-home'>
            <div className='row'>
                <p>SELECIONE O TIPO DO GRAFO:</p>
            </div>
            <div className='row'>
                <button>NÃO DIRECIONADO</button>
                <button>DIRECIONADO</button>
            </div>

            <InputGrafo />
       </div>
    );
}