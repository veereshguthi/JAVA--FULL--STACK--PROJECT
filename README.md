# Student Management System

A beginner-friendly Java Full Stack application built with Spring Boot, Spring Data JPA, H2 database, HTML, CSS and JavaScript.

## Features
- Add students
- View students
- Search students
- Update students
- Delete students
- REST API
- MVC-style backend structure
- H2 database for easy local setup

## Technologies
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database
- HTML5
- CSS3
- JavaScript
- Maven

## Project structure

```text
student-management/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    ├── main/
    │   ├── java/com/example/student/
    │   │   ├── StudentApplication.java
    │   │   ├── controller/StudentController.java
    │   │   ├── model/Student.java
    │   │   ├── repository/StudentRepository.java
    │   │   └── service/StudentService.java
    │   └── resources/
    │       ├── application.properties
    │       └── static/
    │           ├── index.html
    │           ├── style.css
    │           └── script.js
    └── test/
        └── java/com/example/student/StudentControllerTest.java
```

## Run in VS Code / IntelliJ

1. Install JDK 17 or later.
2. Install Maven if it is not already available.
3. Open this folder.
4. Run:

```bash
mvn spring-boot:run
```

5. Open:

```text
http://localhost:8080
```

The H2 database is stored in memory, so it is reset when the application stops.

## REST endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get one student |
| POST | `/api/students` | Add student |
| PUT | `/api/students/{id}` | Update student |
| DELETE | `/api/students/{id}` | Delete student |

## GitHub

```bash
git init
git add .
git commit -m "Initial student management application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
