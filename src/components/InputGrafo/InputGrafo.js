import './InputGrafo.css';
import { React, useEffect, useState } from 'react';
import { Laco } from '../Laço/Laco';
import { Aresta } from '../Aresta/Aresta';

export function InputGrafo() {
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const [arestas, setArestas] = useState([])
    const [aresta, setAresta] = useState([])

    useEffect(() => {
        setAresta([v1, v2]);
    }, [v1, v2])

    function addAresta() {
        setArestas([...arestas, [v1, v2]]);
    }

    return (
        <div style={{ display: 'flex', flexDirection:'column', marginTop: '2rem', alignItems: 'center'}}>
            <div>
                <input onChange={(e) => setV1(String(e.target.value))}/>
                <input onChange={(e) => setV2(String(e.target.value))}/>
                <button onClick={() => addAresta()}>Add Aresta</button>
            </div>
            <div style={{ display: 'flex', flexDirection:'row', marginTop: '2rem'}}>
                <Aresta vertices={aresta} />
            </div>
            <Laco vertice={aresta[0]} />
        </div>
    )
}