function bfs(grafo, inicio) {
    var fila = [inicio];
    const visitados = new Set();
    const resultado = [];

    while(Object.keys(grafo).length != visitados.size) {
        const subgrafo = [];

        if(!(fila.length)) {
            for(vertice in grafo) {
                if(!visitados.has(vertice)) {
                    fila = [vertice];
                    break;
                }
            }
        }

        while(fila.length) {
            const verticeAtual = fila.shift();
            
            if(!visitados.has(verticeAtual)) {
                visitados.add(verticeAtual);
                subgrafo.push(verticeAtual);

                for(const vizinho of grafo[verticeAtual]) {
                    fila.push(vizinho);
                }
            }
        }
        resultado.push(subgrafo)
    }
    return resultado;
}

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

console.log(bfs(grafo, 'A'))