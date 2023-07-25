const create_puntaje = (puntaje) => {
    localStorage.setItem("puntaje", puntaje);
  };
  
  export default function add_to_puntaje(puntaje) {
    if (!localStorage.getItem("puntaje")) {
      create_puntaje(puntaje);
    } else {
      let score = Number(localStorage.getItem("puntaje"));
      score += puntaje;
      localStorage.setItem("puntaje", score);
      let restantes = localStorage.getItem("restantes");
      localStorage.setItem("restantes", restantes - 1);
      console.log("Valor de 'restantes':", restantes); // Agregamos esta línea para ver el valor de "restantes"
      console.log("Valor score", score);
  
      if (localStorage.getItem("restantes") == 0) {
        localStorage.setItem("puntaje", (score / 4).toFixed(1)); // Corregimos la división
        console.log("Valor puntaje", (score / 4).toFixed(1));
        score = 0;
      }
    }
    return localStorage.getItem("puntaje");
  }