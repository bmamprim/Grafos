export function LayoutDfs({ dfs, lista }) {
    return (
        <div>
        {
        dfs.map((resultado) => (
            <p>{resultado.join('   -   ')}</p>
        ))
        }
        {
            Object.keys(lista).map(chave => (
                <p>previsit: { lista[chave]['preVisit'] } | posvisit: { lista[chave]['posVisit'] } </p>
            ))}
        </div>
    )
}