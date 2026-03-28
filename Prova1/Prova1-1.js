//aqui esta as categorias dos filtros
const ordenar = []
const entregaGratis = []
const valeRefeicao = []
const distancia = []
const entregaParceira = []
const superRestaurantes = []
const filtros = []
//aqui decidi por outras categorias, talves possam ser vistas em ordenar ou filtro, mas para melhor modelagem de cupom vou deixar separadas pelo comentario
const clube = []
const valePresente = [] 
// uma ideia de como seria a parte de limpar
function limpar(opcoesFiltro){
    opcoesFiltro.lenght = 0
}
const cupom = [
    {
        porPorcentagem:false,
        porcentagem: 0,
        porValor: true,
        valorDescontoReais: 20,
        tipoDeDesconto: [valeRefeicao],
    }
]
const lojas =[
    {
        logoRestaurante: "link",
        nomeRestaurante: "nome do restaurante",
        temSuperRestaurante: false,
        nota: 5.0,
        categoria: "Marmitex",
        distanciaKM: 3.5 ,
        tempoEsperaMinMinutos: 30,
        tempoEsperaMaxMinutos: 60,
        temFretegratis: false,
        valorFreteReais: 12.40,
        temCupom: true,
        cupom: [{porPorcentagem:true,porcentagem: 10, tipoDeDesconto:[clube]}]
    },
        {
        logoRestaurante: "link",
        nomeRestaurante: "Supa",
        temSuperRestaurante: true,
        nota: 3.6,
        categoria: "Marmitex",
        distanciaKM: 3.5 ,
        tempoEsperaMinMinutos: 30,
        tempoEsperaMaxMinutos: 60,
        temFretegratis: false,
        valorFreteReais: 10.40,
        temCupom: true,
        cupom: [{porPorcentagem:true,porcentagem: 10, tipoDeDesconto:[clube]}]

    },
        {
        logoRestaurante: "link",
        nomeRestaurante: "entraSim",
        temSuperRestaurante: false,
        nota: 3.0,
        categoria: "Marmitex",
        distanciaKM: 3.5 ,
        tempoEsperaMinMinutos: 50,
        tempoEsperaMaxMinutos: 60,
        temFretegratis: true,
        valorFreteReais: 12.40,
        temCupom: true,
        cupom: [{porPorcentagem:true,porcentagem: 10, tipoDeDesconto:[clube]}]

    }
]
const porEntregasGratis = lojas.filter(loja => loja.temFretegratis == true)
const porSuperRestaurante = lojas.filter(loja => loja.temSuperRestaurante == true)
const porTempoMin = lojas.filter(loja => loja.tempoEsperaMinMinutos <= 30)

function promoMap(lojas){
    return lojas
    .filter(loja => loja.nota >= 4)
    .map(loja => {
    return loja.valorFreteReais - 5
    });
}
    
