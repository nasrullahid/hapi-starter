const routes = [].concat(
  require('../routes/home'),
  require('../routes/application')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
