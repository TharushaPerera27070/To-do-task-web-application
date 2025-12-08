const request = require("supertest");
const app = require("../src/app.js");
const { pool } = require("../config/db.js");

jest.mock("../config/db.js", () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("Backend API Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GET /task - should return a list of tasks", async () => {
    const mockRows = [
      { id: 1, title: "Task 1", is_completed: false },
      { id: 2, title: "Task 2", is_completed: false },
    ];
    pool.query.mockResolvedValue({ rows: mockRows });

    const res = await request(app).get("/task");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].title).toBe("Task 1");
  });

  it("POST /task - should create a new task", async () => {
    const newTask = { id: 3, title: "New Task", description: "Desc" };
    pool.query.mockResolvedValue({ rows: [newTask] });

    const res = await request(app)
      .post("/task")
      .send({ title: "New Task", description: "Desc" });

    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.body.title).toBe("New Task");
  });

  it("PUT /task/:id - should mark a task as completed", async () => {
    pool.query.mockResolvedValue({ rowCount: 1 });

    const res = await request(app).put("/task/123");

    expect(res.statusCode).toEqual(200);

    expect(pool.query).toHaveBeenCalledWith(
      expect.stringMatching(/UPDATE.*task.*SET.*is_completed/i),
      expect.anything()
    );
  });
});
