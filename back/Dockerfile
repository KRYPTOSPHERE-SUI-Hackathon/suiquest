FROM mysten/sui-tools:devnet

RUN apt update && apt install -y git
RUN git clone https://github.com/MystenLabs/sui.git
RUN sui move new my_first_package
COPY src/my_module.move my_first_package/sources/my_module.move