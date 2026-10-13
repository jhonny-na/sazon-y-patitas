const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

// Catalina (por ahora un cuadrado, luego le ponemos dibujo)
const catalina = {
  x: 300,
  y: 220,
  tamano: 32,
  velocidad: 3,
  color: "#e76f51"
};

// Teclas presionadas
const teclas = {};
window.addEventListener("keydown", (e) => teclas[e.key.toLowerCase()] = true);
window.addEventListener("keyup", (e) => teclas[e.key.toLowerCase()] = false);

function actualizar() {
  if (teclas["arrowup"] || teclas["w"]) catalina.y -= catalina.velocidad;
  if (teclas["arrowdown"] || teclas["s"]) catalina.y += catalina.velocidad;
  if (teclas["arrowleft"] || teclas["a"]) catalina.x -= catalina.velocidad;
  if (teclas["arrowright"] || teclas["d"]) catalina.x += catalina.velocidad;

  // Que no se salga de la pantalla
  catalina.x = Math.max(0, Math.min(canvas.width - catalina.tamano, catalina.x));
  catalina.y = Math.max(0, Math.min(canvas.height - catalina.tamano, catalina.y));
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = catalina.color;
  ctx.fillRect(catalina.x, catalina.y, catalina.tamano, catalina.tamano);

  ctx.fillStyle = "#264653";
  ctx.font = "16px sans-serif";
  ctx.fillText("Catalina", catalina.x - 4, catalina.y - 8);
}

function bucle() {
  actualizar();
  dibujar();
  requestAnimationFrame(bucle);
}

bucle();