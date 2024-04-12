import { bfs } from "../lib/bfs";

export function Home() {
    const grafo = {
        A: ['B', 'E'],
        B: ['A', 'C', 'E'],
        C: ['B', 'F'],
        D: ['G', 'H'],
        E: ['A', 'B', 'F'],
        F: ['C', 'E', 'I'],
        G: ['D', 'H'],
        H: ['D', 'G'],
        I: ['F']
    }

    const resultado = bfs(grafo, 'A').join();

    return (
        <p>resultado: { resultado }</p>
    );
}