const applicationController = require("../controllers/application")

module.exports = [
  {
    method: 'GET',
    path: '/application',
    handler: (request, h) => {
      const result = applicationController.getApplication(request, h)
      return result
    }
  },
  {
    method: 'POST',
    path: '/application',
    handler: (request, h) => {
      const result = applicationController.createApplication(request, h)
      return result
    }
  },
  {
    method: 'GET',
    path: '/application/{app_id}',
    handler: (request, h) => {
      const result = applicationController.findApplication(request, h)
      return result
    }
  },
  {
    method: 'PUT',
    path: '/application/{app_id}',
    handler: (request, h) => {
      const result = applicationController.updateApplication(request, h)
      return result
    }
  },
  {
    method: 'DELETE',
    path: '/application/{app_id}',
    handler: (request, h) => {
      const result = applicationController.deleteApplication(request, h)
      return result
    }
  }
]