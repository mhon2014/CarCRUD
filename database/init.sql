-- CRUD Interface with car and registration entity
-- Entity should have the following properties:
-- - registration date
-- - Car model
-- - Car type (a sedan, pickup, van, etc)
-- - Registration number
-- - Car color
-- - Car build year
-- - Car brand
-- - Registration done by user
-- - Any other relevant properties and or relevant entity relationships


CREATE TABLE car (
    id SERIAL PRIMARY KEY,
    registration_date DATE,
    model VARCHAR(128),
    type VARCHAR(128),
    registration_number INTEGER UNIQUE,
    color VARCHAR(128),
    build_year INTEGER,
    brand VARCHAR(128),
    username VARCHAR(128)
); 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(128) UNIQUE NOT NULL
);

INSERT INTO users (username) VALUES
    ('John Doe');

INSERT INTO car (registration_date, model, type, registration_number, color, build_year, brand, username) VALUES
    ('2015-05-01', 'Mazda 3', 'Sedan', '12312431', 'Dark Gray', 2015, 'Mazda', 'John Doe'),
    ('2020-01-21', 'Hyundai', 'Sedan', '1124235', 'White', 2020, 'Hyundai', 'Placeholder Name6'),
    ('2012-05-01', 'Toyota', 'Sedan', '547465', 'Red', 2023, 'Toyota', 'Placeholder Name1'),
    ('2015-03-20', 'Kia', 'Sedan', '456', 'Blue', 2015, 'Kia', 'Placeholder Name4'),
    ('2020-09-15', 'F150', 'Pick Up', '234', 'Dark Gray', 2020, 'Ford', 'Placeholder Name10'),
    ('2023-01-01', 'Gladiator', 'Pickup', '4356', 'Dark Gray', 2023, 'Jeep', 'Placeholder Name240');

