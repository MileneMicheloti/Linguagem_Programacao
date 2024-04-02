class Automovel {
    constructor(codigo, marca, modelo) {
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
    }

    get codigo() {
        return this._codigo;
    }

    imprimir() {
        return `Código: ${this.codigo}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class Pessoa {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.automoveis = [];
    }

    getCodigo() {
        return this._codigo;
    }

    inserirAutomovel(automovel) {
        this.automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo) {
        this.automoveis = this.automoveis.filter(auto => auto.codigo !== codigo);
    }

    getAutomovel(codigo) {
        return this.automoveis.find(auto => auto.codigo === codigo);
    }

    imprimir() {
        return `Código: ${this.codigo}, Nome: ${this.nome}`;
    }

    imprimirCompleto() {
        let result = this.imprimir() + "\nAutomóveis:\n";
        for (let auto of this.automoveis) {
            result += auto.imprimir() + "\n";
        }
        return result;
    }
}
