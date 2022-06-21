const db = require("../database");

module.exports = {

  async getApplication(req, res) {
    const { rows } = await db.query(
      "SELECT app_id, app_secret, app_name, app_description, status FROM application WHERE deleted IS NULL"
    );

    return {
      statusCode: 200,
      message: "Get all application list",
      data: rows,
    };
  },

  async createApplication(req, res) {
    const { app_id, app_secret, app_name, app_description, status } = req.payload;
    const result = await db.query(
      "INSERT INTO application (app_id, app_secret, app_name, app_description, status, created_at) VALUES ($1, $2, $3, $4, $5, $6)",
      [app_id, app_secret, app_name, app_description, status, new Date()]
    );

    return {
      statusCode: 201,
      message: "Application added successfully!",
      data: result,
    };
  },

  async findApplication(req, res) {
    const app_id = req.params.app_id;
    const result = await db.query(
      'SELECT app_id, app_secret, app_name, app_description, status FROM application WHERE deleted IS NULL AND app_id = $1',
      [app_id]
    );

    return {
      statusCode: 200,
      message: "Find application",
      data: result.rows,
    };
  },

  async updateApplication(req, res) {
    const app_id = req.params.app_id;
    const { app_secret, app_name, app_description, status } = req.payload;
    const result = await db.query(
      'UPDATE application SET app_secret = $2, app_name = $3, app_description = $4, status = $5, updated_at = $6 WHERE deleted IS NULL AND app_id = $1',
      [app_id, app_secret, app_name, app_description, status, new Date()]
    );

    return {
      statusCode: 201,
      message: "Aplication updated succesfully",
      data: result.rows,
    };
  },


}