# MERN Todo App

A full-stack Todo application built with MongoDB, Express, React, and Node.js — built as a hands-on project to learn the MERN stack while coming from a Spring Boot + React background.

## Tech Stack

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose 9 (ODM)
- CORS, dotenv

**Frontend**
- React 18 + Vite
- Tailwind CSS v4
- Axios

## Features
- Create, read, update, delete todos
- Mark todos as complete/incomplete
- Priority levels (low / medium / high)
- Real-time task counter

## Project Structure

mern-todo/
├── backend/
│   ├── models/
│   │   └── Todo.js            # Mongoose schema
│   ├── controllers/
│   │   └── todoController.js  # Route handler logic
│   ├── routes/
│   │   └── todoRoute.js       # API route definitions
│   ├── server.js              # App entry point
│   ├── .env                   # Environment variables (not committed)
│   └── package.json
└── frontend/
├── src/
│   ├── api/
│   │   └── todoApi.js     # Axios API calls
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── package.json

(Replace with your Atlas connection string if using cloud MongoDB.)

Start the backend:
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### 3. Frontend setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
App runs on `http://localhost:5173`

## API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|----------------------|
| GET    | `/api/todos`      | Get all todos        |
| POST   | `/api/todos`      | Create a new todo     |
| PUT    | `/api/todos/:id`  | Update a todo         |
| DELETE | `/api/todos/:id`  | Delete a todo         |

**Example POST body:**
```json
{
  "title": "Learn MERN stack",
  "priority": "high"
}
```

## Environment Variables

| Variable    | Description                          |
|-------------|----------------------------------------|
| `MONGO_URI` | MongoDB connection string              |
| `PORT`      | Backend server port (default: 5000)    |

## Learnings / Notes
- Coming from Spring Boot, the biggest shift was realizing MongoDB is schema-flexible at the DB level — Mongoose enforces structure only at the application layer.
- No boilerplate DI container — plain ES module imports handle wiring between routes, controllers, and models.
- Databases and collections in MongoDB are created automatically on first insert; no explicit `CREATE TABLE` equivalent needed.

## Future Improvements
- [ ] Add JWT-based authentication
- [ ] Add filtering/sorting by priority and completion status
- [ ] Migrate state management to Redux Toolkit
- [ ] Deploy backend (Render/Railway) and frontend (Netlify/Vercel)

## License
MIT
