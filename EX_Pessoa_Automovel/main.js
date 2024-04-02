class Main {
    constructor() {
        this.pessoas = [];
    }

    addPessoa(pessoa) {
        this.pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {
        const pessoa = this.getPessoaByCodigo(codPessoa);
        if (pessoa) {
            const automovel = new Automovel(codAuto, marca, modelo)
            pessoa.inserirAutomovel(automovel)
        }
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        const pessoaOrigem = this.getPessoaByCodigo(codPessoaOrigem);
        const pessoaDestino = this.getPessoaByCodigo(codPessoaDestino);
        if (pessoaOrigem && pessoaDestino) {
            const automovel = pessoaOrigem.getAutomovel(codAutomovel);
            if (automovel) {
                pessoaOrigem.removerAutomovelByCod(codAutomovel);
                pessoaDestino.inserirAutomovel(automovel);
                console.log(`Automóvel transferido com sucesso de ${pessoaOrigem.nome} para ${pessoaDestino.nome}.`);
            } else {
                console.log(`Automóvel com código ${codAutomovel} não encontrado para transferência.`);
            }
        } else {
            console.log(`Pessoa(s) com código(s) ${codPessoaOrigem} e/ou ${codPessoaDestino} não encontrada(s).`);
        }
    }

    mostrarTodasAsPessoas() {
        this.pessoas.forEach(pessoa => {
            console.log(pessoa.imprimirCompleto())
        })
    }
    getPessoaByCodigo(codigo) {
        return this.pessoas.find(pessoa => pessoa.getCodigo() === codigo)
    }
}



const main = new Main();
main.addPessoa(new Pessoa(1, "João"));
main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
main.mostrarTodasAsPessoas();
main.addPessoa(new Pessoa(2, "Maria"));
main.transfereAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();
