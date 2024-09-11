const axios = require("axios")

const cep_endereco = (req, res, next) => {
    if(
        req.body.cep != undefined &&
        req.body.cep.length == 8 &&
        !isNaN(Number(req.body.cep))
    ) {
        axios
            .get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
            .then((resposta) => {
                req.body.endereco = resposta.data
                const {logradouro, bairro, localidade, uf} = resposta.data
                req.body.endereco = {logradouro, bairro, localidade, uf}

                delete  req.body.cep

                next()
            })

    } else {
        res.status(400).json()
    }

}

module.exports = cep_endereco