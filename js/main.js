import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");
  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
  formularioPensamento.addEventListener("reset", limparFormulario);
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();

  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  const pensamento = { conteudo, autoria };

  try {
    await api.salvarPensamento(pensamento);
    ui.renderizarPensamentos();
  } catch (error) {
    console.error("Erro ao salvar pensamento: ", error);
  }
}

function limparFormulario() {
  document.getElementById("pensamento-form").reset();
}
