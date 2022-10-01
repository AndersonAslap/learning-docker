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

```bash
docker run -d --name $NAME $CONTAINER_NAME
```
- --name este comando serve para dar-mos um nome ao nosso container.

```bash 
docker exec $CONTAINER_NAME ls
```

- o comando [ exec ] ele é ultilizado para executar comando em um container em execução.


```bash 
docker exec -it $CONTAINER_NAME bash 
```

- Com o comando acima entramos de forma interativa no bash do container.

> O container ele é imutável, existe uma camada de escrita e leitura porém se o processo do container for finalizado essas informações serão perdidas.

```bash 
docker run -d --name nginx -p 8080:80 -v /home/cmtech/Área\ de\ Trabalho/html/:/usr/share/nginx/html nginx
```

```bash 
docker run -d --name nginx -p 8080:80 --mount type=bind,source=/home/cmtech/Área\ de\ Trabalho/html/,target=/usr/share/nginx/html nginx
```

- -v O comando cria um volume esse comando -v ele é antigo, hoje em dia ultilizamos o [ --mount type=bind,source=/home/cmtech/Área\ de\ Trabalho/html/,target=/usr/share/nginx/html ], adicionamos uma pasta local para dentro de uma pasta do container isso é um conceito de (bind mounts) se finalizermos o container você não perde a pasta que está local.

> Diferença entre -v e --mount

- Quando ultilizamos o -v se a pasta que você colocou não existe essa pasta será criada com o comando --mount dá erro, porque ele valida se a pasta existe ou não.

> Volumes no docker

```bash
docker volume

create Criar volume 
inspect Inspecionar volumes 
ls Listar volumes 
prune Remover conteúdo do volume 
rm Remover um ou vários volumes
```

```bash
docker volume create $VOLUME_NAME
```

- Comando para criar um volume

```bash 
docker volume inspect $VOLUME_NAME

[
    {
        "CreatedAt": "2022-10-01T12:41:09-03:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/meuVolume/_data",
        "Name": "meuVolume",
        "Options": {},
        "Scope": "local"
    }
]
```

