CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
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
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (email, password, name, active, admin
) VALUES
('admin@example.com', 'admin', 'admin', TRUE, TRUE
),
('user1@example.com', 'password1', 'John Doe', TRUE, FALSE),
('user2@example.com', 'password2', 'Jane Smith', TRUE, FALSE),
('user3@example.com', 'password3', 'Bob Johnson', TRUE, FALSE),
('user4@example.com', 'password4', 'Alice Lee', TRUE, FALSE);

INSERT INTO spaces (name, description, user_id) VALUES
('Kitchen', 'The kitchen is the heart of the home', 1
),
('Living Room', 'The living room is the place to relax', 1),
('Bedroom', 'The bedroom is the place to sleep', 1),
('Bathroom', 'The bathroom is the place to wash', 1);


INSERT INTO items
  (name, space_id, description, img_url, value, quantity, owner)
VALUES
  ('Fridge', 1, 'A fridge to keep food cold', 'https://images.unsplash.com/photo-151055788', 500.00, 1, 'None')