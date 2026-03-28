const tweets = [
    {
        "id": 1,
        "conta": {
            "usuario": "matias_dev",
            "nome": "Matias",
            "verificado": false,
            "seguidores": 320,
            "seguindo": 180
        },
        "conteudo": "Começando o dia com café e código ☕💻",
        "likes": 120,
        "retweets": 15,
        "respostas": 8,
        "hashtags": ["#dev", "#morning"],
        "data": "2026-03-25"
    },
    {
        "id": 2,
        "conta": {
            "usuario": "tech_guru",
            "nome": "Ana Silva",
            "verificado": true,
            "seguidores": 12000,
            "seguindo": 300
        },
        "conteudo": "JavaScript ou TypeScript? Eis a questão 🤔",
        "likes": 340,
        "retweets": 80,
        "respostas": 45,
        "hashtags": ["#javascript", "#typescript"],
        "data": "2026-03-24"
    },
    {
        "id": 3,
        "conta": {
            "usuario": "fit_life",
            "nome": "Carlos",
            "verificado": false,
            "seguidores": 800,
            "seguindo": 500
        },
        "conteudo": "Treino pago, energia lá em cima 🔥",
        "likes": 90,
        "retweets": 10,
        "respostas": 5,
        "hashtags": ["#fitness"],
        "data": "2026-03-26"
    },
    {
        "id": 4,
        "conta": {
            "usuario": "news_br",
            "nome": "Portal BR",
            "verificado": true,
            "seguidores": 50000,
            "seguindo": 100
        },
        "conteudo": "Últimas notícias sobre tecnologia no Brasil",
        "likes": 500,
        "retweets": 200,
        "respostas": 120,
        "hashtags": ["#noticias", "#tech"],
        "data": "2026-03-23"
    },
    {
        "id": 5,
        "conta": {
            "usuario": "vegan_style",
            "nome": "Julia",
            "verificado": false,
            "seguidores": 2300,
            "seguindo": 400
        },
        "conteudo": "Receita vegana incrível que testei hoje 🌱",
        "likes": 210,
        "retweets": 40,
        "respostas": 18,
        "hashtags": ["#vegano", "#food"],
        "data": "2026-03-25"
    },
    {
        "id": 6,
        "conta": {
            "usuario": "crypto_world",
            "nome": "Pedro",
            "verificado": true,
            "seguidores": 20000,
            "seguindo": 150
        },
        "conteudo": "Bitcoin subindo de novo 🚀",
        "likes": 800,
        "retweets": 300,
        "respostas": 150,
        "hashtags": ["#crypto", "#bitcoin"],
        "data": "2026-03-22"
    },
    {
        "id": 7,
        "conta": {
            "usuario": "matias_dev",
            "nome": "Matias",
            "verificado": false,
            "seguidores": 320,
            "seguindo": 180
        },
        "conteudo": "Refatorar código é terapêutico 😌",
        "likes": 60,
        "retweets": 5,
        "respostas": 2,
        "hashtags": ["#dev"],
        "data": "2026-03-26"
    },
    {
        "id": 8,
        "conta": {
            "usuario": "foodie_sp",
            "nome": "Rafa",
            "verificado": false,
            "seguidores": 1500,
            "seguindo": 600
        },
        "conteudo": "Melhor yakisoba que já comi 🍜",
        "likes": 150,
        "retweets": 20,
        "respostas": 10,
        "hashtags": ["#food"],
        "data": "2026-03-25"
    }
];

function perfilVef() {
    const listaVef = []
    tweets.forEach((tweet) => {
        if (tweet.conta.verificado == true) {
            listaVef.push(tweet)
        }
    });
    return listaVef
}
function HVega() {
    const listaVeg = []
    tweets.forEach((tweet) => {
        if (tweet.hashtags.forEach(hash => {
            if (hash === "#vegano")
                listaVeg.push(tweet)
        }));
    });
    return listaVeg
}
function maisLikes() {
    const listaLike = []
    tweets.forEach((tweet) => {
        if (tweet.likes > 100) {
            listaLike.push(tweet)
        }
    });
    return listaLike
}
function userMaisLike(tweets) {
    let maior = tweets[0]; 
    tweets.forEach(tweet => {
        if (tweet.likes > maior.likes) {
            maior = tweet; 
        }
    });
    return maior;
}

console.log(userMaisLike(tweets))