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
  autor: "Prof. Christiano Rossini Martins Costa",
  instituicao: "IFAL · Campus Maceió",
  aviso: "Dúvidas sobre os materiais? Fale com o professor em sala ou pelo SUAP."
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
        id: "editor-de-texto",
        titulo: "Editor de Texto",
        descricao: "LibreOffice Writer e Word: formatação, estilos e documentos acadêmicos.",
        assuntos: [
          {
            id: "formatacao",
            titulo: "Formatação de texto e parágrafo",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 01 · Formatação", tipo: "PPTX", link: "" } ]},
              { nome: "Exercícios",    itens: [ { titulo: "Exercício · Currículo", tipo: "DOCX", link: "" } ]}
            ]
          },
          {
            id: "estilos",
            titulo: "Estilos, sumário e numeração",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 02 · Estilos e sumário", tipo: "PPTX", link: "" } ]},
              { nome: "Exercícios",    itens: [ { titulo: "Exercício · Relatório técnico", tipo: "DOCX", link: "" } ]}
            ]
          }
        ]
      },

      {
        id: "power-point",
        titulo: "Power Point",
        descricao: "LibreOffice Impress e PowerPoint: apresentações claras e objetivas.",
        assuntos: [
          {
            id: "criando-apresentacoes",
            titulo: "Criando uma apresentação",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 01 · Primeiros slides", tipo: "PPTX", link: "" } ]},
              { nome: "Exercícios",    itens: [ { titulo: "Exercício · Apresentação de um tema técnico", tipo: "PPTX", link: "" } ]}
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
            id: "interface",
            titulo: "Interface, mouse e teclado",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 01 · Interface do Windows 11", tipo: "PPTX", link: "" } ]},
              { nome: "Apostilas",     itens: [ { titulo: "Apostila Windows 11 — Capítulos 1 e 2", tipo: "PDF", link: "" } ]}
            ]
          },
          {
            id: "arquivos-e-pastas",
            titulo: "Arquivos, pastas e extensões",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 02 · Hierarquia de arquivos", tipo: "PPTX", link: "" } ]},
              { nome: "Experimentos",  itens: [ { titulo: "Experimento · Organizando pastas no laboratório", tipo: "PDF", link: "" } ]},
              { nome: "Apostilas",     itens: [ { titulo: "Apostila Windows 11 — Capítulos 4 a 6", tipo: "PDF", link: "" } ]}
            ]
          }
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
            id: "introducao",
            titulo: "Introdução aos Sistemas Operacionais",
            descricao: "Conceitos, funções e estrutura de um SO.",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 01 · O que é um sistema operacional", tipo: "PPTX", link: "" } ]},
              { nome: "Experimentos",  itens: [ { titulo: "Experimento 01 · Terminal Linux", descricao: "Comandos básicos e navegação", tipo: "PDF", link: "" } ]}
            ]
          },
          {
            id: "processos-e-threads",
            titulo: "Processos e Threads",
            descricao: "Ciclo de vida, PCB, troca de contexto e threads.",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 02 · Processos e Threads", tipo: "PPTX", link: "" } ]},
              { nome: "Experimentos",  itens: [ { titulo: "Experimento 02 · Gerenciando processos", descricao: "ps, top, kill e sinais", tipo: "PDF", link: "" } ]},
              { nome: "Exercícios",    itens: [ { titulo: "Lista 01 · Processos", tipo: "PDF", link: "" } ]}
            ]
          },
          {
            id: "escalonamento",
            titulo: "Escalonamento de CPU",
            descricao: "FCFS, SJF, prioridades e Round-Robin.",
            pastas: [
              { nome: "Apresentações", itens: [ { titulo: "Aula 03 · Escalonamento", tipo: "PPTX", link: "" } ]},
              { nome: "Experimentos",  itens: [ { titulo: "Experimento 03 · Simulando escalonadores", tipo: "PDF", link: "" } ]},
              { nome: "Exercícios",    itens: [ { titulo: "Lista 02 · Escalonamento", tipo: "PDF", link: "" } ]}
            ]
          }
        ]
      }
    ]
  }
];