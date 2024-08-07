// const areas = document.getElementsByClassName("drop-area");

// for (let i = 0; i < areas.length; i++) {
//     const area = areas[i];

//     // area.onclick = (e) => {
//     //     e.preventDefault();

//     // }
// area.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
// });

// area.addEventListener('drop', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const files = e.dataTransfer.files;
//     console.log(files);

//     // let pathArr = [];
//     // for (const f of event.dataTransfer.files) {
//     //     // Using the path attribute to get absolute file path
//     //     console.log('File Path of dragged files: ', f.path)
//     //     pathArr.push(f.path); // assemble array for main.js
//     // }
//     // console.log(pathArr);
//     // // const ret = ipcRenderer.sendSync('dropped-file', pathArr);
//     // // console.log(ret);
// });


//     // // EVENTO AL SOLTAR UNA IMAGEN EN AREA


//     // let entred = false;
//     // let img = {};

//     // // area.addEventListener("drop", (e) => {
//     // //     const files = e.dataTransfer.files;
//     // //     console.log(files);

//     // // })
//     // // area.ondragover = function(e) {
//     // //     const files = e.dataTransfer;

//     // //     // event.preventDefault();
//     // //     if (!entred) {
//     // //         console.log("ENTRE");
//     // //         entred = true;
//     // //         console.log(files);

//     // //     }
//     // //     // // Verifica si la imagen fue soltada
//     // //     // if (event.dataTransfer.files.length > 0) {
//     // //     //     console.log('Imagen soltada en el div');
//     // //     //     // Aquí puedes manejar la imagen como desees
//     // //     // }
//     // // };


//     // // area.ondragleave = function(event) {

//     // //     if (entred) {
//     // //         console.log("ME FUI");
//     // //         entred = false;
//     // //     }
//     // // };


//     // area.addEventListener('drop', (event) => {
//     //     event.preventDefault(); // Previene el comportamiento por defecto del navegador
//     //     const data = event.dataTransfer;
//     //     console.log('Data dropped:', data);
//     // });

//     // area.onchange = (e) => {
//     //     const file = e.target.files[0];




//     //     // const reader = new FileReader();
//     //     // reader.onload = (e) => {
//     //     //     img.src = e.target.result;
//     //     //     img.alt = file.name;
//     //     //     document.getElementById("da-01-img").src = img.src;
//     //     // };
//     //     // reader.readAsDataURL(file);
//     //     // document.getElementById("da-01-inp-cont").innerHTML = "";
//     // }

//     area.ondblclick = (e) => {
//         e.preventDefault()

//         if (e.target.id == ("da-01")) {
//             const input = document.createElement("textarea");
//             input.type = "text";
//             document.getElementById("da-01-inp-cont").append(input);
//         } else if (e.target.tagName == "TEXTAREA") {
//             Swal.fire({
//                 title: "Delete element?",
//                 text: "Are you sure you want to delete this element?",
//                 showCancelButton: true,
//                 confirmButtonText: "Yes",
//                 cancelButtonText: "No",
//                 customClass: {
//                     popup: "cu-pop"
//                 }
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     e.target.remove()
//                 }
//             });

//         }
//         // input.ondblclick = (e) => {

//         // }

//     }












// }


document.getElementById("creator").onclick = () => {
    create_dialog_box()
}