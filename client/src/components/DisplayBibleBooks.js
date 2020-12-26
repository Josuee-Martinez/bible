import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBibleBookChapters } from "../actions/getBibles";

const DisplayBibleBooks = ({ bibleBooks, getBibleBookChapters }) => {
   console.log(bibleBooks);
   const showInfo = (e) => {
      getBibleBookChapters(
         e.target.dataset.bibleid,
         e.target.dataset.biblebookid
      );
   };

   return (
      <div className="biblebook-grid mt-0">
         {bibleBooks === null
            ? ""
            : bibleBooks.data.map((book, i) => (
                 <Link
                    to={`/book/${book.name}`}
                    className="btn btn-primary"
                    onClick={showInfo}
                    data-bibleid={book.bibleId}
                    data-biblebookid={book.id}
                    key={i}
                 >
                    {book.name}
                 </Link>
              ))}
      </div>
   );
};

export default connect(null, { getBibleBookChapters })(DisplayBibleBooks);
