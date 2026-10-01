/* =========================================================
   CATÁLOGO DE RECURSOS
   Este é o único arquivo que você precisa editar para publicar
   um novo material. Copie um bloco { ... }, cole no início da
   lista, altere os campos e salve.

   CAMPOS
   titulo     (obrigatório) nome do recurso
   descricao  (obrigatório) uma ou duas frases sobre o recurso
   turma      (obrigatório) uma turma ou uma lista de turmas:
                            Anos Iniciais: "exploradores" | "construtores" | "inovadores"
                            Anos Finais:   "descobridores" | "criadores" | "inventores" | "olimpica"
                            ex.: turma: "criadores"
                            ex.: turma: ["exploradores", "construtores"]
   tipo       (obrigatório) "plano" | "atividade" | "apostila" | "projeto"
                            | "codigo" | "video" | "rubrica" | "apresentacao"
   link       (obrigatório) nome do arquivo enviado (ex.: "sensor-de-luz.pdf") ou endereço externo
   data       (obrigatório) data de publicação no formato "AAAA-MM-DD"
   duracao    (opcional)    ex.: "2 aulas de 50 min"
   bncc       (opcional)    lista de códigos de habilidades da BNCC
   etiquetas  (opcional)    lista de palavras-chave para a busca
   autor      (opcional)    professor(a) responsável, aparece no cartão
   id         (automático)  criado pela Área da equipe; não altere
   extra      (opcional)    { rotulo: "Ver código", link: "..." } segundo botão

   Recursos publicados há menos de 30 dias recebem o selo "Novo".
   Atenção às vírgulas entre os blocos e às aspas nos textos.
   ========================================================= */

/* MODELO PARA COPIAR (apague as barras e asteriscos ao usar)

  {
    titulo: "Nome do recurso",
    descricao: "Uma ou duas frases explicando o que é e para que serve.",
    turma: "criadores",
    tipo: "atividade",
    link: "nome-do-arquivo.pdf",
    data: "2026-09-25",
    duracao: "2 aulas de 50 min",
    etiquetas: ["Arduino", "Sensores"]
  },

*/

const RECURSOS = [
  {
    "id": "cesta-cheia-2026-10-01",
    "titulo": "Cesta Cheia",
    "descricao": "Jogo de cidadania em que os estudantes levam alimentos do Banco de Alimentos até as casas de um bairro, em três ruas, do amanhecer ao pôr do sol. A cada rua a cesta cresce e o tempo aperta, e a partida termina com orientações para doar de verdade.",
    "turma": [
      "construtores",
      "inovadores",
      "descobridores"
    ],
    "tipo": "atividade",
    "link": "cesta-cheia.html",
    "data": "2026-10-01",
    "duracao": "5 minutos por partida",
    "etiquetas": [
      "Cidadania",
      "Solidariedade",
      "Doação de alimentos",
      "Segurança alimentar",
      "Empatia",
      "ODS 2",
      "Jogo",
      "Interativo"
    ]
  },
  {
    "id": "oficina-de-maquinas-simples-2026-09-29",
    "titulo": "Oficina de Máquinas Simples",
    "descricao": "Laboratório 3D de blocos de montar com 42 peças e uma mesa ampliada de 24 x 24 pinos, que comporta centenas de blocos. Os estudantes constroem e testam alavanca, plano inclinado, polia, roda e eixo, cunha e parafuso, exploram mecanismos com motor (engrenagens, correia, sem-fim, came e biela) e programam um robô com sensor de distância. Inclui 14 missões com perguntas de reflexão. A construção fica salva no navegador.",
    "turma": [
      "construtores",
      "inovadores",
      "descobridores"
    ],
    "tipo": "atividade",
    "link": "oficina-maquinas-simples.html",
    "data": "2026-09-29",
    "etiquetas": [
      "Máquinas simples",
      "Alavanca",
      "Plano inclinado",
      "Polia",
      "Roda e eixo",
      "Cunha",
      "Parafuso",
      "Engrenagem",
      "Correia",
      "Came",
      "Biela",
      "Programação em blocos",
      "Sensor",
      "Robótica",
      "Blocos de montar",
      "3D",
      "Interativo"
    ]
  },
  {
    "id": "manual-de-programacao-do-robo-educacional-2026-09-23",
    "titulo": "Manual de Programação do Robô Educacional",
    "descricao": "Guia de estudo com as seis capacidades do robô, a estrutura do código em C++ para Arduino, documentação técnica comentada e um exemplo prático, acompanhado de autoavaliação de progresso.",
    "turma": "olimpica",
    "tipo": "apostila",
    "link": "manual-robo-equipe-olimpica.html",
    "data": "2026-09-23",
    "etiquetas": [
      "Arduino",
      "C++",
      "Debounce",
      "Documentação técnica",
      "Autoavaliação"
    ]
  },
  {
    "titulo": "A Roda dos Segredos: Cifra de César",
    "descricao": "Atividade interativa em que as crianças giram um disco de letras para descobrir como Júlio César escondia mensagens e escrevem seus próprios recados secretos. Inclui o Desafio do Mensageiro, com 50 mensagens para decifrar.",
    "turma": [
      "exploradores",
      "construtores",
      "inovadores"
    ],
    "tipo": "atividade",
    "link": "cifra-roda.html",
    "data": "2026-09-22",
    "duracao": "1 a 2 aulas",
    "etiquetas": [
      "Criptografia",
      "Cifra de César",
      "Segurança de dados",
      "Roma Antiga",
      "Interativo"
    ],
    "extra": {
      "rotulo": "Desafio do Mensageiro",
      "link": "cifra-desafio.html"
    },
    "id": "a-roda-dos-segredos-cifra-de-cesar-2026-09-22"
  }
];
