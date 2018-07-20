#!/usr/bin/env node

const net = require("net");
const child_process = require("child_process");

function main(args) {
  let port = 1337;
  if (args[0] === "-p") {
    args.shift();
    port = args.shift();
  }
  if (args.length === 0) {
    console.log("USAGE: tcpfork [-p PORT] COMMMAND [ARGS]");
  }
  net
    .createServer(client => {
      console.log("Connection from " + client.remoteAddress);
      const p = child_process.spawn(args[0], args.slice(1), {
        shell: args.length === 1,
      });
      client.pipe(p.stdin);
      p.stdout.pipe(client);
      p.stderr.pipe(process.stderr);
    })
    .listen(port, () => {
      console.log("Listening on port " + port);
    });
}

if (require.main === module) {
  main(process.argv.slice(2));
}
