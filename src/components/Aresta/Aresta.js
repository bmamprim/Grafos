import './Aresta.css';

export function Aresta({ v1, v2 }) {
    return <>
        <div className="circle1">
            <p>{ v1 }</p>
        </div>
        {
            !(v2 === undefined || v2 === '') &&
            <>
            <hr />
            <div className="circle2">
                <p>{ v2 }</p>
            </div>
            </>
        }
    </>
}