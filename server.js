import express from "express";
import session from "express-session";
import FileStore from "session-file-store";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const FileStoreSession = FileStore(session);

const sessionDir = path.join(process.cwd(), "sessions");
if (!fs.existsSync(sessionDir)) {
  fs.mkdirSync(sessionDir);
}

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new FileStoreSession({ path: sessionDir, logFn: function () {} }),
    secret: process.env.SESSION_SECRET || "secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "views"));

const USERS_FILE = path.join(process.cwd(), "users.json");

function getUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, "utf-8");
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    req.session.user = {
      username: user.username,
      email: user.email,
      role: user.role,
    };
    return res.redirect("/");
  } else {
    return res.render("login", { error: "Wrong credentials" });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    res.redirect("/");
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/only-users", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("only-users");
});

app.get("/admin", (req, res) => {
  if (!req.session.user || req.session.user.role !== "admin") {
    return res.redirect("/login");
  }
  res.render("admin");
});

app.get("/register", (req, res) => {
  res.render("register", { error: null });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const users = getUsers();

  if (users.some(u => u.email === email)) {
    return res.render("register", { error: "Email вже існує" });
  }

  const newUser = {
    username,
    email,
    password,
    role: "user",
  };

  users.push(newUser);
  saveUsers(users);

  res.redirect("/login");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
