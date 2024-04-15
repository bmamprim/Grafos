import './InputGrafo.css';
import { React, useState } from 'react';
import { Laco } from '../Laço/Laco';
import { Aresta } from '../Aresta/Aresta';
import { criaListaAdjacencia, bfs, fluxo_dfs } from '../../lib/principal';
import { ListaAdjacencia } from '../ListaAdjacencia/ListaAdjacencia';
import { LayoutBfs } from '../BFS/bfs';
import { LayoutDfs } from '../DFS/dfs';

export function InputGrafo({direcionado}) {
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const [arestas, setArestas] = useState([])
    const [vertices, setVertices] = useState(new Set());
    const [listaAdj, setListaAdj] = useState({});
    const [inicio, setInicio] = useState('1');
    const [resultadoBfs, setResultadoBfs] = useState([])
    const [resultadoDfs, setResultadoDfs] = useState([])

    function addArestas() {
        if(!(v2 === undefined || v2 === '')) {
            setArestas([...arestas, [v1, v2]]);
            setVertices(new Set([...vertices, v1, v2]));
        } else {
            setVertices(new Set([...vertices, v1]));
        }
        setV1('');
        setV2('');
    }

    function clear() {
        setV1('');
        setV2('');
        setArestas([]);
        setVertices(new Set());
        setListaAdj({});
        setResultadoBfs([]);
        setResultadoDfs([]);
    }

    return (
        <div style={{ display: 'flex', flexDirection:'column', marginTop: '2rem', alignItems: 'center'}}>
            <div className='row'>
                <div className='col'>
                    <div className='row-input'>
                        <div className='col'>
                            <input placeholder='V1' className='input' value={v1} onChange={(e) => setV1(String(e.target.value))}/>
                            <input placeholder='V2' className='input' value={v2} onChange={(e) => setV2(String(e.target.value))}/>
                        </div>
                        <button className='add' onClick={() => {
                            addArestas();
                            setListaAdj(criaListaAdjacencia(false, [...vertices], arestas));
                        }}>+</button>
                    </div>
                    <button className='btnLista' onClick={() => { setListaAdj(criaListaAdjacencia(false, [...vertices], arestas)) }}>LISTA ADJACENCIA</button>
                    <button className='btnClear' onClick={() => clear()}>LIMPAR GRAFO</button>
                    
                </div>
                <div className='col'>
                {
                    v1 === v2 && !(v2 === '' || v2 === undefined) ? 
                    <Laco vertice={v1} /> : 
                    <div style={{ display: 'flex', flexDirection:'row', marginTop: '2rem'}}>
                        <Aresta v1={v1} v2={v2}/>
                    </div>
                }
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p style={{ fontWeight: 'bold' }}>LISTA ADJACENCIA:</p>
                    <ListaAdjacencia lista={listaAdj} />
                </div>
                <div className='col'>
                    <p>A: [{ arestas.join('; ') }]</p>
                    <p>N: [{[...vertices].join(', ')}]</p>
                </div>
            </div>

            <div className='row'>
                <label>Inicio</label>
                <input placeholder='Inicio' className='input' value={inicio} onChange={(e) => setInicio(String(e.target.value))}/>
            </div>
        
            <div className='row-bfs-dfs'>
                <div className='col'>
                    <button className='btnBfs' onClick={() => setResultadoBfs(bfs(listaAdj, inicio))}>BFS</button>
                    <LayoutBfs bfs={resultadoBfs} />
                </div>
                <div className='col'>
                    <button className='btnDfs' onClick={() => setResultadoDfs(fluxo_dfs(listaAdj, inicio))}>DFS</button>
                    <LayoutDfs lista={listaAdj}  dfs={resultadoDfs} />
                </div>
            </div>
        </div>
    )
}