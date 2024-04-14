export function LayoutBfs({ bfs }) {
    console.log(bfs);
    return (
       bfs.map((resultado) => (
        <p>{resultado.join('   -   ')}</p>
       ))
    )
}