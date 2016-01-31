// Copyright 2015 Stanislav Senotrusov

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
