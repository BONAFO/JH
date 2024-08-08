const { writeFileSync, readFileSync, renameSync } = require("original-fs")

const base = "./scripts/";

const save = (data) => {

    try {
        writeFileSync(base + data.name + ".json", JSON.stringify(data.data))
        return { bool: true, msj: "Saved!", url: base + data.name + ".json" }

    } catch (error) {
        return { bool: false, msj: error }
    }
}

const load = (url) => {
    console.log(url);

    try {
        const data = JSON.parse(readFileSync(url).toString())
        return { bool: true, msj: "Loaded!", data: data, scriptName: url.substring(url.lastIndexOf('\\') + 1, url.lastIndexOf('.json')) }


    } catch (error) {
        return { bool: false, msj: error }
    }
}

const renameSC = (data) => {


    try {
        renameSync(base + data.old + ".json", base + data.new + ".json")
        return { bool: true, msj: " Changed to ", scriptName: data.new }


    } catch (error) {
        return { bool: false, msj: error }
    }
};

module.exports = {
    save,
    load,
    renameSC,

}