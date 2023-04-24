CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  nickname TEXT NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT
INTO users
(email, password, name, nickname, active)
VALUES
('user1@example.com', 'password1', 'John Doe', 'Johnny', TRUE),
('user2@example.com', 'password2', 'Jane Smith', 'Janie', TRUE),
('user3@example.com', 'password3', 'Bob Johnson', 'Bobby', TRUE),
('user4@example.com', 'password4', 'Alice Lee', 'Ali', TRUE);
