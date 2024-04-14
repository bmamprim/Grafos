export function LayoutDfs({ dfs }) {
    return (
       dfs.map((resultado) => (
        <p>{resultado.join('   -   ')}</p>
       ))
    )
}