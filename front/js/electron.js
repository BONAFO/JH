const { ipcRenderer, dialog } = require('electron');

// ipcRenderer.on('asynchronous-message', (event, arg) => {


// });



const save = () => {
    const savedata = [];
    const container = document.getElementById("cnt").querySelectorAll("[data-ctn]");
    Array.from(container).map(c => {
        savedata.push({
            img: Array.from(c.childNodes[1].childNodes).map(img => img.querySelector("img").src),
            inp: Array.from(c.childNodes[0].childNodes).map(inp => inp.value)
        })
    })



    ipcRenderer.send('save', { data: savedata, name: scriptName });

}

const load = (path) => {
    ipcRenderer.send("load", path)
}

const show_loaded_content = (data) => {
    data.map((c, i) => {
        create_dialog_box()
        const container = document.getElementById(`sb-${i}`).querySelector("[data-ctn]");

        c.inp.map(inp => {
            const input = document.createElement("textarea");
            input.type = "text";
            input.value = inp;
            container.childNodes[0].append(input);



        })

        c.img.map(img => {
            const img_container = create_img({ path: img });
            container.childNodes[1].append(img_container)

        })

    })
}

const start = () => {
    Swal.fire({
        title: "Welcome",
        text: "What do you want to do?",
        showCancelButton: true,
        confirmButtonText: "Load a Script",
        cancelButtonText: "Create a new Script",
        customClass: {
            popup: "cu-pop"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const input = document.createElement("input");
            input.type = "file";
            input.style.display = "none";
            input.accept = ".json";
            input.click()
            input.onchange = (e) => {
                const files = e.target.files;
                // sessionStorage.setItem('file', files[0].path)
                ipcRenderer.send("load", files[0].path)

            }

        } else if (result.isDismissed) {
            change_name()
        }
    });

}

const change_name = () => {
    Swal.fire({
        title: "Welcome",
        text: "Starting a new project",
        input: "text",
        inputPlaceholder: "Script Name",
        showCancelButton: true,
        confirmButtonText: "Create!",
        cancelButtonText: "Back",
        customClass: {
            popup: "cu-pop"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            scriptName = result.value;
            sessionStorage.setItem("sn", scriptName)
            newone = true
            save()
            let crono = 0;

            let int = setInterval(() => {
                console.log("ESPERANDO");

                if (sessionStorage.getItem("files")) {
                    clearInterval(int)
                    load(sessionStorage.getItem("files"))
                }

                crono += 300
                if (crono >= timeout) {
                    clearInterval(int)
                    show_toast("Error loading the file- Timeout", {
                        style: {
                            "background-color": 'rgb(250, 118, 118)'
                        }
                    })

                }
            }, 300);;
        } else if (result.isDismissed) {
            start()
        }
    });
}



ipcRenderer.on("bc-save", () => {
    save()
})

ipcRenderer.on('resp-save', (e, data) => {
    show_toast(data.msj, {
        style: {
            "background-color": (data.bool) ? ('rgb(186, 255, 161)') : ('rgb(250, 118, 118)')
        }
    })

    if (data.bool) {
        sessionStorage.setItem("files", data.url)
    }
});

ipcRenderer.on('resp-load', (e, data) => {
    show_toast(data.msj + " " + data.scriptName, {
        style: {
            "background-color": (data.bool) ? ('rgb(186, 255, 161)') : ('rgb(250, 118, 118)')
        }
    })
    scriptName = data.scriptName;
    show_loaded_content(data.data)


});