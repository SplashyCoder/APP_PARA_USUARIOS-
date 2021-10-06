export  default class Cursos {
    constructor (nombre, poster, clases){
        this.nombre = nombre,
        this.poster = poster,
        this.clases = clases,
        this.inscritos = []
    }
    
    get nombre(){
        return this.nombre
    }
    get poster(){
        return this.poster
    }
    get clases(){
        return this.clases
    }
    get inscritos(){
        return this.inscritos
    }

    set nombre(nombre){
        this.nombre = nombre
    }
    set poster(poster){
        this.poster = poster
    }
    set clases(clases){
        this.clases = clases
    }
    set inscritos(inscritos){
        this.inscritos = inscritos
    }

}

