function pickImage(){
    options =["IMA1.png","IMA2.png","IMA3.png", "Imagen1.png"]
    randomImg = "IMAGENES/" + options [Math. floor(Math. random() * options.
    length)];
    img = document.querySelector("#header_img")
    img. setAttribute("src", randomImg)
    img. setAttribute("alt","")
}