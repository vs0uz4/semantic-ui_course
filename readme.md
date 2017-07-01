<p align="center">
<img src="http://semantic-ui.com/images/logo.png"></br>
<span style="font-weight:bold;font-size:3em;">Semantic UI</span>
</p>

<p align="center">
<a href="https://packagist.org/packages/semantic/ui"><img src="https://poser.pugx.org/semantic/ui/downloads.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/semantic/ui"><img src="https://poser.pugx.org/semantic/ui/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/semantic/ui"><img src="https://poser.pugx.org/semantic/ui/license.svg" alt="License"></a>
</p>

## Semantic UI
É um framework front-end desenvolvido sobre a ideia de **PROGRESSIVE TRUTHFULNESS** (focado em chegar ao resultado final de forma progressiva).

## Curso Semantic UI

Material desenvolvido no curso básico de Semantic UI, no curso foram abordados os seguintes tópicos:

* Containers;
* Grids;
* Cores;
* Formulários;
* Versão Pré-compilada (Download Zip);
* Versão Para alteração (Instalada com NPM ou YARN).

## Fases do Curso

O conteúdo do curso foi dividido em duas fases, a primeira utilizando a forma mais simples de se usar o "Semantic UI", fazendo o seu [download](https://semantic-ui.com/introduction/getting-started.html) a partir do seu próprio site. A segunda instalando o **Semantic UI** a partir de linha de comando, através da ferramenta de instalação de pacotes do **[NodeJS](https://nodejs.org/en/)** denominada de **[NPM](https://www.npmjs.com/)**.

## Adaptações

Como tenho preferência pela utilização do **[YARN](https://yarnpkg.com/pt-BR/)** ao invés do NPM para instalação de pacotes, e também, tenho preferência por trabalhar em ambientes dockerizados, fiz algumas adaptações na segunda fase do curso, implementando um container docker para rodar a aplicação e fazendo uso do **[Ambientum](https://github.com/codecasts/ambientum)** para instalar e gerar o build do Semantic UI.

## Mas o que é? E o que faz esse tal Ambientum?
O Ambientum é um conjunto de imagens **[Docker](https://www.docker.com/)** desenvolvidas, mantidas e distribuidas pela **[CODECASTS](https://codecasts.com.br)**. E ele pode lhe ajudar com algumas coisas incríveis, os 3 cenários mais comuns estão listados a seguir:

- **Rodar Laravel e/ou Vue.JS em Desenvolvimento.**
- **Rodar Laravel e/ou Vue.JS em Produção (Includindo Integração Contínua).**
- **Substituir dependências locais com comandos que rodam no Docker.**

## Mas o que eu Preciso Saber Antes de Começar?

Sem sombra de dúvidas, o Ambientum irá facilitar a sua vida em muito, principalmente no que diz respeito a ambientes de desenvolvimento dockerizados, mas antes de você começar a brincar com o Ambientum, alguns conhecimentos são necessários:

* O básico sobre Docker e Containers.
* Estar confortável usando a linha de comando.
* Saber operar o docker-compose.
* Ler o **README** do Ambientum.

Não se preocupem, o readme está escrito em dois idiomas: Inglês e Português.

## Instalando o Semantic UI

Bom após ter lido toda a documentação do Ambientum você já está apto a utiliza-lo, então vamos por a mão na massa.

```
n yarn
```

Com isto, o yarn se encarregará de instalar o Semantic UI e todas as dependências necessárias, incluíndo o **[Gulp](http://gulpjs.com/)**, ferramenta que utilizaremos para trabalhar com o framework, inclusive gerar o seu build.

## Gerando o Primeiro Build

Terminado a instalação do Semantic UI, vamos gerar o primeiro build, para podermos então executar o container docker e efetivamente visualizarmos o conteúdo desenvolvido no navegador. E para isto executamos o seguinte comando:

```
n gulp build-ui
```

## Rodando Nosso Container Docker e Visualizando Nosso Projeto

Framework instalado, build gerado, só nos resta então agora rodar o container e vermos o resultado. Então bora lá.

Em nosso terminal, estando dentro da pasta **fase_2** do nosso projeto, vamos rodar o seguinte comando:

```
docker-compose up
```

Feito isto basta agora acessarmos no nosso navegador o endereço http://localhost:9090

#### Importante: A primeira execução tanto para instalação do semantic quanto para levantar nossos containers docker, podem demorar algum tempo, visto que as imagens docker necessárias serão baixadas.