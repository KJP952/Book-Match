package com.katie.MyVirtualLibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.katie.MyVirtualLibrary.Model.Book;
import java.util.List;


@Repository
public interface BookRepo extends JpaRepository<Book, Integer>{
}
