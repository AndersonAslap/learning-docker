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

> Comandos básicos

- Comando que mostra os containers que estão em execução

```bash
docker ps
```

- Comando que mostra todos os containers em execução ou não.

```bash
docker ps -a
```

- Comando para baixar uma imagem.

```bash
docker run $IMAGE_NAME:$VERSION
```

- OBS.

```bash
docker run -it ubuntu bash
```

- -it é um parâmetro que teria poderia ser escrito da seguinte forma [ -i -t ] -i : Modo Interativo basicamente vai manter o stdin ativo para que se possa naquele momento manter o processo rodando para conseguirmos interagir no terminal do container, -t -> tty : para podermos digitar comandos no terminal que foi atachado pelo comando -i.

- bash é o comando que será executado dentro do container após a imagem ser baixada.


```bash
docker run -it --rm ubuntu bash
```

- Quando queremos subir um container porém quando parar-mos sua execução desejamos que ele seja removido ultilizamos o comando [ --rm ]


```bash
docker run -p 8080:80 nginx
```

- -p é um comando que publica na porta da máquina que está executando o docker, ou seja quando a porta 8080 da máquina que está executando o docker é acessada no final das contas você irá está acessando a porta 80 do container do nginx.


```bash
docker run -d -p 8080:80 nginx
```

- -d (detached) ou seja está desatachando o terminal do processo do nginx do terminal da máquina, você consegue executar o processo e o terminal não fica travado.

```bash
docker rm $CONTAINER_ID
```
```bash
docker rm $CONTAINER_NAME
```

- -rm remover container.

```bash
docker rm $CONTAINER_ID -f
```
```bash
docker rm $CONTAINER_NAME -f
```

- Se o container estiver em execução, para remover ou você para o container e remove ou você força a remoção adicionando o -f no fim do comando.