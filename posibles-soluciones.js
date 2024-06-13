/* Esta función devuelve trrue si encuentra un 2 en raya*/

function intentar_ganar_o_bloquear(m, j) {
  let x = -1, y = -1;
  switch (true) {
    // Comprobación de filas
    case m[0][0] == j && m[0][1] == j && m[0][2] == '':
    case m[0][0] == j && m[0][2] == j && m[0][1] == '':
    case m[0][1] == j && m[0][2] == j && m[0][0] == '':
      x = 0; y = 0;
      if (m[0][1] == '') { y = 1; } else if (m[0][2] == '') { y = 2; }
      break;

    case m[1][0] == j && m[1][1] == j && m[1][2] == '':
    case m[1][0] == j && m[1][2] == j && m[1][1] == '':
    case m[1][1] == j && m[1][2] == j && m[1][0] == '':
      x = 1; y = 0;
      if (m[1][1] == '') { y = 1; } else if (m[1][2] == '') { y = 2; }
      break;

    case m[2][0] == j && m[2][1] == j && m[2][2] == '':
    case m[2][0] == j && m[2][2] == j && m[2][1] == '':
    case m[2][1] == j && m[2][2] == j && m[2][0] == '':
      x = 2; y = 0;
      if (m[2][1] == '') { y = 1; } else if (m[2][2] == '') { y = 2; }
      break;

    // Comprobación de columnas
    case m[0][0] == j && m[1][0] == j && m[2][0] == '':
    case m[0][0] == j && m[2][0] == j && m[1][0] == '':
    case m[1][0] == j && m[2][0] == j && m[0][0] == '':
      y = 0; x = 0;
      if (m[1][0] == '') { x = 1; } else if (m[2][0] == '') { x = 2; }
      break;

    case m[0][1] == j && m[1][1] == j && m[2][1] == '':
    case m[0][1] == j && m[2][1] == j && m[1][1] == '':
    case m[1][1] == j && m[2][1] == j && m[0][1] == '':
      y = 1; x = 0;
      if (m[1][1] == '') { x = 1; } else if (m[2][1] == '') { x = 2; }
      break;

    case m[0][2] == j && m[1][2] == j && m[2][2] == '':
    case m[0][2] == j && m[2][2] == j && m[1][2] == '':
    case m[1][2] == j && m[2][2] == j && m[0][2] == '':
      y = 2; x = 0;
      if (m[1][2] == '') { x = 1; } else if (m[2][2] == '') { x = 2; }
      break;

    // Comprobación de diagonales
    case m[0][0] == j && m[1][1] == j && m[2][2] == '':
    case m[0][0] == j && m[2][2] == j && m[1][1] == '':
    case m[1][1] == j && m[2][2] == j && m[0][0] == '':
      x = 0; y = 0;
      if (m[1][1] == '') { x = 1; y = 1; } else if (m[2][2] == '') { x = 2; y = 2; }
      break;

    case m[2][0] == j && m[1][1] == j && m[0][2] == '':
    case m[2][0] == j && m[0][2] == j && m[1][1] == '':
    case m[1][1] == j && m[0][2] == j && m[2][0] == '':
      x = 2; y = 0;
      if (m[1][1] == '') { x = 1; y = 1; } else if (m[0][2] == '') { x = 0; y = 2; }
      break;

    default:
      // Si no se encontró ninguna jugada ganadora, buscar la primera posición vacía
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (m[i][j] == '') {
            x = i;
            y = j;
            return [x, y];  // Salir de la función y devolver la posición vacía encontrada
          }
        }
      }
      return null;  // Devolver null si no se encuentra ninguna posición vacía
  }
  return [x, y];
}


function la_314(){
  var m = matriz;
  var x,y;
  switch(m){
    case m[1][0] == 'X' && m[0][1] == 'X' || m[0][1] == 'X' && m[1][2] == 'X' :
      
      break;
    case m[2][1] == 'X' && m[0][1] == 'X' || m[2][1] == 'X' && m[1][2] == 'X' :
      break;
    default:
      
      break;
  }
}
