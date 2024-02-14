import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { User, createPost } from "./model";

// This ensures c.env.DB is correctly typed
type Bindings = {
  DB: D1Database;
  USERNAME: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.text("Hello Hono!"));

app.post("/user", async (c) => {
  try {
    const post = await c.req.json<User>();
    const ok = createPost(post, c.env.DB);
    return c.json({ ok });
  } catch (err) {
    return c.json({ err }, 500);
  }
});

app.get("/users", async (c) => {
  try {
    let { results } = await c.env.DB.prepare("SELECT * FROM users").all();
    return c.json(results);
  } catch (e) {
    return c.json({ err: e }, 500);
  }
});

// Accessing D1 is via the c.env.YOUR_BINDING property
app.get("/users/:id", async (c) => {
  const userId = c.req.param("id");
  try {
    let { results } = await c.env.DB.prepare("SELECT * FROM users WHERE id = ?")
      .bind(userId)
      .all();
    return c.json(results);
  } catch (e) {
    return c.json({ err: e }, 500);
  }
});

// Export our Hono app: Hono automatically exports a
// Workers 'fetch' handler for you
export default app;
