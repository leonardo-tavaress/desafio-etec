# desafio-etec
--=== INTRODUÇÃO ===--

  Foi proposto para nós alunos fazer um programa que capturasse a entrada de dados do usuário, quebrasse em sentenças e que fosse gerado um vídeo a partir disso, com um outro vídeo de fundo.
Tendo como referência o projeto video-maker do Filipe Deschamps, o código foi alterado juntamente com o template para atingir tal objetivo.
  Foi usado como parâmetro um vídeo de backgrund com 15s (está na pasta content) e um texto de 50 palavras (contendo 3 sentenças, também na pasta content). Qualquer uso acima desse escopo, basta alterar o template.

--=== OBSERVAÇÕES PARA O FUNCIONAMENTO DO PROJETO ===--

  PASSOS:
  
  1 - Dentro do robô 'video' na função 'renderVideoWithAfterEffects()' é necessário direcionar para o seu Aerender do After Effects. Basta ir à pasta de instalação do After, na pasta 'Support Files' e copiar o local;
  
  2 - A extensão do vídeo renderizado é .MOV, sendo necessário algum player para reproduzir o vídeo no Windows, já que o player padrão não possui o CODEC necessário. Recomendo o 'VLC Media Player'.
  
   Alguns dos módulos utilizados no projeto:
  - fs;
  - sbd;
  - gm;
  - path;
  - readline.
  
  Qualquer módulo pode ser instalado utilizando o seguinte comando no terminal: 'npm install NomeDoModulo'
  
  Também foi utilizado o Image Magic para redimensionar imagens, o mesmo pode ser baixado aqui: https://imagemagick.org/script/download.php.
  Possuo Windows 10, baixei a versão 'ImageMagick-7.0.8-65-Q16-x64-dll.exe'
  
  Após isso, o programa deverá funcionar normalmente usando o comando 'node index.js' no terminal, onde também pode-se acompanhar o progresso do mesmo.

--=== OBSERVAÇÕES TÉCNICAS ===--

  Foi feito o robô "userInput", porém não foi utilizado. O módulo do Node 'readline-sync' deveria obter os caracteres em UTF-8, mas isso não acontece. A solução imediata foi usar o módulo 'readline' (está funcionando o UTF-8), que obtém a entrada pelo terminal e retorna uma função callback; e nessa função chamar as demais funções do programa. A partir disso, boa parte do código do Deschamps pode ser aproveitado para cumprir os objetivos pretendidos.
  
  --=== REFERÊNCIAS ===--
  
  Projeto do Filipe Deschamps no GitHub: https://github.com/filipedeschamps/video-maker
  
  Playlist no Youtube sobre os robôs: https://www.youtube.com/watch?v=kjhu1LEmRpY&list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi
