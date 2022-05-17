# remix-expresss-docker

[remix](https://remix.run/)をdocker環境でSSRで動かせるようにしてみました

## required

```
❯ docker version
Client:
 Cloud integration: v1.0.24
 Version:           20.10.14
 API version:       1.41
 Go version:        go1.16.15
 Git commit:        a224086
 Built:             Thu Mar 24 01:49:20 2022
 OS/Arch:           darwin/amd64
 Context:           default
 Experimental:      true

Server: Docker Desktop 4.8.1 (78998)
 Engine:
  Version:          20.10.14
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.15
  Git commit:       87a90dc
  Built:            Thu Mar 24 01:46:14 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.5.11
  GitCommit:        3df54a852345ae127d1fa3092b95168e4a88e2f8
 runc:
  Version:          1.0.3
  GitCommit:        v1.0.3-0-gf46b6ba
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

```
❯ docker compose version
Docker Compose version v2.5.0
```

## dev

```
$ make dev
```

## 構成

### docker compose

詳しくは [docker-compose.dev.yaml](./docker-compose.dev.yaml)を参照してください

- nginx-proxy
	- proxy
	- pathを見て流す先を変えてる
- remix-public
	- staticファイル群
- remix-server
	- server side
- remix-watch
	- watch
		- remix
		- tailwind
	- livereloadの役割

### frontend

詳しくは [frontend/package.json](./frontend/package.json)を参照してください

- React
- Framework
	- [Remix](https://remix.run)
- style
	- [tailwindcss](https://tailwindcss.com)
- test
	- [vitest](https://vitest.dev)
- lint
	- eslint
	- prettier
