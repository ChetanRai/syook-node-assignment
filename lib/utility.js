var uuid = require("uuidv4")

const genKey = () => uuid.uuid().replace(/-/g,"").toUpperCase()

module.exports = {
    genKey
}