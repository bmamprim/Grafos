export function criaListaAdjacencia(direcionado, listaVertices, listaArestas) {
    let grafo = {};
    
    for(let vertice in listaVertices) {
        grafo[listaVertices[vertice]] = {
            listaAdjacencia: [],
            preVisit: 0,
            posVisit: 0
        }
        // cria os vertices como keys do dicionario e cria as keys de cada vertice
    }
    
    for(const aresta in listaArestas){
        grafo[listaArestas[aresta][0]]['listaAdjacencia'].push(listaArestas[aresta][1]);
        // se a flag de grafo direcionado for verdadeira, só insere a aresta no vertice "inicial"
        if (!direcionado) {
            grafo[listaArestas[aresta][1]]['listaAdjacencia'].push(listaArestas[aresta][0]);
        }
    }

    return grafo;
}

export function bfs(grafo, inicio) {
    var fila = [inicio];
    const visitados = new Set();
    const resultado = [];

    // inicializa nossas variaveis importantes para o funcionamento; visitados é criado como set pois é impossível um vertice visitado perder essa caracteristica

    while(Object.keys(grafo).length != visitados.size) {
        // loop criado para resolver o problema dos sub grafos desconexos; verifica se visitados tem o mesmo tamanho do dicionario, ou seja, uma verificação se todos os vertices foram contemplados
        const subgrafo = [];

        if(!(fila.length)) {
            // se fila está vazia (normalmente após rodar o primeiro grafo), verifica se ainda falta algum vertice a ser visitado
            for(const vertice in grafo) {
                if(!visitados.has(vertice)) {
                    fila = [vertice];
                    break;
                    // se achar um vertice no grafo que não está em visitados, este se torna o primeiro elemento da fila para rodar o algoritmo novamente
                }
            }
        }

        while(fila.length) {
            // enquanto fila não estiver vazia, o programa roda o algoritmo
            const verticeAtual = fila.shift();
            // shift retira o primeiro elemento da lista; comportamento de fila

            if(!visitados.has(verticeAtual)) {
                // seguindo a ordem da fila, verifica se o vertice ja nao esta na lista de visitados
                visitados.add(verticeAtual);
                subgrafo.push(verticeAtual);

                for(const vizinho of grafo[verticeAtual]['listaAdjacencia']) {
                    fila.push(vizinho);
                    // adiciona na fila os vertices vizinhos ao vertice atual da fila
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
        // retira o ultimo elemento da lista; comportamento de pilha

        if(!visitados.has(vertice)) {
            // vai adicionar 1 no contador e definir como pre visit
            contador += 1;
            grafo[vertice]['preVisit'] = contador;    
            visitados.add(vertice);
            subgrafo.push(vertice);

            for(const vizinho of grafo[vertice]['listaAdjacencia']) {
                pilha.push(vizinho);
                contador = aux_dfs(grafo, vizinho, contador, pilha, visitados, subgrafo);
                // funcao recursiva para funcionamento do dfs; contador é retornado na função para seguir a ordem do pre/pos visit
            }

            contador += 1;
            grafo[vertice]['posVisit'] = contador;

        }
    }
    
    return contador
}

export function fluxo_dfs(grafo, inicio) {
    var contador = 0;
    var pilha = [inicio];
    const visitados = new Set();
    const resultado = [];

    while(Object.keys(grafo).length != visitados.size) {
        const subgrafo = [];

        if(!(pilha.length)) {
            for(const vertice in grafo) {
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

    return resultado;
}

