# File Drop

A peer to peer file transfer ReactJS and NodeJs application that allows users to transfer files from their browser

<a href="https://xkcd.com/949/"></a> <img src="static/images/paperplane2.png" alt="FileDrop" width="20%" /> <h3>Peer-to-peer file transfers in your browser</h3>

Using [WebRTC](http://www.webrtc.org), Filedrop eliminates the initial upload step required by other web-based file sharing services. When senders initialize a transfer, they receive a link they can distribute to recipients. Upon visiting this link, recipients' browsers connect directly to the sender’s browser and may begin downloading the selected file. Because data is never stored in an intermediary server, the transfer is fast, private, and secure.

An instance of Filedrop is available at [file.drop](https://shrouded-wave-14872.herokuapp.com/).

## Development

    $ git clone https://github.com/abdamin/filedrop.git
    $ npm install
    $ npm run-script build
    $ npm start
