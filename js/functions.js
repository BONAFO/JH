const { writeFileSync, readFileSync } = require("original-fs")

const save = (data) => {

    try {
        writeFileSync(`./scripts/` + data.name + ".json", JSON.stringify(data.data))
        return { bool: true, msj: "Saved!", url: `./scripts/` + data.name + ".json" }

    } catch (error) {
        return { bool: false, msj: error }
    }
}

const load = (url) => {

    try {
        const data = JSON.parse(readFileSync(url).toString())
        return { bool: true, msj: "Loaded!", data: data, scriptName: url.substring(url.lastIndexOf('\\') + 1, url.lastIndexOf('.json')) }


    } catch (error) {
        return { bool: false, msj: error }
    }
}



module.exports = {
    save,
    load

}