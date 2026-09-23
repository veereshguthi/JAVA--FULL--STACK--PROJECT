package com.example.student;

import com.example.student.controller.StudentController;
import com.example.student.model.Student;
import com.example.student.service.StudentService;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class StudentControllerTest {

    @Test
    void controllerCanReturnStudents() {
        StudentService service = org.mockito.Mockito.mock(StudentService.class);
        org.mockito.Mockito.when(service.getAllStudents())
                .thenReturn(List.of(new Student(1L, "Prasad", "prasad@example.com", "B.Tech CSE", 20)));

        StudentController controller = new StudentController(service);

        assertEquals(1, controller.getAllStudents().size());
    }
}
