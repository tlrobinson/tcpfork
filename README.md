# tcpfork

A simple TCP server that just forks a command and pipes stdin and stdout to the client.

## Usage

    tcpfork [PORT] COMMAND [ARG...]

Defaults to listing on port 1337.

## Examples

### TCP echo server:

    tcpfork cat

### TCP proxy:

    tcpfork nc localhost 1234

### TCP proxy with logging both sides of the connection to stderr:

    tcpfork 'tee /dev/stderr | nc localhost 1234 | tee /dev/stderr'

Send me you use cases in an Issue or Pull Request!
