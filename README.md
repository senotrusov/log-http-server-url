# Log HTTP server URLs to console, displaying all local IP addresses and host name

## Usage

```javascript
logHttpServerUrls = require('log-http-server-urls')

logHttpServerUrls(port = 8000, host = 'localhost')
```

Will output something like this:

```
The server has been started, listening on all local interfaces (INADDR_ANY)
For now, based on a current set of local interfaces, it is available:
Using IPv4:
  (lo0) http://127.0.0.1:8000/
  (en0) http://192.168.1.2:8000/
Using IPv6 (only interfaces with scopeid = 0 shown):
  (lo0) http://[::1]:8000/
By hostname:
  http://Stan.local:8000/
```

## Installation

Install with the [npm package manager](https://github.com/npm/npm):

```bash
npm install --save log-http-server-urls
```

## License
[MIT](LICENSE)
