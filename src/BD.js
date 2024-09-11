const mongo = require("mongoose");

const BD = "mongodb+srv://ghvaz:men1go23@cluster0.fshq8.mongodb.net/temMuitaCoisa"

async function main() {
    await mongo.connect(BD);
}

main().catch(DeuERRO => console.log(DeuERRO)).then(() => console.log("Conectado ao BD"))

module.exports = mongo