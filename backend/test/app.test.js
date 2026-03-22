const request = require("supertest");
const app = require("../app");

test("GET /api/mensagem", async () => {
  const res = await request(app).get("/api/mensagem");
  expect(res.statusCode).toBe(200);
});
