const model = require('../models/aeroporto.js')

module.exports = {
    store: (rq , rs) => {
        model.create(rq.body)
        rs.json()
    },

    index: async (rq,rs) => {
        const content = await  model.find().exec()
        rs.json(content)
    },

    show: async (rq, rs) => {
        const content = await model.findById(rq.params.id).exec()
        rs.json(content)
    },

    update:async  (rq, rs) => {
        await model.findByIdAndUpdate(rq.params.id, rq.body).exec()
        rs.json()
    },

    destroy:async  (rq, rs) => {
        await model.findByIdAndDelete(rq.params.id).exec()
        rs.json()
    }
}