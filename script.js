// ===== Quiz =====
const quizData = [
  {
    pergunta: "Qual o horário mais seguro para aplicar defensivos?",
    respostas: ["Manhã cedo e noite", "Entre 10h e 16h", "Qualquer horário", "Durante o dia todo"],
    correta: 0
  },
  {
    pergunta: "Por que as abelhas são importantes?",
    respostas: ["Produzem mel", "Polinizam plantas", "Ajudam o solo", "Não têm importância"],
    correta: 1
  },
  {
    pergunta: "O que devemos fazer para proteger polinizadores?",
    respostas: ["Aplicar defensivos sem critério", "Plantar flores e respeitar horários", "Cortar árvores", "Nada"],
    correta: 1
  }
];

let currentQ = 0;

function carregarPergunta() {
  document.getElementById("resultado").innerText = "";
  let q = quizData[currentQ];
  document.getElementById("pergunta").innerText = q.pergunta;
  let respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";
  q.respostas.forEach((resp, i) => {
    let btn = document.createElement("button");
    btn.innerText = resp;
    btn.onclick = () => checarResposta(i);
    respostasDiv.appendChild(btn);
  });
}

function checarResposta(ind) {
  let q = quizData[currentQ];
  if (ind === q.correta) {
    document.getElementById("resultado").innerText = "✅ Correto!";
  } else {
    document.getElementById("resultado").innerText = "❌ Errado!";
  }
}

document.getElementById("nextBtn").onclick = () => {
  currentQ = (currentQ + 1) % quizData.length;
  carregarPergunta();
};

carregarPergunta();

// ===== Simulador de risco e p5.js =====
let horario = 12;
let abelhas = [];

function atualizarTexto() {
  document.getElementById("horarioText").innerText = "Horário: " + horario + "h";
  let risco = horario >= 6 && horario <= 18;
  document.getElementById("riscoText").innerText = risco ? "⚠️ Alto risco para abelhas" : "✅ Horário seguro";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") horario++;
  if (e.key === "ArrowDown") horario--;
  if (horario > 23) horario = 0;
  if (horario < 0) horario = 23;
  atualizarTexto();
});

function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent("p5Canvas");

  for (let i = 0; i < 20; i++) {
    abelhas.push({
      x: random(width),
      y
