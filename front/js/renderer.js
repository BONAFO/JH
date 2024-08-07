document.addEventListener('DOMContentLoaded', () => {
    // const dropArea = document.getElementById('drop-area');
    // const fileNameElement = document.getElementById('file-name');
    // const folderNameElement = document.getElementById('folder-name');

    // // Prevenir el comportamiento por defecto
    // dropArea.addEventListener('dragover', (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     dropArea.classList.add('dragging');
    // });

    // dropArea.addEventListener('dragleave', (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     dropArea.classList.remove('dragging');
    // });

    // dropArea.addEventListener('drop', (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     dropArea.classList.remove('dragging');

    //     const files = event.dataTransfer.files;

    //     if (files.length > 0) {
    //         const file = files[0];
    //         const fileName = file.name;
    //         const filePath = file.path; // Ruta completa del archivo

    //         // Extraer el directorio del archivo
    //         const folderPath = path.dirname(filePath);

    //         fileNameElement.textContent = `Nombre del archivo: ${fileName}`;
    //         folderNameElement.textContent = `Nombre del directorio: ${folderPath}`;




    //         document.getElementById("img").src = folderPath + "/" + fileName;

    //     } else {
    //         fileNameElement.textContent = 'Nombre del archivo: No seleccionado';
    //         folderNameElement.textContent = 'Nombre del directorio: No disponible';
    //     }
    // });






});
//FROM HTML TO JS
{
    /* <div class="separator"></div>
    <div class="drop-area" id="da-01"> </div>
    <div class="separator"></div> */
}
// const separator1 = document.createElement('div');

// div.classList.add('separator1');

// const dropArea = document.createElement('div');

// dropArea.classList.add('drop-area');

// const separator2 = document.createElement('div');

// div.classList.add('separator2');