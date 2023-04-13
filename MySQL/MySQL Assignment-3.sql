-- 1. Display all the books in the library.
	select * from books;
   
-- 2. Display all the authors in the library.
	select * from authors;
    
-- 3. Display all the users in the library.
    select * from users;
    
-- 4. Display all the borrowed books.
    select * from borrowed_books;
    
-- 5. Display all the books borrowed by a particular user.
	select b.title from books b, borrowed_books bb, users u where u.user_id=1 and  b.book_id=bb.book_id and bb.user_id=u.user_id;
    
-- 6. Display all the books written by a particular author.
	select b.title from books b , authors a where a.author_id=2 and b.author_id=a.author_id;
    
-- 7. Display the number of available copies for a particular book.
	select  b.title ,b.quantity from books b where book_id=3;
    
-- 8. Add a new book to the library.
    insert  books values(4,"comedy",2,"charlie","1990-02-04",25);
    
-- 9. Update the quantity of a book in the library.
	update books set quantity=5 where book_id=1;
    
-- 10. Delete a book from the library.
	delete from books where book_id=4;
    
-- 11.Add a new user to the library.
	insert into users values(4,"Bhoo","bam","bhoo@.com","B@hoo123");
    
-- 12. Update the password of a user.
	update users set password="Xy@z123" where user_id=1;
    
-- 13. Delete a user from the library.
	delete from users where user_id=4;
    
-- 14. Borrow a book.
	insert into borrowed_books values (4,3,3,"2002-02-01","2002-04-02", null);

-- 15. Return a book.
	update borrowed_books set returned_date="2002-03-30" where id=4;