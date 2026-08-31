/* =========================================================
   ☠️ CYBER MAFIA PROFESSIONAL
   BANCO CENTRAL DE DESAFIOS
   5 FASES × 100 DESAFIOS = 500
   ========================================================= */


/* =========================================================
   GABARITO OFICIAL — FASE 01
   ========================================================= */

const phase1Answers = [
  "B","D","E","A","C","E","B","A","D","C",
  "B","A","E","D","C","A","B","D","C","E",
  "A","E","C","B","D","C","B","D","E","A",
  "C","D","B","A","E","B","E","C","D","A",
  "E","C","A","B","D","C","A","E","B","C",
  "D","B","B","E","C","B","D","A","C","E",
  "A","D","C","B","E","C","B","D","A","E",
  "B","D","C","A","E","E","B","E","D","C",
  "A","B","D","E","A","C","B","D","C","A",
  "E","D","A","B","C","D","E","A","C","B"
];


/* =========================================================
   NOMES DAS FASES
   ========================================================= */

const phaseNames = {

  1:"Redes & Fundamentos",

  2:"Linux & Sistemas",

  3:"Segurança da Informação",

  4:"Hacking Ético & Pentest",

  5:"Laboratório & CTF"

};


/* =========================================================
   TÓPICOS
   ========================================================= */

const topics = {

  1:[
    "modelo OSI",
    "TCP/IP",
    "endereçamento IPv4",
    "sub-redes",
    "DNS",
    "DHCP",
    "HTTP e HTTPS",
    "portas de rede",
    "roteamento",
    "switches",
    "ARP",
    "ICMP",
    "firewalls",
    "VPN",
    "NAT"
  ],

  2:[
    "terminal Linux",
    "permissões",
    "usuários",
    "grupos",
    "processos",
    "sistema de arquivos",
    "logs",
    "serviços",
    "SSH",
    "variáveis de ambiente",
    "pipes",
    "redirecionamento",
    "pacotes",
    "shell",
    "administração"
  ],

  3:[
    "confidencialidade",
    "integridade",
    "disponibilidade",
    "autenticação",
    "autorização",
    "controle de acesso",
    "criptografia",
    "hash",
    "backup",
    "risco",
    "vulnerabilidade",
    "ameaça",
    "phishing",
    "engenharia social",
    "resposta a incidentes"
  ],

  4:[
    "escopo de pentest",
    "reconhecimento",
    "enumeração",
    "modelagem de ameaças",
    "validação de vulnerabilidades",
    "OWASP",
    "aplicações web",
    "sessões",
    "autenticação",
    "controle de acesso",
    "logs",
    "evidências",
    "relatórios",
    "ética",
    "autorização"
  ],

  5:[
    "análise de cenário",
    "CTF",
    "forense básica",
    "logs",
    "identificação de indicadores",
    "triagem",
    "análise de rede",
    "laboratório",
    "documentação",
    "mitigação",
    "resposta a incidentes",
    "flags",
    "evidências",
    "raciocínio técnico",
    "solução de problemas"
  ]

};


/* =========================================================
   ALTERNATIVAS BASE
   ========================================================= */

const optionSets = {

  1:[
    "um protocolo ou conceito utilizado para comunicação em redes",
    "um componente físico ou lógico relacionado ao funcionamento da rede",
    "uma técnica utilizada para organizar ou transportar informações",
    "um mecanismo utilizado para controlar comunicação ou acesso",
    "uma característica que pode ser observada durante uma análise"
  ],

  2:[
    "analisar a situação antes de modificar o ambiente",
    "executar uma ação sem verificar suas consequências",
    "ignorar os registros disponíveis",
    "alterar configurações sem autorização",
    "eliminar evidências antes da investigação"
  ],

  3:[
    "reduzir o risco mantendo o controle adequado",
    "aumentar a exposição sem necessidade",
    "remover controles de segurança",
    "compartilhar informações sem validação",
    "ignorar o contexto do ambiente"
  ],

  4:[
    "definir claramente o que pode ser testado",
    "testar qualquer sistema encontrado",
    "ignorar as regras do ambiente",
    "evitar documentar resultados",
    "realizar ações fora do escopo"
  ],

  5:[
    "analisar evidências dentro de um ambiente controlado",
    "atacar sistemas reais sem autorização",
    "modificar sistemas de terceiros",
    "ignorar as regras do laboratório",
    "buscar acesso fora do escopo"
  ]

};


/* =========================================================
   FUNÇÃO PARA ESCOLHER ALTERNATIVAS
   ========================================================= */

function rotateOptions(base,correctIndex){

  const result = [];

  for(let i=0;i<5;i++){

    result.push(
      base[(i+correctIndex)%base.length]
    );

  }

  return result;

}


/* =========================================================
   TEXTOS DE PERGUNTAS
   ========================================================= */

function createQuestionText(
  phase,
  number,
  topic
){

  const templates = [

    `Durante uma análise de ${topic}, qual decisão demonstra melhor compreensão do conceito?`,

    `Um aluno está estudando ${topic} em um laboratório autorizado. Qual abordagem é mais adequada?`,

    `Considere um cenário envolvendo ${topic}. Qual alternativa representa a interpretação mais correta?`,

    `Ao investigar um problema relacionado a ${topic}, qual informação deve receber maior atenção inicialmente?`,

    `Em uma situação prática de ${topic}, qual ação demonstra uma postura técnica adequada?`

  ];

  return templates[
    number % templates.length
  ];

}


/* =========================================================
   EXPLICAÇÕES
   ========================================================= */

function createExplanation(
  phase,
  number,
  topic,
  answer
){

  return `Nesta questão da Fase ${phase}, o foco é ${topic}. 
A alternativa ${answer} foi definida como correta no gabarito desta questão. 
A interpretação deve considerar o contexto apresentado, os princípios de segurança,
a análise técnica e, quando aplicável, a autorização e o escopo do ambiente.
Em um treinamento profissional, decisões devem ser documentadas e realizadas
somente dentro de ambientes permitidos.`

}


/* =========================================================
   CRIA QUESTÃO
   ========================================================= */

function buildQuestion(
  phase,
  number,
  answer
){

  const topicList =
    topics[phase];

  const topic =
    topicList[
      (number-1) %
      topicList.length
    ];

  const base =
    optionSets[phase];

  const answerIndex =
    ["A","B","C","D","E"]
      .indexOf(answer);

  const rotated =
    rotateOptions(
      base,
      answerIndex
    );


  const options = {

    A:rotated[0],

    B:rotated[1],

    C:rotated[2],

    D:rotated[3],

    E:rotated[4]

  };


  return {

    id:`CM-${phase}-${String(number).padStart(3,"0")}`,

    phase:phase,

    number:number,

    title:
      `Fase ${phase} — Desafio ${number}`,

    question:
      createQuestionText(
        phase,
        number,
        topic
      ),

    options:options,

    answer:answer,

    explanation:
      createExplanation(
        phase,
        number,
        topic,
        answer
      ),

    difficulty:
      number <= 25
        ? "Iniciante"
        : number <= 50
          ? "Intermediário"
          : number <= 75
            ? "Avançado"
            : "Especialista",

    xp:
      10 +
      Math.floor(number/10)*2,

    topic:topic

  };

}


/* =========================================================
   GABARITOS DAS OUTRAS FASES
   ========================================================= */

const phase2Answers = [
"A","C","B","E","D","A","C","E","B","D",
"C","E","A","B","D","E","C","A","B","D",
"E","B","D","C","A","E","B","C","D","A",
"B","E","C","D","A","C","E","B","A","D",
"C","A","D","E","B","C","A","D","E","B",
"D","C","E","A","B","E","D","C","A","B",
"C","D","A","E","B","A","E","D","C","B",
"E","A","C","D","B","D","E","A","C","B",
"A","D","B","E","C","A","C","B","D","E",
"D","B","A","C","E","D","C","E","B","A"
];


const phase3Answers = [
"C","A","D","B","E","C","A","D","B","E",
"A","C","E","B","D","A","E","C","D","B",
"E","D","A","C","B","D","B","E","A","C",
"D","A","C","E","B","B","D","A","E","C",
"A","E","C","D","B","E","A","B","C","D",
"C","D","B","A","E","C","E","D","A","B",
"D","B","A","E","C","A","D","C","B","E",
"B","E","C","A","D","E","B","D","A","C",
"E","C","D","B","A","E","A","C","D","B",
"C","D","E","A","B","C","B","E","D","A"
];


const phase4Answers = [
"D","E","A","C","B","D","E","A","C","B",
"E","B","D","A","C","E","D","B","A","C",
"B","A","E","D","C","B","D","E","A","C",
"E","C","B","A","D","A","E","C","D","B",
"C","D","A","E","B","C","E","B","D","A",
"A","E","D","C","B","D","A","C","E","B",
"E","A","B","D","C","A","C","E","B","D",
"B","C","D","A","E","C","B","E","A","D",
"D","A","E","B","C","D","C","A","E","B",
"A","C","D","E","B","A","D","C","B","E"
];


const phase5Answers = [
"E","B","C","A","D","E","B","D","C","A",
"D","A","E","C","B","D","C","A","E","B",
"A","C","D","B","E","A","E","C","B","D",
"C","E","A","D","B","C","B","E","D","A",
"E","D","B","C","A","E","A","D","C","B",
"B","C","E","A","D","B","D","C","A","E",
"C","A","B","E","D","A","E","B","D","C",
"D","E","C","B","A","D","A","C","E","B",
"B","D","E","A","C","C","B","D","A","E",
"A","E","D","C","B","B","C","A","E","D"
];


/* =========================================================
   MONTAGEM DAS 5 FASES
   ========================================================= */

const challengesByPhase = {

  1:[],

  2:[],

  3:[],

  4:[],

  5:[]

};


for(let phase=1;phase<=5;phase++){

  let answers;

  if(phase===1)
    answers=phase1Answers;

  if(phase===2)
    answers=phase2Answers;

  if(phase===3)
    answers=phase3Answers;

  if(phase===4)
    answers=phase4Answers;

  if(phase===5)
    answers=phase5Answers;


  for(
    let number=1;
    number<=100;
    number++
  ){

    challengesByPhase[phase]
      .push(
        buildQuestion(
          phase,
          number,
          answers[number-1]
        )
      );

  }

}


/* =========================================================
   BANCO UNIFICADO
   ========================================================= */

const challenges = [

  ...challengesByPhase[1],

  ...challengesByPhase[2],

  ...challengesByPhase[3],

  ...challengesByPhase[4],

  ...challengesByPhase[5]

];


/* =========================================================
   VERIFICAÇÃO DO BANCO
   ========================================================= */

console.log(
  "☠️ Cyber Mafia Professional"
);

console.log(
  "Total de desafios:",
  challenges.length
);

console.log(
  "Fase 01:",
  challengesByPhase[1].length
);

console.log(
  "Fase 02:",
  challengesByPhase[2].length
);

console.log(
  "Fase 03:",
  challengesByPhase[3].length
);

console.log(
  "Fase 04:",
  challengesByPhase[4].length
);

console.log(
  "Fase 05:",
  challengesByPhase[5].length
);
