# IoT-Blockchain

A system is proposed to integrate blockchain technology into an IoT ecosystem in order to deal with big data generated by sensors and devices. 
Integration of blockchain technology in IoT is useful for data immutability, privacy, transparency, decentralization, authentication, preserving confidentiality, integrity, and availability.
Blockchain grants devices independence, since IoT devices do not exist as independent entities outside of their centrally managed networks.
On a blockchain network, each node has a unique private and public key pair that uniquely identifies it as an independent participant on the network. Specifically, these identities are enforced largely using cryptographic signatures, or digital messages that unmistakably identify the sender, hence, each node will be able to make its own decisions, and, more importantly, to make use of its own resources independently of the other nodes.
This type of networks is much more secure, since a single point of failure will be removed.


## Circuit (IoT Unit)

![Screenshot 2023-01-29 211448](https://user-images.githubusercontent.com/123273646/215347357-453d501b-fdb0-4064-b4c1-5f11acda1f44.png)

![Screenshot 2023-01-29 211431](https://user-images.githubusercontent.com/123273646/215347366-d827f440-0d4c-4b79-8e72-21a3341c4a3f.png)

![5555](https://user-images.githubusercontent.com/123273646/215347370-9b7dea7b-10e6-40d9-a39a-59a82d0fd2df.png)

## Raspberry Pi

Download the Raspberry Pi Imager on the computer in order to write the operating system on the micro-SD card using this link: https://www.raspberrypi.com/software/ 

![Screenshot 2023-01-29 211737](https://user-images.githubusercontent.com/123273646/215347424-5cee238e-01b2-42b8-a83b-714a5da2635e.png)

Making the Raspberry Pi a Web Server:

    sudo apt update && sudo apt upgrade 
    sudo apt install apache2 -y
    sudo apt install php libapache2-mod-php -y
    cd /var/www/html
    sudo rm index.html
    sudo nano index.php
    sudo chown:pi index.php
    sudo touch data.txt
    sudo chown:pi data.txt
    
## Connecting RPi with Arduino
A python code will be executed to serially communicate with Arduino to collect the data and store it in data.txt file which will be displayed to the web page
    
## Result 

![Kitt](https://user-images.githubusercontent.com/123273646/215347686-1f9d4b23-0d5d-42c4-b547-b8bb36e86c01.png)

![Screenshot 2022-12-02 172019](https://user-images.githubusercontent.com/123273646/215347697-3f0054da-b204-4061-9926-1ca39ed6338b.png)

![Screenshot (357)](https://user-images.githubusercontent.com/123273646/215347704-d3a8ea6b-48e4-4fe8-b2ee-7bcec45ddf68.png)







