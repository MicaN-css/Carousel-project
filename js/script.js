const btnadd = document.querySelector(".btn-add") 
let listimg = []

btnadd.addEventListener("click", onadd)

function onadd(event){
    event.preventDefault();
    console.log("zika do baile")

    const inputurl = document.querySelector(".input-url").value
    const inputdesc = document.querySelector(".input-description").value


    if (inputurl != "" && inputdesc != "" ){
        const img = {img: inputurl, description: inputdesc}
        listimg.push(img)
        listarimg(img)
        addlocal(img)

    }
}

function listarimg(img){
    const divimg = document.querySelector(".imagens")
    var imgtag = document.createElement("div") 
    imgtag.append(img.img);
    divimg.append(imgtag);
}

function addlocal(img){
    let recuperalist = JSON.parse(localStorage.getItem("lista"))  || []
    recuperalist.push(img)
    localStorage.setItem("lista", JSON.stringify(recuperalist))
}

function recuperalocal(){
    let recuperalist = JSON.parse(localStorage.getItem("lista")) || []
    for(list of recuperalist){
        listarimg(list)
    }

}

recuperalocal()