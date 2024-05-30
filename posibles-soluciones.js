/* Esta función devuelve trrue si encuentra un 2 en raya*/
function hay_dos_en_raya(){
  var m = matriz;
  var x,y;
  switch(m){
    // En este caso miramos la primera fila
    case m[0][0] == 'X' && m[0][1] == 'X' || m[0][1] == 'X' && m[0][2] == 'X' ||  m[0][0] == 'X' && m[0][2] == 'X' :
      x = 0;
      if(m[0][0] == ''){ y = 0; }else if(m[0][1] == ''){ y = 1; }else if(m[0][2] == ''){ y = 2; }
      break;
    case :
      break;

    default:
      
      break;
  }

  return x,y;
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
