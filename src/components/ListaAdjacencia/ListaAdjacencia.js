import './ListaAdjacencia.css';
export function ListaAdjacencia({ lista }) {
    return (
        <div>
            {Object.keys(lista).map(chave => (
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} key={chave}>
                    <div className="circleLista">
                        <p>{chave}</p>
                    </div>
                    <p>- { lista[chave]['listaAdjacencia'].join(' - ') }</p>
                </div>
            ))}
        </div>
    );
}