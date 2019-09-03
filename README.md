# File Drop

A peer to peer file transfer ReactJS and NodeJs application that allows users to transfer files from their browser

<a href="https://xkcd.com/949/"></a> <img src="static/images/paperplane2.png" alt="FileDrop" width="20%" /> <h3>Peer-to-peer file transfers in your browser</h3>

Using [WebRTC](http://www.webrtc.org), Filedrop eliminates the initial upload step required by other web-based file sharing services. When senders initialize a transfer, they receive a link they can distribute to recipients. Upon visiting this link, recipients' browsers connect directly to the sender’s browser and may begin downloading the selected file. Because data is never stored in an intermediary server, the transfer is fast, private, and secure.

A hosted instance of Filedrop is available at [file.drop](https://shrouded-wave-14872.herokuapp.com/).

## Requirements

- node `0.12.x`
- npm `2.x.x`

## Development

    $ git clone https://github.com/abdamin/filedrop.git
    $ npm install
    $ npm run-script build
    $ npm start

Filedrop is an isomorphic React application which uses the Flux application architecture. ES6 features are used liberally and compiled using Babel. Views are rendered on the server, store data is serialized and sent to the client, which then picks up where the server left off.

Both client and server JavaScript files can be found in `lib/`. `lib/server.js` and `lib/client.js` are the server and client entrypoints, respectively. `lib/components/`, `lib/stores/`, and `lib/actions/` contain the corresponding Flux modules, implemented using [alt](https://github.com/goatslacker/alt). `lib/routes.js` serves as the isomorphic routes file using [react-router](https://github.com/rackt/react-router).

Client-side JavaScript and CSS are compiled using webpack and are available at `/app.js`.

## FAQ

**Where are my files sent?** Your files never touch our server. Instead, they are sent directly from the uploader's browser to the downloader's browser using WebTorrent and WebRTC. This requires that the uploader leave their browser window open until the transfer is complete.

**Can multiple people download my file at once?** Yes! Just send them your tempalink.

**How big can my files be?** Chrome has issues supporting files >500 MB. Firefox does not have any issues with large files, however.

**What happens when I close my browser?** The tempalink is invalidated. If a downloader has completed the transfer, that downloader will continue to seed to incomplete downloaders, but no new downloads may be initiated.

**Are my files encrypted?** Yes, all WebRTC communications are automatically encrypted using public-key cryptography.

**My files are sending slowly!** Transfer speed is dependent on your network connection.
