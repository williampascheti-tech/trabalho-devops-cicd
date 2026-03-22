async function buscarMensagem() {
  const res = await fetch("http://localhost:3000/api/mensagem");
  const data = await res.json();
  document.getElementById("resultado").innerText = data.mensagem;
}
