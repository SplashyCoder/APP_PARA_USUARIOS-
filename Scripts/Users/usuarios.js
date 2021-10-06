// Genera usuarios basicos
export default class Usuarios {
    constructor (nombre, apellidos, correo) {
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.correo = correo
    }
    getNombre(){
        return this.nombre
    }
    getApellidos(){
        return this.apellidos
    }
    getCorreo(){
        return this.correo  
    }

    setNombre(nombre){
        this.nombre = nombre
    }
    setApellidos(apellidos){
        this.apellidos = apellidos
    }
    setCorreo(correo){
        this.correo = correo
    }
}

class Profe extends Usuarios {
    constructor (nombre, apellidos, correo, cursos, calificacion) { 
        super(nombre, apellidos, correo)
        this.cursos = cursos
        this.calificacion = calificacion
    }
    
    getCursos(){
        return this.cursos
    }
    getCalificacion(){
        return this.calificacion
    }

    setCursos(cursos){
        this.cursos = cursos
    }
    setCalificacion(calificacion){
        this.calificacion = calificacion
    }
}   

class Alumno extends Usuarios {
    constructor (nombre, apellidos, correo, status, clases) {
        super(nombre, apellidos, correo)
        this.status = status
        this.clases = clases
    }

    getStatus(){
        return this.status
    }
    getClases(){
        return this.clases
    }

    setStatus(status){
        this.status = status
    }
    setClases(clases){
        this.clases = clases
    }
}