# Estrtuturas de dados

# Observações e termos

Esse documento usa uma pseudolinguagem orientada a objetos. Conhecimento prévio de OOP é
desejável, mas não obrigatório para entender esse documento.

**Classe:** Modelo que reúne dados e as ações que podem ser realizadas sobre esses dados.
Assemelha-se a `structs` do C mas pode conter métodos (funções associadas ao objeto) e herdar
comportamento complexo de outras classes ou interfaces.

**Interface:** Uma pseudo-estrutura de dados que define um contrato. Classes podem
herdar interfaces e isso as obriga a seguir esse contrato e se comportar como a interface.

# Lista

Uma lista é um conceito abstrato que representa uma coleção ordenada de elementos.
Ela define operações como inserir, remover e buscar elementos, sem especificar
como esses elementos são armazenados na memória.

Listas geralmente permitem um armazenamento indefinido de itens, diferente de arrays
estáticas.

```js
// Exemplo minimo da interface de uma lista
interface IList<T> {
    // Inserir:
    //      Incrementa um elemento `value` na posição `index`.
    //      O comprimento da lista é incrementado em 1.
    void insert(T value, int index);
    // Remover:
    //      Remove um elemento da lista na poisção `index`.
    //      O comprimento da lista é decrementado em 1.
    void remove(int index);
    // Buscar:
    //      Retorna o valor do elemento na posição `index`.
    T get(int index);
}
```

Por ser um conceito abstrato, é comum que listas sejam implementadas de diversas maneiras.
As 3 maneiras mais comuns de se implementar uma lista são:

## Fixed buffer List

Fixed buffer lists (listas de buffer fixo) são listas que usam arrays pre-alocados na memória
para armazenar os seus itens. Diferente dos outros casos, essa implementação não permite o
armazenamento indefinido de itens, sendo limitado a uma largura máxima predeterminada.

```ts
// Essa constante define a capacidade máxima do buffer
const max_capacity: int = 128;

// Implementação de um fixed buffer list
class FixedBufferList implements IList<T> {

    buffer : Array<T>; // Campo que armazenará a memória do buffer
    length : int;      // Campo que armazenará a largura da lista

    // O construtor roda altomaticamente quando o objeto passa
    // a existir na memória
    constructor() {
        buffer = memory.allocate<T>(max_capacity);
        length = 0;
    }

    // Inserir:
    //      Inserção *ordenada* em vetor tem complexidade O(n)
    void insert(T value, int index) {
        if (index < 0) return Error("Índice está fora dos limites!");
        if (length == max_capacity) return Error("Sem mais memória disponível!");
        
        // Itera por todos os elementos a direita do indice removido,
        // da direita pra esquerda
        for (i = length; i <= indice; i--) {
            // Move o elemento [i] 1 índice pra direita
            buffer[i] = buffer[i-1];
        }

        buffer[length] = value;
        length ++;
    }

    // Remover:
    //      Remoção em vetor tem complexidade O(1)
    void remove(int index) {
        if (index < 0 || index >= length) return Error("Índice está fora dos limites!");

        // Itera por todos os elementos a direita do índice removido
        for (int i = index+1; i < largura; i++)
        {
            // posição anterior é igual a posição atual
            lista[i-1] = lista[i];
        }
    }

    // Buscar:
    //      Busca em vetor tem complexidade O(1)
    T get(int index) {
        if (index < 0 || index >= length) return Error("Índice está fora dos limites!");
        return buffer[index];
    }
}
```

## Dynamic Array List

Dynamic Array Lists (listas de vetores dinâmicos) são listas que usam arrays dinamicamente
alocadas na memória heap.

```ts
// Implementação de um dynamic array list
class DynamicArrayList implements IList<T> {

    buffer : Array<T>;   // Buffer onde os elementos são armazenados
    capacity : int;      // Capacidade atual do buffer
    length : int;        // Quantidade de elementos da lista

    constructor() {
        capacity = 8;
        buffer = memory.allocate<T>(capacity);
        length = 0;
    }

    // Expande a capacidade do buffer
    void resize() {

        // Dobra a capacidade
        capacity = capacity * 2;

        // Aloca um novo buffer
        newBuffer = memory.allocate<T>(capacity);

        // Copia todos os elementos
        for (int i = 0; i < length; i++) {
            newBuffer[i] = buffer[i];
        }

        // Libera o buffer antigo
        memory.free(buffer);

        // Passa a utilizar o novo buffer
        buffer = newBuffer;
    }

    // Inserção ordenada
    void insert(T value, int index) {

        if (index < 0 || index > length)
            return Error("Índice está fora dos limites!");

        // Se o buffer estiver cheio, aumenta seu tamanho
        if (length == capacity)
            resize();

        // Move os elementos para a direita
        for (int i = length; i > index; i--) {
            buffer[i] = buffer[i-1];
        }

        buffer[index] = value;

        length++;
    }

    // Remove um elemento
    void remove(int index) {

        if (index < 0 || index >= length)
            return Error("Índice está fora dos limites!");

        // Move todos os elementos para a esquerda
        for (int i = index; i < length-1; i++) {
            buffer[i] = buffer[i+1];
        }

        length--;
    }

    // Obtém um elemento
    T get(int index) {

        if (index < 0 || index >= length)
            return Error("Índice está fora dos limites!");

        return buffer[index];
    }
}
```