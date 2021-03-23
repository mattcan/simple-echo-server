const { sdk } = require('@cto.ai/sdk')
const http = require('http')

async function main() {
  const requestListener = function (request, response) {
    let body = ''
    request.on('data', function(data) {
      body += data
    })

    request.on('end', function() {
      response.writeHead(200, request.headers)
      response.write(body)
      response.end()
    })
  }

  const server = http.createServer(requestListener)
  server.listen(8080, function () {
    sdk.log('server started!')
  })
}
main()
