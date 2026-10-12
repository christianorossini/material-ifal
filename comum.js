/* =================================================================
   FUNÇÕES COMUNS AOS TRÊS TEMPLATES — não é preciso editar.
   ================================================================= */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const $ = id => document.getElementById(id);

const svg = d => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONE = {
  slides:    svg('<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/>'),
  apostila:  svg('<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>'),
  exercicio: svg('<path d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><path d="M9 11h6M9 15h4"/>'),
  experimento: svg('<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>'),
  gabarito:  svg('<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.3 2.3 4.7-4.8"/>'),
  video:     svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.2v5.6l4.8-2.8z"/>'),
  link:      svg('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
  pasta:     svg('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'),
  assuntos:  svg('<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>'),
  arquivos:  svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>'),
  seta:      svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  abrir:     svg('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  baixo:     svg('<path d="M6 9l6 6 6-6"/>'),
  direita:   svg('<path d="M9 6l6 6-6 6"/>'),
  menu:      svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  fechar:    svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  inicio:    svg('<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>'),
  expandir:  svg('<path d="M7 10l5-5 5 5M7 14l5 5 5-5"/>'),
  recolher:  svg('<path d="M7 5l5 5 5-5M7 19l5-5 5 5"/>')
};

/* Ícone da pasta escolhido pelo nome */
function iconePasta(nome){
  const n = String(nome).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  if (/apresenta|slide|power ?point/.test(n)) return ICONE.slides;
  if (/apostila|livro|leitura|texto/.test(n)) return ICONE.apostila;
  if (/gabarito|resposta|solu/.test(n)) return ICONE.gabarito;
  if (/experiment|pratica|laborat/.test(n)) return ICONE.experimento;
  if (/exerc|lista|atividade|tarefa|avalia|prova/.test(n)) return ICONE.exercicio;
  if (/video|aula gravada/.test(n)) return ICONE.video;
  if (/link|referencia|site/.test(n)) return ICONE.link;
  return ICONE.pasta;
}

/* Logomarca no topo: <a class="marca" data-fundo="claro|escuro"></a>
   Se o arquivo da logo não for encontrado, aparece a sigla "IFAL". */
function marcaHTML(fundo){
  const escuro = fundo === "escuro", claro = SITE.logoClaro;
  const src = escuro && claro ? claro : SITE.logo;
  const placa = escuro && !claro ? " placa" : (!escuro && !claro ? " placa-escuro" : "");
  const fonteEscura = !escuro && claro ? `<source srcset="${esc(claro)}" media="(prefers-color-scheme: dark)">` : "";
  return `<span class="marca-logo${placa}"><picture>${fonteEscura}<img src="${esc(src)}" alt="Instituto Federal de Alagoas" onerror="this.closest('.marca-logo').outerHTML='<span class=&quot;marca-sigla&quot;>IFAL</span>'"></picture></span>
    <span class="marca-div" aria-hidden="true"></span>
    <span class="marca-nome"><b data-site="titulo"></b><small data-site="instituicao"></small></span>`;
}
document.querySelectorAll("a.marca").forEach(el => { el.innerHTML = marcaHTML(el.dataset.fundo); el.setAttribute("aria-label", SITE.titulo + " — página inicial"); });

/* Preenche os elementos marcados com data-site="titulo", "autor" etc. */
document.querySelectorAll("[data-site]").forEach(el => el.textContent = SITE[el.dataset.site] ?? "");

/* ---------- contagens ---------- */
const pastasDe   = a => (a.pastas || []).filter(p => (p.itens || []).length);
const itensDe    = a => pastasDe(a).flatMap(p => p.itens);
const itensDisc  = d => (d.assuntos || []).flatMap(itensDe);
const plural = (n, s, p) => `${n} ${n === 1 ? s : p}`;

/* ---------- material ---------- */
function classeTipo(t){
  t = String(t || "").toUpperCase();
  if (t === "PDF") return "tipo-pdf";
  if (["PPT","PPTX","ODP"].includes(t)) return "tipo-ppt";
  if (["DOC","DOCX","ODT"].includes(t)) return "tipo-doc";
  if (["XLS","XLSX","ODS","CSV"].includes(t)) return "tipo-xls";
  return "";
}
function materialHTML(i){
  const tipo = `<span class="tipo ${classeTipo(i.tipo)}">${esc(i.tipo || "—")}</span>`;
  const info = `<span class="mat-info"><span class="mat-t">${esc(i.titulo)}</span>${i.descricao ? `<span class="mat-d">${esc(i.descricao)}</span>` : ""}</span>`;
  return i.link
    ? `<li><a class="mat" href="${esc(i.link)}" target="_blank" rel="noopener">${tipo}${info}<span class="mat-acao">${ICONE.abrir}<span>Abrir</span></span></a></li>`
    : `<li><div class="mat breve">${tipo}${info}<span class="selo-breve">Em breve</span></div></li>`;
}

/* ---------- pasta ---------- */
const pastaHTML = p => `<div class="pasta">
  <h4 class="pasta-h">${iconePasta(p.nome)}<span>${esc(p.nome)}</span><span class="num">${p.itens.length}</span></h4>
  <ul class="mats">${p.itens.map(materialHTML).join("")}</ul>
</div>`;

/* ---------- assunto (sanfona) ---------- */
function assuntoHTML(area, disc, a, n, aberto){
  const ps = pastasDe(a);
  return `<details class="assunto" id="as-${esc(a.id)}" data-rota="${esc(area.id)}/${esc(disc.id)}/${esc(a.id)}" ${aberto ? "open" : ""}>
    <summary class="assunto-h">
      <span class="assunto-n">${String(n).padStart(2, "0")}</span>
      <span class="assunto-info"><b>${esc(a.titulo)}</b>${a.descricao ? `<small>${esc(a.descricao)}</small>` : ""}</span>
      <span class="assunto-meta">${ps.map(p => `<span title="${esc(p.nome)}">${iconePasta(p.nome)}${p.itens.length}</span>`).join("")}</span>
      <span class="chev">${ICONE.baixo}</span>
    </summary>
    <div class="assunto-corpo">${ps.length ? `<div class="pastas">${ps.map(pastaHTML).join("")}</div>` : `<p class="vazio">Nenhum material cadastrado neste assunto ainda.</p>`}</div>
  </details>`;
}
function assuntosHTML(area, disc, atual){
  const lista = disc.assuntos || [];
  if (!lista.length) return `<p class="vazio caixa">Nenhum assunto cadastrado ainda.</p>`;
  return `<div class="assuntos">${lista.map((a, k) => assuntoHTML(area, disc, a, k + 1, atual ? a === atual : k === 0)).join("")}</div>`;
}

/* Barra acima dos assuntos: totais + expandir/recolher */
function barraHTML(disc){
  const it = itensDisc(disc), pub = it.filter(i => i.link).length;
  return `<div class="barra-assuntos">
    <span class="totais">${ICONE.assuntos}${plural((disc.assuntos || []).length, "assunto", "assuntos")}<i></i>${ICONE.arquivos}${plural(it.length, "material", "materiais")}<i></i>${pub} disponíve${pub === 1 ? "l" : "is"}</span>
    <span class="acoes"><button type="button" data-todos="1">${ICONE.expandir}Expandir tudo</button><button type="button" data-todos="0">${ICONE.recolher}Recolher tudo</button></span>
  </div>`;
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-todos]");
  if (b) document.querySelectorAll(".assunto").forEach(d => d.open = b.dataset.todos === "1");
  const ir = e.target.closest("[data-ir]");
  if (ir) { const d = document.getElementById(ir.dataset.ir); if (d) { d.open = true; d.scrollIntoView({ behavior: "smooth", block: "start" }); } }
});
/* Ao abrir um assunto, o endereço da página passa a apontar para ele (link compartilhável) */
document.addEventListener("toggle", e => {
  const d = e.target;
  if (d.classList && d.classList.contains("assunto") && d.open) history.replaceState(null, "", "#" + d.dataset.rota);
}, true);

/* Cartão de disciplina */
const cartaoHTML = (area, d) => {
  const n = (d.assuntos || []).length, it = itensDisc(d).length;
  return `<a class="cartao" href="#${esc(area.id)}/${esc(d.id)}">
    <h3>${esc(d.titulo)}${ICONE.seta}</h3><p>${esc(d.descricao)}</p>
    <span class="cartao-cont"><span>${ICONE.assuntos}<b>${n}</b> ${n === 1 ? "assunto" : "assuntos"}</span><span>${ICONE.arquivos}<b>${it}</b> ${it === 1 ? "material" : "materiais"}</span></span>
  </a>`;
};

/* Rota a partir do endereço: #area/disciplina/assunto */
function rota(){
  const [a, d, s] = decodeURIComponent(location.hash.slice(1)).split("/");
  const area = MENU.find(x => x.id === a);
  const disc = area && (area.disciplinas || []).find(x => x.id === d);
  const assunto = disc && (disc.assuntos || []).find(x => x.id === s);
  return { area, disc, assunto };
}
function iniciar(render){
  const r = () => {
    const at = rota(); render(at);
    if (at.assunto) document.getElementById("as-" + at.assunto.id)?.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  };
  addEventListener("hashchange", r); r();
}