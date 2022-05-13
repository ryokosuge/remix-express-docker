# remix-expresss-docker

[remix](https://remix.run/)をdocker環境でSSRで動かせるようにしてみました

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
	- livereloadの役割
