import React from "react";

const DisplayBibleBooks = ({ bibleBooks }) => {
   console.log(bibleBooks);
   const showInfo = (e) => {
      console.log(e.target.dataset.bibleid, e.target.dataset.biblebookid);
   };

   return (
      <div>
         {bibleBooks === null
            ? ""
            : bibleBooks.data.map((book, i) => (
                 <div key={i} className="book">
                    <a
                       href="#!"
                       onClick={showInfo}
                       data-bibleid={book.bibleId}
                       data-biblebookid={book.id}
                    >
                       {book.name}
                    </a>
                 </div>
              ))}
      </div>
   );
};

export default DisplayBibleBooks;
