import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Sample Data (Could come from a Database)
const users = [
  { id: 1, name: "Alice", age: 25, role: "admin" },
  { id: 2, name: "Bob", age: 30, role: "user" },
  { id: 3, name: "Charlie", age: 35, role: "moderator" },
];

// Enhanced GET API with JSON Response and Query Params
app.get('/', (req: Request, res: Response) => {
  const { role, minAge } = req.query;

  let filteredUsers = users;

  // Apply role filter
  if (role) {
    filteredUsers = filteredUsers.filter(user => user.role === role);
  }

  // Apply minAge filter
  if (minAge) {
    filteredUsers = filteredUsers.filter(user => user.age >= Number(minAge));
  }

  res.status(200).json({
    success: true,
    message: "Welcome to our API!",
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    data: filteredUsers,
    documentation: "Under development",
  });
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
