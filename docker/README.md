# Crypto-Terminal Docker Solution

## Run crypto-terminal docker solution (with LetsEncrypt and nginx-proxy)

### Open firewall
```sh
ufw allow 80/tcp
ufw allow 443/tcp
```

### Customazing
Modifing docker-compose.yml
```sh
      VIRTUAL_HOST: <your-website-url>
      LETSENCRYPT_HOST: <your-website-url>
      LETSENCRYPT_EMAIL: <your-email>
```

### Generate password for Basic Authentication
In order to be able to secure your virtual host, you have to create a file named as its equivalent VIRTUAL_HOST variable on directory /etc/nginx/htpasswd/<your-website-url>

```sh
apt-get install apache2-utils
mkdir -p /etc/nginx/htpasswd/
htpasswd -c /etc/nginx/htpasswd/<your-website-url> btx
```

### Run docker solution
```sh
screen
docker-compose up
```

For more details about letsencrypt-nginx-proxy-companion, see https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion

# Crypto-Terminal Docker

## Build

```sh
docker build -t dalijolijo/crypto-terminal .
```

## Open firewall

```sh
ufw allow 3000/tcp
```

## Run crypto-terminal docker container
```sh
screen
docker run --rm --name terminal -p 3000:3000 dalijolijo/crypto-terminal
```
