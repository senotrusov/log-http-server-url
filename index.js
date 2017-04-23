
// Copyright 2015-2016 Stanislav Senotrusov
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
