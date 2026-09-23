CREATE DATABASE student_management;

USE student_management;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    course VARCHAR(100) NOT NULL
);

INSERT INTO students (name, email, course)
VALUES
('Rahul', 'rahul@gmail.com', 'CSE'),
('Priya', 'priya@gmail.com', 'ECE');

SELECT * FROM students;
