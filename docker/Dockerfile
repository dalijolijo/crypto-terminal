FROM ubuntu:16.04

RUN groupadd -r crypto && useradd -r -m -g crypto crypto

RUN apt-get update \
    && apt-get install -qq --no-install-recommends git wget vim curl sudo gosu build-essential iproute apt-utils npm \
    && apt-get -y upgrade \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
    && sudo apt-get install -y nodejs

RUN sudo npm install -g n \
    && sudo n latest

RUN git clone https://github.com/dalijolijo/crypto-terminal.git \
    && cd crypto-terminal \
    && sudo npm install

COPY docker-entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000
CMD ["/crypto-terminal/node_modules/grunt/bin/grunt"]
