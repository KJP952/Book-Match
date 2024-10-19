package com.katie.MyVirtualLibrary.Controller;

import com.katie.MyVirtualLibrary.Model.Book;
import com.katie.MyVirtualLibrary.Service.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api/library")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return service.getAllBooks();
    }

    @PostMapping("/book")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book addedBook = service.addBook(book);
        return ResponseEntity.ok(addedBook);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book updatedInfo) {
        return ResponseEntity.ok(service.updateBook(id, updatedInfo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Integer id){
        service.deleteBook(id);
        return ResponseEntity.noContent().build();
    }


    
}
