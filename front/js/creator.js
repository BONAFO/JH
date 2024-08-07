{
    /* <div>
    <div class="separator"></div>
    <div class="drop-area" id="da-01">
        <button class="btn btn-closes">X</button>
        <div id="da-01-inp-cont"></div>
        <div class="div-ubicador">
            <button class="btn-ubicador btn btn-up">↑</button>
            <br>
            <button class="btn-ubicador btn btn-down">↓</button>
        </div>

    </div>
    <div class="separator"></div>

    </div>
    <br>
     */
}




const create_img = (files) => {
    const img = document.createElement("img");
    img.src = files.path;
    img.classList.add("w-100")

    const img_container = document.createElement("div");
    img_container.style.width = "200px";
    img_container.style.display = "inline-block";


    img_container.appendChild(img)
    img_container.id = `img-${imgindex}`;
    imgindex++;
    img_container.ondblclick = (e) => {
        delete_img(img_container.id);

    }

    return img_container
}



const delete_img = (id) => {
    Swal.fire({
        title: "Delete Image?",
        text: "Are you sure you want to delete this element?",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
            popup: "cu-pop"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById(id).remove()
        }
    });
}

let box_avariable = [];
const container = document.getElementById("cnt");
let counter = 0;
let imgindex = 0;


const create_dialog_box = () => {
    // create div
    const counter_indise = counter;
    const subcont = document.createElement("div");
    subcont.classList.add("subcont")
    subcont.id = `sb-${counter_indise}`;
    const div = document.createElement('div');
    div.classList.add('separator');

    // create drop area
    const dropArea = document.createElement('div');
    dropArea.classList.add('drop-area');
    dropArea.setAttribute('id', 'da-' + counter_indise);


    dropArea.ondragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    dropArea.ondrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files[0];
        if (files) {
            // const img = document.createElement("img");
            // img.src = files.path;
            // img.classList.add("w-100")

            // const img_container = document.createElement("div");
            // img_container.style.width = "20%";
            // img_container.style.display = "inline-block";

            // divImgsCnt.appendChild(img_container);
            // img_container.appendChild(img)
            // img_container.id = `img-${imgindex}`;
            // imgindex++;
            // img_container.ondblclick = (e) => {
            //     delete_img(img_container.id);

            // }
            const img_container = create_img(files);

            divImgsCnt.appendChild(img_container);
        }

    }



    dropArea.ondblclick = (e) => {

        e.preventDefault()

        if (e.target.id == dropArea.id) {
            const input = document.createElement("textarea");
            input.type = "text";
            divInputCnt.append(input);
        } else if (e.target.tagName == "TEXTAREA") {
            Swal.fire({
                title: "Delete Text?",
                text: "Are you sure you want to delete this element?",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                customClass: {
                    popup: "cu-pop"
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    e.target.remove()
                }
            });

        }
    }

    // create btn-closes
    const btnCloses = document.createElement('button');
    btnCloses.classList.add('btn', 'btn-closes');
    btnCloses.textContent = 'X';
    btnCloses.addEventListener('click', () => {
        Swal.fire({
            title: "Delete Dialog?",
            text: "Are you sure you want to delete this element?",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            customClass: {
                popup: "cu-pop"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                subcont.remove()
                box_avariable = box_avariable.filter(item => item != subcont.id);

            }
        });
    });


    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("data-ctn", "")

    const divImgsCnt = document.createElement("div");
    divImgsCnt.setAttribute('id', 'da-' + counter_indise + '-img-cont');
    const divInputCnt = document.createElement("div");
    divInputCnt.setAttribute('id', 'da-' + counter_indise + '-inp-cont');

    // create div-ubicador
    const divUbicador = document.createElement('div');
    divUbicador.classList.add('div-ubicador');

    // create btn-up
    const btnUp = document.createElement('button');
    btnUp.classList.add('btn-ubicador', 'btn', 'btn-up');
    btnUp.textContent = '↑';
    btnUp.addEventListener('click', () => {
        // TODO: Move up
        const actual_position = box_avariable.findIndex(id => id == subcont.id);
        if (actual_position - 1 != -1) {

            // const otherContent = document.getElementById(box_avariable[counter_indise - 1]).querySelector("[data-ctn]")

            const thisContent = { img: contentDiv.childNodes[1].cloneNode(true).childNodes, inp: contentDiv.childNodes[0].cloneNode(true).childNodes };
            const other = document.getElementById(box_avariable[counter_indise - 1]).querySelector("[data-ctn]");

            const otherContent = { img: other.childNodes[1].cloneNode(true).childNodes, inp: other.childNodes[0].cloneNode(true).childNodes };
            // LIMPIANDO CAJAS
            for (let i = 0; i < contentDiv.childNodes.length; i++) {
                const node = contentDiv.childNodes[i];
                const nodes = Array.from(node.childNodes);
                nodes.map(node => {
                    node.remove()
                })



            }
            // LIMPIANDO CAJAS
            for (let i = 0; i < other.childNodes.length; i++) {
                const node = other.childNodes[i];
                const nodes = Array.from(node.childNodes);
                nodes.map(node => {

                    node.remove()
                })
            }


            Array.from(otherContent.img).map((img) => {
                img.ondblclick = (e) => {
                    delete_img(img.id)

                }
                contentDiv.childNodes[1].append(img)


            });
            Array.from(otherContent.inp).map((inp) => {
                contentDiv.childNodes[0].append(inp)
            });

            Array.from(thisContent.img).map((img) => {
                img.ondblclick = (e) => {
                    delete_img(img.id)

                }
                other.childNodes[1].append(img)


            });
            Array.from(thisContent.inp).map((inp) => {
                other.childNodes[0].append(inp)
            });






        }


    });

    // create btn-down
    const btnDown = document.createElement('button');
    btnDown.classList.add('btn-ubicador', 'btn', 'btn-down');
    btnDown.textContent = '↓';
    btnDown.addEventListener('click', () => {
        const actual_position = box_avariable.findIndex(id => id == subcont.id);
        if (actual_position + 1 != box_avariable.length) {




            // const otherContent = document.getElementById(box_avariable[counter_indise - 1]).querySelector("[data-ctn]")

            const thisContent = { img: contentDiv.childNodes[1].cloneNode(true).childNodes, inp: contentDiv.childNodes[0].cloneNode(true).childNodes };
            const other = document.getElementById(box_avariable[counter_indise + 1]).querySelector("[data-ctn]");

            const otherContent = { img: other.childNodes[1].cloneNode(true).childNodes, inp: other.childNodes[0].cloneNode(true).childNodes };
            // LIMPIANDO CAJAS
            for (let i = 0; i < contentDiv.childNodes.length; i++) {
                const node = contentDiv.childNodes[i];
                const nodes = Array.from(node.childNodes);
                nodes.map(node => {
                    node.remove()
                })



            }
            // LIMPIANDO CAJAS
            for (let i = 0; i < other.childNodes.length; i++) {
                const node = other.childNodes[i];
                const nodes = Array.from(node.childNodes);
                nodes.map(node => {

                    node.remove()
                })
            }


            Array.from(otherContent.img).map((img) => {
                img.ondblclick = (e) => {
                    delete_img(img.id)

                }
                contentDiv.childNodes[1].append(img)


            });
            Array.from(otherContent.inp).map((inp) => {
                contentDiv.childNodes[0].append(inp)
            });

            Array.from(thisContent.img).map((img) => {
                img.ondblclick = (e) => {
                    delete_img(img.id)

                }
                other.childNodes[1].append(img)


            });
            Array.from(thisContent.inp).map((inp) => {
                other.childNodes[0].append(inp)
            });





        }

    });

    const div2 = document.createElement('div');
    div2.classList.add('separator');

    counter++

    container.appendChild(subcont)
    subcont.appendChild(div);
    subcont.appendChild(dropArea);
    dropArea.appendChild(btnCloses);
    dropArea.appendChild(contentDiv);
    contentDiv.appendChild(divInputCnt);
    contentDiv.appendChild(divImgsCnt);
    dropArea.appendChild(divUbicador);
    divUbicador.appendChild(btnUp);
    divUbicador.appendChild(document.createElement("br"));
    divUbicador.appendChild(btnDown);
    subcont.appendChild(div2);

    box_avariable.push(subcont.id)

}

const autosave_time = 60;

document.getElementById("save").onclick = () => {
    save()
}