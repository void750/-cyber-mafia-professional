/* =========================================================
   ☠️ CYBER MAFIA PROFESSIONAL
   BANCO DE 500 DESAFIOS
   5 FASES × 100
   A/B/C/D/E
   ========================================================= */

const GABARITO = (
"01B26C51D76E02D27B52A77B03E28D53B78E04A29E54E79D05C30A55C80C"+
"06E31C56B81A07B32D57D82B08A33B58A83D09D34A59C84E10C35E60E85A"+
"11B36B61A86C12A37E62D87B13E38C63C88D14D39D64B89C15C40A65E90A"+
"16A41E66C91E17B42C67B92D18D43A68D93A19C44B69A94B20E45D70E95C"+
"21A46C71B96D22E47A72D97E23C48E73C98A24B49B74A99C25D50C75E100B"
);

function montarGabarito(){
  const resultado={};

  const partes=GABARITO.match(/\d{2}[A-E]/g)||[];

  partes.forEach(item=>{
    const numero=parseInt(item.slice(0,2));
    const resposta=item.slice(2);
    resultado[numero]=resposta;
  });

  return resultado;
}

const GABARITO_FASE=montarGabarito();


/* =========================================================
   BANCO DE CONTEÚDOS
   ========================================================= */

const BASE={

1:{
nome:"Redes & Fundamentos",
icon:"🌐",
temas:[
["IPv4","identificar corretamente um endereço IPv4 dentro de uma rede","o endereço IPv4"],
["Máscara","separar a parte de rede da parte de host","a máscara de sub-rede"],
["Gateway","encaminhar tráfego destinado a outra rede","o gateway padrão"],
["DNS","resolver nomes de domínio para endereços IP","o serviço DNS"],
["DHCP","entregar automaticamente configurações de rede","o serviço DHCP"],
["ARP","relacionar um IPv4 local ao endereço MAC correspondente","o protocolo ARP"],
["TCP","garantir entrega ordenada e confiável dos dados","o protocolo TCP"],
["UDP","priorizar baixa latência quando alguma perda é aceitável","o protocolo UDP"],
["HTTPS","proteger comunicação HTTP usando criptografia de transporte","HTTPS com TLS"],
["SSH","administrar remotamente um sistema de forma segura","SSH"]
]},

2:{
nome:"Linux & Sistemas",
icon:"🐧",
temas:[
["Permissões","controlar quem pode ler, escrever ou executar um arquivo","as permissões do arquivo"],
["sudo","executar uma tarefa autorizada com privilégios elevados","o comando sudo"],
["Processos","representar programas atualmente em execução","um processo"],
["PID","identificar individualmente um processo","o PID"],
["systemd","gerenciar serviços e inicialização em muitas distribuições modernas","systemd"],
["grep","localizar texto dentro de arquivos","grep"],
["chmod","alterar permissões de arquivos","chmod"],
["chown","alterar o proprietário de um arquivo","chown"],
["Logs","registrar eventos importantes do sistema","os arquivos de log"],
["cron","executar tarefas automaticamente em horários definidos","cron"]
]},

3:{
nome:"Segurança da Informação",
icon:"🛡️",
temas:[
["Confidencialidade","impedir que pessoas não autorizadas visualizem informações","confidencialidade"],
["Integridade","detectar ou impedir alterações não autorizadas","integridade"],
["Disponibilidade","manter sistemas e dados acessíveis quando necessários","disponibilidade"],
["MFA","adicionar fatores adicionais à autenticação","MFA"],
["Phishing","enganar usuários para obter informações por meio de mensagens falsas","phishing"],
["Hash","verificar se dados foram alterados","um hash criptográfico"],
["Backup","recuperar informações após perda ou incidente","um backup testado"],
["Menor privilégio","limitar cada conta ao mínimo necessário","o princípio do menor privilégio"],
["Segmentação","limitar movimentação entre diferentes partes da rede","segmentação de rede"],
["Patching","corrigir vulnerabilidades conhecidas","uma atualização de segurança"]
]},

4:{
nome:"Hacking Ético & Pentest",
icon:"⚔️",
temas:[
["Escopo","definir quais sistemas podem ser avaliados","o escopo autorizado"],
["Reconhecimento","coletar informações antes de um teste","o reconhecimento"],
["Vulnerabilidade","identificar uma fraqueza que pode gerar risco","uma vulnerabilidade"],
["Evidências","registrar fatos para permitir reprodução do resultado","as evidências documentadas"],
["Pentest","avaliar riscos de segurança dentro de uma autorização","um teste de penetração autorizado"],
["OWASP","consultar materiais sobre riscos comuns de aplicações web","OWASP"],
["Validação","confirmar uma possível falha sem causar impacto indevido","a validação controlada"],
["Relatório","documentar descobertas e recomendações","o relatório de pentest"],
["Divulgação","comunicar uma falha ao responsável de maneira apropriada","a divulgação responsável"],
["Regra de parada","interromper um teste quando ocorre impacto não planejado","a regra de parada"]
]},

5:{
nome:"Laboratório & CTF",
icon:"🚩",
temas:[
["CTF","demonstrar a resolução de um desafio em ambiente autorizado","a flag do desafio"],
["Isolamento","reduzir o risco de um laboratório afetar sistemas reais","o isolamento do laboratório"],
["Snapshot","retornar uma máquina virtual a um estado anterior","um snapshot"],
["Flag","marcar a conclusão de um desafio","uma flag"],
["Logs","correlacionar eventos durante uma investigação simulada","a análise dos logs"],
["Troubleshooting","investigar uma falha usando evidências e mudanças recentes","troubleshooting sistemático"],
["Documentação","registrar passos para permitir reprodução e aprendizado","a documentação"],
["Backup","proteger o ambiente contra perda acidental","um backup ou snapshot"],
["Rede virtual","separar máquinas de treinamento da rede real","uma rede virtual isolada"],
["Lições aprendidas","transformar um desafio concluído em conhecimento reutilizável","as lições aprendidas"]
]}

};


/* =========================================================
   VARIAÇÕES DE CENÁRIO
   ========================================================= */

const CENARIOS=[

"Durante uma aula prática de cibersegurança,",
"Em um laboratório autorizado,",
"Durante uma auditoria interna controlada,",
"Um analista recebe o seguinte cenário:",
"Durante uma simulação corporativa,",
"Em um ambiente de treinamento isolado,",
"Uma equipe de segurança está analisando um caso:",
"Durante uma revisão técnica autorizada,",
"Em um exercício educacional de segurança,",
"Um instrutor apresenta este problema aos alunos:"

];

const PERGUNTAS=[

"qual alternativa representa a decisão tecnicamente mais adequada?",
"qual conceito explica melhor essa situação?",
"qual recurso deve ser utilizado nesse caso?",
"qual ação deve ser priorizada?",
"qual alternativa demonstra o entendimento correto?",
"qual solução atende diretamente ao objetivo?",
"qual procedimento é mais apropriado?",
"qual resposta está tecnicamente correta?",
"qual escolha mantém o ambiente seguro?",
"qual alternativa resolve o problema apresentado?"

];


/* =========================================================
   DISTRIBUIÇÃO DAS ALTERNATIVAS
   ========================================================= */

function embaralharAlternativas(correta,numero){

  const erradas=[
    "um endereço MAC",
    "um nome de usuário",
    "uma senha administrativa",
    "um arquivo de configuração",
    "um registro de log",
    "um processo do sistema",
    "um certificado digital",
    "um servidor físico",
    "uma porta TCP",
    "uma tabela de roteamento",
    "um arquivo temporário",
    "um serviço de impressão",
    "uma interface gráfica",
    "um backup antigo",
    "uma conta compartilhada",
    "um navegador web"
  ];

  const usadas=[];

  for(let i=0;i<erradas.length;i++){

    if(erradas[i]!==correta && !usadas.includes(erradas[i])){
      usadas.push(erradas[i]);
    }

    if(usadas.length===4) break;

  }

  const letras=["A","B","C","D","E"];
  const corretaLetra=GABARITO_FASE[numero];

  const resposta={};

  resposta[corretaLetra]=correta;

  let pos=0;

  letras.forEach(letra=>{

    if(!resposta[letra]){
      resposta[letra]=usadas[pos++];
    }

  });

  return resposta;
}


/* =========================================================
   GERADOR DOS 500 DESAFIOS
   ========================================================= */

const challenges=[];

for(let fase=1;fase<=5;fase++){

  const dados=BASE[fase];

  for(let numero=1;numero<=100;numero++){

    const indiceTema=(numero-1)%10;
    const indiceCenario=Math.floor((numero-1)/10);

    const tema=dados.temas[indiceTema];

    const nomeTema=tema[0];
    const objetivo=tema[1];
    const correta=tema[2];

    let dificuldade="Básico";

    if(numero>25) dificuldade="Intermediário";
    if(numero>60) dificuldade="Avançado";
    if(numero>85) dificuldade="Especialista";

    const pergunta=
      `${CENARIOS[indiceCenario]} `+
      `o cenário exige ${objetivo}; `+
      `${PERGUNTAS[indiceCenario]}`;

    const alternativas=
      embaralharAlternativas(correta,numero);

    const resposta=
      GABARITO_FASE[numero];

    const xp=
      10+
      fase*2+
      (dificuldade==="Intermediário"?5:
      dificuldade==="Avançado"?10:
      dificuldade==="Especialista"?15:0);

    challenges.push({

      id:`F${String(fase).padStart(2,"0")}-${String(numero).padStart(3,"0")}`,

      phase:fase,

      number:numero,

      title:nomeTema,

      difficulty:dificuldade,

      question:pergunta,

      options:alternativas,

      answer:resposta,

      explanation:
        `A alternativa ${resposta} é a correta. `+
        `Neste cenário, o conceito principal é ${nomeTema}. `+
        `A resposta está relacionada a ${correta}. `+
        `O exercício deve ser realizado somente em ambientes `+
        `autorizados e controlados.`,

      xp:xp

    });

  }

}


/* =========================================================
   ACESSO POR FASE
   ========================================================= */

const challengesByPhase={

  1:challenges.filter(q=>q.phase===1),

  2:challenges.filter(q=>q.phase===2),

  3:challenges.filter(q=>q.phase===3),

  4:challenges.filter(q=>q.phase===4),

  5:challenges.filter(q=>q.phase===5)

};


/* =========================================================
   VALIDAÇÃO
   ========================================================= */

console.assert(
  challenges.length===500,
  "ERRO: o banco não possui 500 desafios."
);

for(let fase=1;fase<=5;fase++){

  console.assert(
    challengesByPhase[fase].length===100,
    `ERRO: fase ${fase} não possui 100 desafios.`
  );

}

console.log(
  "☠️ CYBER MAFIA: 500 desafios carregados."
);
