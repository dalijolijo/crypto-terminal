# crypto-terminal docker

## Build

```sh
docker build -t dalijolijo/crypto-terminal .
```

# Open firewall

```sh
ufw allow 3000/tcp
```

## Run

```sh
screen
docker run --rm --name terminal -p 3000:3000 dalijolijo/crypto-terminal
```
