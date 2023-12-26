import { app } from "../src/server";
import request from "supertest";
beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

describe("Endpoints test", () => {
  it("should get a list of users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });
});
