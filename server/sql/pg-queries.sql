CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  nickname TEXT NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  admin BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE spaces
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  img_url TEXT,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE items
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  img_url TEXT,
  value NUMERIC(10, 2),
  quantity INTEGER NOT NULL DEFAULT 1,
  owner TEXT,
  space_id INTEGER REFERENCES spaces(id),
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT
INTO users

(email, password, name, nickname, active, admin
)
VALUES

('admin@example.com', 'admin', 'admin', 'admin', TRUE, TRUE
),
('user1@example.com', 'password1', 'John Doe', 'Johnny', TRUE, FALSE),
('user2@example.com', 'password2', 'Jane Smith', 'Janie', TRUE, FALSE),
('user3@example.com', 'password3', 'Bob Johnson', 'Bobby', TRUE, FALSE),
('user4@example.com', 'password4', 'Alice Lee', 'Ali', TRUE, FALSE);

INSERT
INTO spaces
  (name, description, user_id)
VALUES

('Kitchen', 'The kitchen is the heart of the home', 1
),
('Living Room', 'The living room is the place to relax', 1),
('Bedroom', 'The bedroom is the place to sleep', 1),
('Bathroom', 'The bathroom is the place to wash', 1);
