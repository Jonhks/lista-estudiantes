var students = [];

function getStudentsList() {
    // TO DO: Retornar la lista de estudiantes
    return students;
    //console.log(students);

}

function studentAdd() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var name = prompt("Ingrese nombre de estudiante");
    var tecPoint = parseInt(prompt("Ingrese puntos técnicos"));
    var hsePoint = parseInt(prompt("Ingrese puntos HSE"));
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    var newStudent = {
      "name" : name,
      "tecPoint" : tecPoint,
      "tecHSE" : hsePoint   
    }; 

    students.push(newStudent);

    // TO DO: Retornar el estudiante recientemente creado
    // console.log(newStudent);
    return newStudent;

}

function show(student) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    // Crear elemetos 
    // Dar atributos
    // Dar valores 
    // Definir jerarquia 
    // anclar a un elemento de html

    var result = "";
    result += "<div class='row'>";
    result += "<div class='col m12'>";
    result += "<div class='card blue-grey darken-1'>";
    result += "<div class='card-content white-text'>";
    result += "<p><strong>Nombre:</strong> " + student.name + "</p>";
    result += "<p><strong>Puntos Técnicos:</strong> " +   student.tecPoint + "</p>";
    result += "<p><strong>Puntos HSE:</strong> " + student.tecHSE + "</p>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    return result;
}


function listShow(students) {
  var contentHtml = "";
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función show(estudiante)
    for ( var i = 0; i < students.length; i++ ) {
      contentHtml += show(students[i]);
      // console.log (students[i]);
    }
  // Retornar el template de todos los estudiantes
  return contentHtml;
}

function search(studentName, students) {

    // var listStudents = getStudentsList();
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    // return studentName;
}

function topTech(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
