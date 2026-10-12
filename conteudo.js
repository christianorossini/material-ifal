/* =================================================================
   CONTEÚDO DO SITE — este é o ÚNICO arquivo que você precisa editar.
   Os três templates leem daqui.

   HIERARQUIA
     Área  →  Disciplina  →  Assunto  →  Pasta  →  Material

   PASTAS (livres)
   Dentro de cada assunto, "pastas" é uma lista de { nome, itens }.
   Crie quantas quiser e com o nome que quiser: "Apresentações",
   "Exercícios", "Experimentos", "Apostilas", "Vídeos", "Gabaritos"...
   O ícone é escolhido automaticamente pelo nome da pasta.
   Pastas sem itens não aparecem.

   MATERIAL
     { titulo: "...", tipo: "PPTX", link: "" }
     • link vazio ("")  → aparece como "Em breve"
     • link preenchido  → aparece o botão "Abrir"
     • Links relativos à raiz do repositório, ex.:
         "informatica-basica/planilhas/formulas/aula02.pptx"
       ou um endereço completo (https://...).
     • descricao é opcional (uma linha curta abaixo do título).
     • tipo: PDF, PPTX, DOCX, XLSX, ODP, ODT, ODS, ZIP, VIDEO ou LINK.

   IDs
   O "id" vira o endereço da página (#informatica-basica/planilhas/formulas):
   use só letras minúsculas, números e hífens.
   ================================================================= */

const SITE = {
  titulo: "Materiais de Aula",
  autor: "Prof. Christiano Rossini",
  instituicao: "IFAL · Campus Maceió",
  aviso: "Dúvidas sobre os materiais? Fale com o professor em sala ou pelo Classroom.",

  /* LOGOMARCA DO IFAL
     Coloque o arquivo da logomarca oficial na pasta "img" do repositório.
     • logo:      versão colorida (usada sobre fundo branco)
     • logoClaro: versão branca/negativa (usada sobre fundo verde e no tema
                  escuro). Se deixar vazio, a logo colorida aparece sobre
                  uma placa branca.
     Formatos aceitos: .svg (recomendado) ou .png com fundo transparente. */
  logo: "img/logo-ifal2.png",
  logoClaro: ""
};

const MENU = [
  /* ============================ ÁREA ============================ */
  {
    id: "informatica-basica",
    titulo: "Informática Básica",
    descricao: "Ferramentas essenciais do dia a dia: sistema operacional, editor de texto, planilhas e apresentações.",
    disciplinas: [

      /* ------------------------- DISCIPLINA ------------------------- */
      {
        id: "planilhas",
        titulo: "Planilhas",
        descricao: "LibreOffice Calc e Excel: fórmulas, funções, referências e gráficos.",
        assuntos: [
          {
            id: "introducao",
            titulo: "Introdução às planilhas",
            descricao: "Células, linhas, colunas e a interface do Calc.",
            pastas: [
              { nome: "Apresentações", itens: [
                { titulo: "Aula 01 · Conhecendo a planilha", tipo: "PPTX", link: "" }
              ]},
              { nome: "Apostilas", itens: [
                { titulo: "Apostila de Planilhas — Capítulo 1", tipo: "PDF", link: "" }
              ]}
            ]
          },
          {
            id: "formulas",
            titulo: "Fórmulas e operadores",
            descricao: "Operadores aritméticos, precedência e as funções SOMA e MÉDIA.",
            pastas: [
              { nome: "Apresentações", itens: [
                { titulo: "Aula 02 · Fórmulas e operadores", tipo: "PPTX", link: "" }
              ]},
              { nome: "Exercícios", itens: [
                { titulo: "Exercício 01 · Cantina escolar", descricao: "Operadores e totais", tipo: "XLSX", link: "" },
                { titulo: "Exercício 02 · Soma manual × SOMA()", tipo: "XLSX", link: "" }
              ]}
            ]
          },
          {
            id: "referencias",
            titulo: "Referências relativas e absolutas",
            descricao: "O uso do $ e a cópia de fórmulas.",
            pastas: [
              { nome: "Apresentações", itens: [
                { titulo: "Aula 03 · Referências", tipo: "PPTX", link: "" }
              ]},
              { nome: "Exercícios", itens: [
                { titulo: "Exercício 03 · Boletim da turma", descricao: "Média com bônus fixo", tipo: "XLSX", link: "" }
              ]},
              { nome: "Gabaritos", itens: [
                { titulo: "Gabarito · Boletim da turma", tipo: "XLSX", link: "" }
              ]}
            ]
          }
        ]
      },
      
      {
        id: "windows",
        titulo: "Windows",
        descricao: "Windows 11: interface, janelas, arquivos, pastas e programas.",
        assuntos: [
          
          {
            id: "Windows-basico",
            titulo: "Windows básico",
            pastas: [              
              { nome: "Apostilas",     itens: [ { titulo: "Apostila Windows 11", tipo: "HTML", link: "ibasica/windows/apostila-windows-basico.html" } ]}
            ]
          },
          
        ]
      }
    ]
  },

  /* ============================ ÁREA ============================ */
  {
    id: "ciencia-da-computacao",
    titulo: "Ciência da Computação",
    descricao: "Disciplinas do Bacharelado em Sistemas de Informação.",
    disciplinas: [
      {
        id: "sistemas-operacionais",
        titulo: "Sistemas Operacionais",
        descricao: "Processos, threads, escalonamento, memória e sistemas de arquivos.",
        assuntos: [
          {
            id: "processos-e-threads",
            titulo: "Processos, Threads e Comunicação/Sincronização",
            descricao: "Ciclo de vida, PCB, troca de contexto e threads.",
            pastas: [
              { 
                nome: "Apresentações", 
                itens: [ 
                  {titulo: "Aula 01 · Processos", tipo: "PPTX", link: "https://docs.google.com/presentation/d/1q4XupxbRHR1sbb8il-KVWXuR0pGMC0A8/edit?usp=sharing&ouid=111962110626612264587&rtpof=true&sd=true"},
                  {titulo: "Aula 02 · Threads", tipo: "PPTX", link: "https://docs.google.com/presentation/d/1MufNdLVFhQmRCAj9-merzqm9yjJcv6Sg/edit?usp=sharing&ouid=111962110626612264587&rtpof=true&sd=true"},
                  {titulo: "Aula 03 · Comunicação e Sincronização", tipo: "PPTX", link: "https://docs.google.com/presentation/d/15w59vwbGCV84-NUmpgpHNrs_hNVSa16n/edit?usp=sharing&ouid=111962110626612264587&rtpof=true&sd=true"},
                ]
              },
             
              { 
                nome: "Apostilas", 
                itens: [ 
                  {titulo: "Aula 01 · Processos", tipo: "PPTX", link: "so/apostila-processos.html"},
                  {titulo: "Aula 02 · Threads", tipo: "PPTX", link: "so/apostila-threads.html"},
                  {titulo: "Aula 03 · Comunicação e Sincronização", tipo: "PPTX", link: "so/apostila-sincronizacao.html"},
                ]
              },
             
              { 
                nome: "Práticas de laboratório", 
                itens: [ 
                  { titulo: "Prática 01 · Processos", descricao: "Práticas com o simulador SOSIM", tipo: "PDF", link: "https://drive.google.com/file/d/1N_3tBp_kyQu8btklR6AzyLbO-kyuPiOi/view?usp=sharing"},
                  { titulo: "Prática 02 · Threads", descricao: "Práticas com Threads", tipo: "HTML", link: "so/lab/lab-threads.html" },
                  { titulo: "Prática 03 · Comunicação e Sincronização", descricao: "Práticas com comunicação e sincronização", tipo: "HTML", link: "so/lab/lab-sincronizacao.html" },
                ]
              },
              
              { 
                nome: "Outros materiais", 
                itens: [ 
                  { titulo: "Simulador SOSIM", tipo: "ZIP", link: "https://drive.google.com/drive/folders/1VjIR34QEmsGRrni9XuuOt9dylCYfa-vf?usp=sharing"},                
                ]
              },
            ]
          },
         
          {
            id: "gerencia-processador",
            titulo: "Gerência de Processador",
            descricao: "Escalonamento, políticas de escalonamento",
            pastas: [
              { 
                nome: "Apresentações", 
                itens: [ 
               
                ]
              },
              { 
                nome: "Apostilas", 
                itens: [ 
                ]
              },
            ]
          },
        
          {
            id: "gerencia-memoria",
            titulo: "Gerência de Memória",
            descricao: "Gerência de memória, alocação e liberação de memória",
            pastas: [
              { 
                nome: "Apresentações", 
                itens: [ 
              
                ]
              },
              { 
                nome: "Apostilas", 
                itens: [ 
                ]
              },
            ]
          },

        ]
      },
    ]
  }
];