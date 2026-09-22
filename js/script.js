/* ==========================================================================
   Faculdade Nova Era — script.js
   Único propósito: ler os data-attributes do botão "Ver detalhes" clicado
   e preencher a janela Modal (RF07) antes de ela ser exibida.
   JavaScript puro (vanilla), sem uso de frameworks — conforme RNF02.
   ========================================================================== */

(function () {
  "use strict";

  var modalCurso = document.getElementById("modalCurso");
  if (!modalCurso) return;

  modalCurso.addEventListener("show.bs.modal", function (event) {
    var botao = event.relatedTarget;
    if (!botao) return;

    var titulo = modalCurso.querySelector("#modalCursoLabel");
    var objetivos = modalCurso.querySelector("#modalObjetivos");
    var carga = modalCurso.querySelector("#modalCarga");
    var publico = modalCurso.querySelector("#modalPublico");
    var descricao = modalCurso.querySelector("#modalDescricao");

    titulo.textContent = botao.getAttribute("data-nome") || "Curso";
    objetivos.textContent = botao.getAttribute("data-objetivos") || "-";
    carga.textContent = botao.getAttribute("data-carga") || "-";
    publico.textContent = botao.getAttribute("data-publico") || "-";
    descricao.textContent = botao.getAttribute("data-descricao") || "-";

    var linkCompleta = modalCurso.querySelector(".modal-link-completa");
    var link = botao.getAttribute("data-link");
    if (linkCompleta && link) {
      linkCompleta.setAttribute("href", link);
    }
  });
})();
