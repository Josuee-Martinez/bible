import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getSingleChapter } from "../actions/getBibles";
import { connect } from "react-redux";

const DisplayBibleBookChapters = ({
   getSingleChapter,
   data: { bibleBookChapters },
   match,
}) => {
   console.log(bibleBookChapters);
   const getChapter = (e) => {
      getSingleChapter(e.target.dataset.bibleid, e.target.dataset.chapterid);
   };

   return (
      <Fragment>
         <div className="mt-4 mb-4">
            <h3>{match.params.name}</h3>
         </div>
         <div className="biblebook-grid mb-4">
            {bibleBookChapters === null
               ? ""
               : bibleBookChapters.data.map((chapter, i) => (
                    <Link
                       to={`/chapter/${chapter.id}`}
                       className="btn btn-primary book-btn"
                       key={i}
                       data-bibleid={chapter.bibleId}
                       data-chapterid={chapter.id}
                       onClick={getChapter}
                    >
                       {chapter.bookId.charAt(0) +
                          chapter.bookId.slice(1).toLowerCase()}{" "}
                       {chapter.number}
                    </Link>
                 ))}
         </div>
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
});

export default connect(mapStateToProps, { getSingleChapter })(
   DisplayBibleBookChapters
);
