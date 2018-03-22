+function () {
    // Elementos
    var addBoton = document.getElementById('agregar');
    var showBoton = document.getElementById('mostrar');
    var searchBoton = document.getElementById('buscar');
    var topTech = document.getElementById('top-tecnico');
    var topHSE = document.getElementById('top-hse');
    var result = document.getElementById('contenedor-estudiantes');

    // Evento Click - Agregar
    var addEvent = function (e) {
        e.preventDefault();
        var student = studentAdd();
        result.innerHTML = show(student);
    };

    var showEvent = function (e) {
        e.preventDefault();
        var students = getStudentsList();
        result.innerHTML = listShow(students); 
    };

    var searchEvent = function (e) {
      e.preventDefault();
      var studentName = prompt("Ingrese nombre del estudiante");
      // console.log(studentName);
      var students = getStudentsList();
      // console.log(students); 
      var lookStudent = search(studentName, students)
      result.innerHTML = listShow(lookStudent);
    }

    // Manejadores de eventos
    addBoton.addEventListener('click', addEvent);
    showBoton.addEventListener('click', showEvent);
    searchBoton.addEventListener('click',searchEvent);
}();
