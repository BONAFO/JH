let toast_TOut

const show_toast = (text = 'Soy una tostada!', params = { style: { color: String, backgrondColor: String, } }) => {
    clearTimeout(toast_TOut)
    const toast = document.getElementById("toast")
    toast.querySelector("label").innerHTML = text;
    toast.style.opacity = 1;
    setTimeout(() => {
        toast.style.bottom = "0rem";
    }, 100);


    Object.keys(params.style).map(k => {

        toast.style[k] = params.style[k];
    })

    toast_TOut = setTimeout(() => {
        toast.style.bottom = "-2rem";
        setTimeout(() => {
            toast.style.opacity = 0;
        }, 400);
    }, 2500);
}