
// Copyright (c) 2015-2016 Stanislav Senotrusov

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict'

var os = require('os')

module.exports = function (port, host) {
  port = parseInt(port, 10)
  var portAddition = port === 80 ? '' : `:${port}`

  if (host) {
    var address = host.indexOf(':') === -1 ? host : `[${host}]`
    console.log(`The server has been started, available at http://${address}${portAddition}/`)

  } else {
    console.log('The server has been started, listening on all local interfaces (INADDR_ANY)')
    console.log('For now, based on a current set of local interfaces, it is available:')

    var name, iface, interfaces = os.networkInterfaces()

    console.log('Using IPv4:')
    for (name of Object.keys(interfaces))
      for (iface of interfaces[name])
        if (iface.family === 'IPv4')
          console.log(`  (${name}) http://${iface.address}${portAddition}/`)

    console.log('Using IPv6 (only interfaces with scopeid = 0 shown):')
    for (name of Object.keys(interfaces))
      for (iface of interfaces[name])
        if (iface.family === 'IPv6' && iface.scopeid === 0)
          console.log(`  (${name}) http://[${iface.address}]${portAddition}/`)

    var osHostname = os.hostname()
    if (osHostname) {
      console.log('By hostname:')
      console.log(`  http://${osHostname}${portAddition}/`)
    }
  }
}
