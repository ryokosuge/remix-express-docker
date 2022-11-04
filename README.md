# remix-expresss-docker

[remix](https://remix.run/)をdocker環境でSSRで動かせるようにしてみました

## required

```
❯ docker version
Client:
 Cloud integration: v1.0.29
 Version:           20.10.20
 API version:       1.41
 Go version:        go1.18.7
 Git commit:        9fdeb9c
 Built:             Tue Oct 18 18:20:35 2022
 OS/Arch:           darwin/amd64
 Context:           default
 Experimental:      true

Server: Docker Desktop 4.13.1 (90346)
 Engine:
  Version:          20.10.20
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.18.7
  Git commit:       03df974
  Built:            Tue Oct 18 18:18:35 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.8
  GitCommit:        9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6
 runc:
  Version:          1.1.4
  GitCommit:        v1.1.4-0-g5fd4c4d
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

```
❯ docker compose version
Docker Compose version v2.12.1
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
