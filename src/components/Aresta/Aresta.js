import './Aresta.css';

export function Aresta({ vertices }) {
    return <>
    { 
        vertices.map((v, index) => (
            <>
            {
                index === 1 &&
                <hr />
            }
            <div className="circle">
                <p>{ v }</p>
            </div>
            </>
        ))
    }
    </>
}