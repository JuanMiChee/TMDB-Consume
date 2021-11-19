


let objects = [{nombre: "juan", apellido: "harr", edad: "17"},
               {nombre: "joe", apellido: "harryy", edad: "17"},
               {nombre: "pimpon", apellido: "hahah", edad: "17"}]


let map = objects.forEach(arrayProcessing)


function arrayProcessing(object){
    let name = object.nombre;
    console.log(name)
}

// arrayProcessing(object.apellido);