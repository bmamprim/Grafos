function criaListaAdjacencia(direcionado, listaVertices, listaArestas) {
    const grafo = {};
    
    for(vertice in listaVertices) {
        grafo[vertice]['listaAdjacencia'] = []; 
        grafo[vertice]['preVisit'] = 0;
        grafo[vertice]['posVisit'] = 0;
    }
    
    if(direcionado) {
        for(aresta in listaArestas){
            grafo[aresta[0]]['listaAdjacencia'].add(aresta[1]);
        }
    } else {
        for(aresta in listaArestas){
            grafo[aresta[0]]['listaAdjacencia'].add(aresta[1]);
            grafo[aresta[1]]['listaAdjacencia'].add(aresta[0]);
        }
    }

    return grafo;
}

function bfs(grafo, inicio) {
    var fila = [inicio];
    const visitados = new Set();
    const resultado = [];

    while(Object.keys(grafo).length != visitados.size) {
        const subgrafo = [];

        if(!(fila.length)) {
            for(const vertice in grafo) {
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

function aux_dfs(grafo, vertice, contador, pilha, visitados, subgrafo) {
    while(pilha.length) {
        vertice = pilha.pop();

        if(!visitados.has(vertice)) {
            contador += 1;
            grafo[vertice]['preVisit'] = contador;    
            visitados.add(vertice);
            subgrafo.push(vertice);

            for(const vizinho of grafo[vertice]['listaAdjacencia']) {
                pilha.push(vizinho);
                contador = aux_dfs(grafo, vizinho, contador, pilha, visitados, subgrafo);
            }

            contador += 1;
            grafo[vertice]['posVisit'] = contador;

        }
    }
    
    return contador
}

function fluxo_dfs(grafo, inicio) {
    var contador = 0;
    var pilha = [inicio];
    const visitados = new Set();
    const resultado = [];

    while(Object.keys(grafo).length != visitados.size) {
        const subgrafo = [];

        if(!(pilha.length)) {
            for(vertice in grafo) {
                if(!visitados.has(vertice)) {
                    pilha = [vertice];
                    inicio = vertice;
                    break;
                }
            }
        }

        contador = aux_dfs(grafo, inicio, contador, pilha, visitados, subgrafo);

        resultado.push(subgrafo);
    }
    
    for(vertice in grafo) {
        console.log("vertice: " + vertice + " - pre visit: " + grafo[vertice]['preVisit'] + " | pos visit: " + grafo[vertice]['posVisit']);
    }

    return resultado;
}


const grafo = {
    A: {listaAdjacencia: ['B', 'E'], preVisit: 0, posVisit: 0},
    B: {listaAdjacencia: ['A', 'C', 'E'], preVisit: 0, posVisit: 0},
    C: {listaAdjacencia: ['B', 'F'], preVisit: 0, posVisit: 0},
    D: {listaAdjacencia: ['G', 'H'], preVisit: 0, posVisit: 0},
    E: {listaAdjacencia: ['A', 'B', 'F'], preVisit: 0, posVisit: 0},
    F: {listaAdjacencia: ['C', 'E', 'I'], preVisit: 0, posVisit: 0},
    G: {listaAdjacencia: ['D', 'H'], preVisit: 0, posVisit: 0},
    H: {listaAdjacencia: ['D', 'G'], preVisit: 0, posVisit: 0},
    I: {listaAdjacencia: ['F'], preVisit: 0, posVisit: 0}
};

console.log(fluxo_dfs(grafo, 'A'));