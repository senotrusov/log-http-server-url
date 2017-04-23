# Log HTTP server URLs to console

A handy tool to display all local IP addresses and local host name.


## Usage

```javascript
var logHttpServerUrls = require('log-http-server-urls')

logHttpServerUrls(port, host)
```

`port` must be an Integer

`host` may be a String hostname or may be `undefined`.

In case of `undefined` it is assumed that server will listen for INADDR_ANY.
A list of all local interfaces then will be displayed, e.g.:

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


## Copyright and License

```
Copyright 2015-2016 Stanislav Senotrusov

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


## Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.
