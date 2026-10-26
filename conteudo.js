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
            id: "primeiros-passos",
            titulo: "Primeiros passos",
            descricao: "Introdução, ambiente, formatação",
            pastas: [
              { nome: "Apresentações", itens: [
                { titulo: "Módulo 01 · Primeiros passos", tipo: "PDF", link: "ibasica/planilhas/slides/m1_primeiros_passos_calc.pdf" },                
              ]},
              { nome: "Exercícios", itens: [
                { titulo: "Módulo 01 · Exercícios", tipo: "ODS", link: "ibasica/planilhas/exercicios/m1_exercicios.ods" },                
              ]},
              { nome: "Apostilas", itens: [
                { titulo: "Módulo 01 · Primeiros Passos", tipo: "HTML", link: "ibasica/planilhas/apostilas/apostila_M1_LibreOffice_Calc.html" }
              ]}
            ]
          },
          
          {
            id: "formulas-e-funcoes",
            titulo: "Fórmulas e Funções",
            descricao: "Fórmulas, funções",
            pastas: [
              { nome: "Apresentações", itens: [                
                { titulo: "Módulo 02 · Fórmulas e Funções", tipo: "PDF", link: "ibasica/planilhas/slides/m2_formulas_funcoes_calc.pdf" },                
              ]},
              { nome: "Exercícios", itens: [                
                { titulo: "Módulo 02 · Exercícios", tipo: "ODS", link: "" },                
              ]},
              { nome: "Apostilas", itens: [
                { titulo: "Módulo 02 · Fórmulas e Funções", tipo: "HTML", link: "ibasica/planilhas/apostilas/apostila_M2_LibreOffice_Calc.html" }
              ]}
            ]
          },
          
          {
            id: "Lógica-e-Decisões",
            titulo: "Lógica e Decisões",
            descricao: "Lógica, decisões",
            pastas: [
              { nome: "Apresentações", itens: [                
                { titulo: "Módulo 03 · Lógica e Decisões", tipo: "PDF", link: "ibasica/planilhas/slides/m3_logica_decisoes_calc.pdf" },
              ]},
              { nome: "Exercícios", itens: [                
                { titulo: "Módulo 03 · Exercícios", tipo: "ODS", link: "ibasica/planilhas/exercicios/m3_exercicios.ods" },
              ]},
              { nome: "Apostilas", itens: [
                { titulo: "Módulo 03 · Lógica e Decisões", tipo: "HTML", link: "ibasica/planilhas/apostilas/apostila_M3_LibreOffice_Calc.html" }
              ]}
            ]
          },

          {
            id: "organizar-buscar-dados",
            titulo: "Organizar e Buscar Dados",
            descricao: "Organização e busca de dados em planilhas.",
            pastas: [
              { nome: "Apresentações", itens: [                
                { titulo: "Módulo 04 · Organizar e buscar dados", tipo: "PDF", link: "ibasica/planilhas/slides/m4_organizar_buscar_dados_calc.pdf" },
              ]},
              { nome: "Exercícios", itens: [                
                { titulo: "Módulo 04 · Exercícios", tipo: "ODS", link: "ibasica/planilhas/exercicios/m4_exercicios.ods" },
              ]},
              { nome: "Apostilas", itens: [
                { titulo: "Módulo 04 · Organizar e buscar dados", tipo: "HTML", link: "ibasica/planilhas/apostilas/apostila_M4_LibreOffice_Calc.html" }
              ]}
            ]
          },

          {
            id: "planilhas-outros",
            titulo: "Outros",
            descricao: "",
            pastas: [
              { nome: "Trabalhos", itens: [                
                { titulo: "Módulo 04 · Organizar e buscar dados", tipo: "PDF", link: "ibasica/planilhas/slides/m4_organizar_buscar_dados_calc.pdf" },
              ]},              
            ]
          },

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
                  {titulo: "Aula 01 · Processos", tipo: "PDF", link: "so/apresentacoes/cap5-processos.pdf"},
                  {titulo: "Aula 02 · Threads", tipo: "PPTX", link: "https://docs.google.com/presentation/d/1MufNdLVFhQmRCAj9-merzqm9yjJcv6Sg/edit?usp=sharing&ouid=111962110626612264587&rtpof=true&sd=true"},
                  {titulo: "Aula 02 · Threads", tipo: "PDF", link: "so/apresentacoes/cap6-thread.pdf"},
                  {titulo: "Aula 03 · Comunicação e Sincronização", tipo: "PPTX", link: "https://docs.google.com/presentation/d/15w59vwbGCV84-NUmpgpHNrs_hNVSa16n/edit?usp=sharing&ouid=111962110626612264587&rtpof=true&sd=true"},
                  {titulo: "Aula 03 · Comunicação e Sincronização", tipo: "PDF", link: "so/apresentacoes/cap7-sincronizacao_comunicacao.pdf"},
                ]
              },
             
              { 
                nome: "Apostilas", 
                itens: [ 
                  {titulo: "Aula 01 · Processos", tipo: "HTML", link: "so/apostila-processos.html"},
                  {titulo: "Aula 02 · Threads", tipo: "HTML", link: "so/apostila-threads.html"},
                  {titulo: "Aula 03 · Comunicação e Sincronização", tipo: "HTML", link: "so/apostila-sincronizacao.html"},
                ]
              },
             
              { 
                nome: "Práticas de laboratório", 
                itens: [ 
                  { titulo: "Prática 01 · Processos", descricao: "Práticas com o simulador SOSIM", tipo: "PDF", link: "https://drive.google.com/file/d/1N_3tBp_kyQu8btklR6AzyLbO-kyuPiOi/view?usp=sharing"},
                  { titulo: "Prática 01 · Processos - Respostas", descricao: "Respostas e revisão do tema.", tipo: "HTML", link: "so/lab/lab-processos-respostas.html"},
                  { titulo: "Prática 02 · Threads", descricao: "Práticas com Threads", tipo: "HTML", link: "so/lab/lab-threads.html" },
                  { titulo: "Prática 02 · Threads - Respostas", descricao: "Respostas e revisão do tema.", tipo: "HTML", link: "so/lab/lab-threads-respostas.html"},
                  { titulo: "Prática 03 · Comunicação e Sincronização", descricao: "Práticas com comunicação e sincronização", tipo: "HTML", link: "so/lab/lab-sincronizacao.html" },
                  { titulo: "Prática 03 · Comunicação e Sincronização - Respostas", descricao: "Respostas e revisão do tema.", tipo: "HTML", link: "so/lab/lab-sincronizacao-respostas.html"},
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

          {
            id: "sistemas-de-arquivos",
            titulo: "Sistema de Arquivos",
            descricao: "Sistemas de arquivos, gerência de arquivos e diretórios.",
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
            id: "entrada-e-saida",
            titulo: "Entrada e Saída",
            descricao: "Gerência de dispositivos de entrada e saída",
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