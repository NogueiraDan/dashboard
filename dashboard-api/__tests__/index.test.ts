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

  it("should return a login user", async () => {
    const user = {
      email: "usuario@demo.com",
      password: "demo",
    };
    const response = await request(app).post("/login").send(user);
    expect(response.status).toBe(200);
  });

  it("should return an error when user send invalids credentials", async () => {
    const user = {
      email: "usuario@demo.com",
      password: "demowrong",
    };
    const response = await request(app).post("/login").send(user);
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error");
  });
});
