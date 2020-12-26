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
   const showInfo = (e) => {
      getSingleChapter(e.target.dataset.bibleid, e.target.dataset.chapterid);
   };

   return (
      <Fragment>
         <div className="heading">
            <h3>{match.params.name}</h3>
         </div>
         <div className="biblebook-grid">
            {bibleBookChapters === null
               ? ""
               : bibleBookChapters.data.map((chapter, i) => (
                    <Link
                       to={`/chapter/${chapter.id}`}
                       className="btn btn-primary"
                       key={i}
                       data-bibleid={chapter.bibleId}
                       data-chapterid={chapter.id}
                       onClick={showInfo}
                    >
                       {chapter.reference.split(" ")[0]}: {chapter.number}
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
