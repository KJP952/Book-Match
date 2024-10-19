package com.katie.MyVirtualLibrary.Service;

import com.katie.MyVirtualLibrary.Repository.BookRepo;
import com.katie.MyVirtualLibrary.Model.Book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BookService {

    @Autowired
    private BookRepo repo;

    public List<Book> getAllBooks(){
        return repo.findAll();
    }

    public Book addBook(Book book){
        return repo.save(book);
    }

    public Book updateBook(Integer id, Book updatedInfo){
        Book book = repo.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        book.setTitle(updatedInfo.getTitle());
        book.setAuthor(updatedInfo.getAuthor());
        book.setGenre(updatedInfo.getGenre());
        return repo.save(book);
    }

    public void deleteBook(Integer id){
        repo.deleteById(id);
    }
}
