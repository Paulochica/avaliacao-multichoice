import { Category, Question } from './types';

export const QUESTIONS: Question[] = [
  // Web 2.0
  {
    id: 1,
    text: "Uma mudança significativa trazida pela Web 2.0 é:",
    category: Category.WEB2,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "O aumento do tamanho dos arquivos HTML." },
      { id: 'b', text: "A eliminação da necessidade de servidores." },
      { id: 'c', text: "A capacidade de usuários finais criarem e editarem conteúdo." },
      { id: 'd', text: "A navegação exclusivamente por hiperlinks." }
    ]
  },
  {
    id: 2,
    text: "O que torna a Web 2.0 mais participativa?",
    category: Category.WEB2,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "Apenas desenvolvedores podem editar o conteúdo." },
      { id: 'b', text: "Usuários finais podem criar, editar e compartilhar conteúdo." },
      { id: 'c', text: "Ela utiliza exclusivamente HTML estático." },
      { id: 'd', text: "A eliminação de mecanismos de busca." }
    ]
  },
  {
    id: 3,
    text: "Como as redes sociais se beneficiaram da Web 2.0?",
    category: Category.WEB2,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "A Web 2.0 não afetou as redes sociais." },
      { id: 'b', text: "Elas se tornaram interativas e colaborativas, permitindo o compartilhamento de conteúdo." },
      { id: 'c', text: "As redes sociais existiam apenas na Web 1.0." },
      { id: 'd', text: "Elas permitiram apenas a comunicação por e-mail." }
    ]
  },
  {
    id: 4,
    text: "Qual dessas tecnologias foi importante para o desenvolvimento da Web 2.0?",
    category: Category.WEB2,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "AJAX." },
      { id: 'b', text: "CGI." },
      { id: 'c', text: "FTP." },
      { id: 'd', text: "Telnet." }
    ]
  },
  {
    id: 5,
    text: "A Web 2.0 é frequentemente associada ao surgimento de quais tecnologias?",
    category: Category.WEB2,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "Programas desktop baseados em C++." },
      { id: 'b', text: "Java Applets e CGI." },
      { id: 'c', text: "Serviços de telnet e SSH." },
      { id: 'd', text: "Blogs, redes sociais e wikis." }
    ]
  },
  {
    id: 6,
    text: "A Web 2.0 facilitou a criação de:",
    category: Category.WEB2,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Comunidades online e colaboração em massa." },
      { id: 'b', text: "Aplicações que não requerem navegação." },
      { id: 'c', text: "Sites exclusivamente de leitura." },
      { id: 'd', text: "Ferramentas sem suporte a multimídia." }
    ]
  },
  {
    id: 7,
    text: "A Web 2.0 transformou a internet ao permitir:",
    category: Category.WEB2,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "Criação de páginas web sem interatividade." },
      { id: 'b', text: "Utilização apenas de HTML." },
      { id: 'c', text: "Uploads, interações e compartilhamentos entre usuários." },
      { id: 'd', text: "Exclusivamente o download de conteúdo." }
    ]
  },
  {
    id: 8,
    text: "Uma das principais características da Web 2.0 é:",
    category: Category.WEB2,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "Navegação sem interação." },
      { id: 'b', text: "Distribuição passiva de informações pelos websites." },
      { id: 'c', text: "Capacitação dos usuários para gerar e compartilhar conteúdo." },
      { id: 'd', text: "Maior controle das empresas sobre o conteúdo gerado." }
    ]
  },
  {
    id: 9,
    text: "A Web 2.0 é caracterizada por:",
    category: Category.WEB2,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "Uso exclusivo de HTML estático." },
      { id: 'b', text: "Ausência de compartilhamento de arquivos." },
      { id: 'c', text: "Maior interatividade e colaboração em tempo real." },
      { id: 'd', text: "Aplicações monolíticas." }
    ]
  },
  {
    id: 10,
    text: "O uso de aplicativos como Facebook, Google Drive e Dropbox é possível devido à:",
    category: Category.WEB2,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "Web 1.0." },
      { id: 'b', text: "Web 3.0." },
      { id: 'c', text: "Tecnologias legadas da internet." },
      { id: 'd', text: "Web 2.0." }
    ]
  },
  // Networking
  {
    id: 11,
    text: "Em qual camada do modelo OSI opera o protocolo HTTP?",
    category: Category.NETWORK,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "Camada de Rede" },
      { id: 'b', text: "Camada de Aplicação" },
      { id: 'c', text: "Camada de Transporte" },
      { id: 'd', text: "Camada Física" }
    ]
  },
  {
    id: 12,
    text: "Qual é a função principal do protocolo HTTP na internet?",
    category: Category.NETWORK,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Transferir hipertexto entre clientes e servidores." },
      { id: 'b', text: "Transmitir pacotes criptografados." },
      { id: 'c', text: "Gerenciar a segurança de pacotes na Web." },
      { id: 'd', text: "Controlar o tráfego de rede." }
    ]
  },
  {
    id: 13,
    text: "Qual a principal função do protocolo POP3?",
    category: Category.NETWORK,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Gerenciar o download de e-mails de servidores." },
      { id: 'b', text: "Gerenciar a transferência de arquivos entre redes." },
      { id: 'c', text: "Prover segurança em transferências HTTP." },
      { id: 'd', text: "Criar hiperligações em páginas web." }
    ]
  },
  {
    id: 14,
    text: "Qual a principal característica da hipermídia em comparação ao hipertexto?",
    category: Category.NETWORK,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "Exibição de documentos apenas no formato HTML." },
      { id: 'b', text: "Uso de links somente em textos." },
      { id: 'c', text: "Fusão de várias mídias em um ambiente interativo." },
      { id: 'd', text: "Utilização de redes sociais." }
    ]
  },
  {
    id: 15,
    text: "O que caracteriza uma sessão HTTP?",
    category: Category.NETWORK,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "A transferência de pacotes encriptados." },
      { id: 'b', text: "Uma conexão permanente entre cliente e servidor." },
      { id: 'c', text: "Uma sequência de transações requisição-resposta." },
      { id: 'd', text: "O gerenciamento de pacotes em tempo real." }
    ]
  },
  {
    id: 16,
    text: "O que o protocolo HTTPS adiciona ao HTTP?",
    category: Category.NETWORK,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "Acesso limitado a websites." },
      { id: 'b', text: "Redução de latência." },
      { id: 'c', text: "Compressão de dados." },
      { id: 'd', text: "Criptografia para garantir segurança na transferência de dados." }
    ]
  },
  {
    id: 17,
    text: "O que define o protocolo ICMP?",
    category: Category.NETWORK,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "Protocolo de transferência de hipertexto." },
      { id: 'b', text: "Protocolo de mensagens de controle da internet." },
      { id: 'c', text: "Protocolo de transmissão de vídeos." },
      { id: 'd', text: "Protocolo de gerenciamento de arquivos." }
    ]
  },
  {
    id: 18,
    text: "Qual dos seguintes métodos de requisição HTTP é usado para enviar dados de um cliente para um servidor?",
    category: Category.NETWORK,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "PUT" },
      { id: 'b', text: "GET" },
      { id: 'c', text: "POST" },
      { id: 'd', text: "HEAD" }
    ]
  },
  {
    id: 19,
    text: "O que é o TCP/IP?",
    category: Category.NETWORK,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Um protocolo de camadas utilizado na internet para transmissão de dados." },
      { id: 'b', text: "Um protocolo específico para transferência de e-mails." },
      { id: 'c', text: "Um formato de arquivo para web design." },
      { id: 'd', text: "Uma ferramenta para criptografar dados." }
    ]
  },
  {
    id: 20,
    text: "Qual camada do modelo OSI é responsável por endereçar e rotear pacotes?",
    category: Category.NETWORK,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "Camada de Aplicação" },
      { id: 'b', text: "Camada de Rede" },
      { id: 'c', text: "Camada de Transporte" },
      { id: 'd', text: "Camada de Apresentação" }
    ]
  },
  // HTML & CSS
  {
    id: 21,
    text: "Qual das seguintes opções NÃO é um tipo de seletor em CSS?",
    category: Category.HTML_CSS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Seletor de layout" },
      { id: 'b', text: "Seletor de tipo" },
      { id: 'c', text: "Seletor de classe" },
      { id: 'd', text: "Seletor de ID" }
    ]
  },
  {
    id: 22,
    text: "Qual é a principal função da tag <head> em um documento HTML?",
    category: Category.HTML_CSS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Incluir metadados e links para scripts e folhas de estilo." },
      { id: 'b', text: "Exibir conteúdo visível ao usuário." },
      { id: 'c', text: "Exibir imagens e vídeos." },
      { id: 'd', text: "Criar cabeçalhos de parágrafo." }
    ]
  },
  {
    id: 23,
    text: "Qual é a principal diferença entre class e id em HTML/CSS?",
    category: Category.HTML_CSS,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "id é usado apenas para formatação, enquanto class é para estrutura." },
      { id: 'b', text: "Ambos são idênticos e não têm diferenças." },
      { id: 'c', text: "id é único para um elemento, enquanto class pode ser compartilhado por vários." },
      { id: 'd', text: "class é exclusivo e id pode ser reutilizado." }
    ]
  },
  {
    id: 24,
    text: "Qual das seguintes tags é usada para exibir uma lista ordenada?",
    category: Category.HTML_CSS,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "<li>" },
      { id: 'b', text: "<dl>" },
      { id: 'c', text: "<ul>" },
      { id: 'd', text: "<ol>" }
    ]
  },
  {
    id: 25,
    text: "O que o atributo target=\"_blank\" faz em um link <a>?",
    category: Category.HTML_CSS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Abre o link em uma nova aba ou janela." },
      { id: 'b', text: "Fecha a janela atual." },
      { id: 'c', text: "Abre o link na mesma janela." },
      { id: 'd', text: "Redireciona o usuário para a página inicial." }
    ]
  },
  {
    id: 26,
    text: "Qual tag HTML é usada para criar um parágrafo?",
    category: Category.HTML_CSS,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "<span>" },
      { id: 'b', text: "<div>" },
      { id: 'c', text: "<p>" },
      { id: 'd', text: "<br>" }
    ]
  },
  {
    id: 27,
    text: "O que o atributo src faz na tag <img>?",
    category: Category.HTML_CSS,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "Define a largura da imagem." },
      { id: 'b', text: "Especifica o caminho da imagem." },
      { id: 'c', text: "Define o título da imagem." },
      { id: 'd', text: "Especifica o texto alternativo da imagem." }
    ]
  },
  {
    id: 28,
    text: "Qual das seguintes tags é semântica em HTML5?",
    category: Category.HTML_CSS,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "<span>" },
      { id: 'b', text: "<div>" },
      { id: 'c', text: "<b>" },
      { id: 'd', text: "<section>" }
    ]
  },
  {
    id: 29,
    text: "Qual atributo CSS define a cor de fundo de um elemento?",
    category: Category.HTML_CSS,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "color" },
      { id: 'b', text: "border-color" },
      { id: 'c', text: "background-color" },
      { id: 'd', text: "font-color" }
    ]
  },
  {
    id: 30,
    text: "O que o atributo alt em uma tag <img> define?",
    category: Category.HTML_CSS,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "O tamanho da imagem." },
      { id: 'b', text: "A URL da imagem." },
      { id: 'c', text: "O texto alternativo quando a imagem não é carregada." },
      { id: 'd', text: "A legenda da imagem." }
    ]
  },
  // JS
  {
    id: 31,
    text: "O que é hoisting em JavaScript?",
    category: Category.JS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "O comportamento de mover declarações de funções e variáveis para o topo de seu escopo antes da execução." },
      { id: 'b', text: "A técnica de vincular eventos ao DOM." },
      { id: 'c', text: "O processo de otimização de funções para melhor desempenho." },
      { id: 'd', text: "A criação dinâmica de objetos durante a execução do código." }
    ]
  },
  {
    id: 32,
    text: "Qual método é usado para manipular elementos HTML no DOM?",
    category: Category.JS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "querySelector()" },
      { id: 'b', text: "selectElement()" },
      { id: 'c', text: "getElementByTag()" },
      { id: 'd', text: "findElement()" }
    ]
  },
  {
    id: 33,
    text: "Qual dos seguintes não é uma primitiva de JavaScript?",
    category: Category.JS,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "number" },
      { id: 'b', text: "boolean" },
      { id: 'c', text: "string" },
      { id: 'd', text: "object" }
    ]
  },
  {
    id: 34,
    text: "Como você pode parar a propagação de um evento no JavaScript?",
    category: Category.JS,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "stopEvent()" },
      { id: 'b', text: "preventDefault()" },
      { id: 'c', text: "stopPropagation()" },
      { id: 'd', text: "cancelEvent()" }
    ]
  },
  {
    id: 35,
    text: "Qual o comportamento do operador === no JavaScript?",
    category: Category.JS,
    correctAnswerId: 'c',
    options: [
      { id: 'a', text: "Compara variáveis, mas ignora o tipo." },
      { id: 'b', text: "Compara apenas valores, não o tipo." },
      { id: 'c', text: "Compara valores e tipos de dados." },
      { id: 'd', text: "Converte os tipos de dados antes de comparar." }
    ]
  },
  {
    id: 36,
    text: "Qual método é utilizado para converter uma string em um número inteiro no JavaScript?",
    category: Category.JS,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "toInteger()" },
      { id: 'b', text: "parseString()" },
      { id: 'c', text: "convertInt()" },
      { id: 'd', text: "parseInt()" }
    ]
  },
  {
    id: 37,
    text: "Como se declara uma função assíncrona em JavaScript?",
    category: Category.JS,
    correctAnswerId: 'b',
    options: [
      { id: 'a', text: "function async myFunction()" },
      { id: 'b', text: "async function myFunction()" },
      { id: 'c', text: "await function myFunction()" },
      { id: 'd', text: "function myFunction async()" }
    ]
  },
  {
    id: 38,
    text: "Qual dos seguintes métodos pode ser usado para adicionar um novo nó como filho de um elemento existente no DOM?",
    category: Category.JS,
    correctAnswerId: 'd',
    options: [
      { id: 'a', text: "addChild()" },
      { id: 'b', text: "insertChild()" },
      { id: 'c', text: "createChild()" },
      { id: 'd', text: "appendChild()" }
    ]
  },
  {
    id: 39,
    text: "Como JavaScript lida com o modelo Document Object Model (DOM)?",
    category: Category.JS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Ele manipula o conteúdo HTML e CSS dinamicamente através do DOM." },
      { id: 'b', text: "Ele só pode modificar o CSS, não o HTML." },
      { id: 'c', text: "JavaScript não interage com o DOM." },
      { id: 'd', text: "Ele ignora o DOM completamente." }
    ]
  },
  {
    id: 40,
    text: "Qual o papel do event.preventDefault() em um manipulador de eventos?",
    category: Category.JS,
    correctAnswerId: 'a',
    options: [
      { id: 'a', text: "Evitar o comportamento padrão do evento." },
      { id: 'b', text: "Desativar temporariamente o evento." },
      { id: 'c', text: "Remover o evento associado ao elemento." },
      { id: 'd', text: "Adiar a execução do evento." }
    ]
  }
];