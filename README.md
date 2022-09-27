# learning-docker

> Objetivos

- O que são Containers
- Como funcionam os Containers
- Como o Docker funciona
- Principais comandos ultilizando Docker
- Dockerfile
- Trabalhando com imagens Docker

> O que são containers ?

Um container é um padrão de unidade de software que empacota código e todas as dependências de uma aplicação
fazendo que a mesma sja executada rapidamente de forma confiável de um ambiente computacional para outro.

Um processo, com subsprocessos em execução emulando um SO.

> Como funcionam os containers ?

- Namespaces : Isola os processos
- Cgroups : Controla os recursos
- File System : OFS (Overlay File System)

Imagens : Um conjunto de dependências encadeada.

As imagens ficam guardadas no repositorio IMAGE REGISTER

Dockerfile : Arquivo de definição de imagens

Dockerfile -> build -> image
