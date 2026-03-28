const endereco = {
    // logradouro (rua/avenida), número, complemento (apto/bloco), bairro, cidade, estado e CEP.
    logradouro: "Avenida henry ford",
    numero:511,
    complemento: "parque da mooca",
    cidade: "sao paulo",
    estado: "SP",
    cep: "03109-001",
    pais: "Brasil"
}
const anuncio = {
    titulo: "Cascada",
    feitopor: "rebo",
    quando: ["quarta 3 de junho", 22, 6],
    local: "komplexo tempo",
    endereco,
    tickets:{
        tituloTicket: "promo 4",
        descricao: "",
        precoReais: 130,
        quantidade: 0 
    },
    temInteresse: false,
    interesados:[710],
    posterPromocional: "link"
}

const tickets = [
    {
        tituloTicket: "promo 4",
        descricao: "",
        precoReais: 130,
        quantidade: 0 
    },
        {
        tituloTicket: "promo 4",
        descricao: "",
        precoReais: 150,
        quantidade: 0 
    },
        {
        tituloTicket: "promo 4",
        descricao: "lorem la é isso dai mesmo",
        precoReais: 240,
        quantidade: 0 
    }
]

function menorCupom(tickets) {
    let menor = tickets[0]; 
    tickets.forEach(ticket => {
        if (ticket < menor) {
            menor = ticket; 
        }
    });
    return menor;
}
