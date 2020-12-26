import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getSingleChapter } from "../actions/getBibles";
import ReactHtmlParser, {
   processNodes,
   convertNodeToElement,
   htmlparser2,
} from "react-html-parser";

const DisplayChapter = ({
   getSingleChapter,
   data: { chapter, nextChapter, previousChapter },
}) => {
   const getNext = () => {
      getSingleChapter(chapter.data.bibleId, nextChapter.id);
   };

   const getPrevious = () => {
      getSingleChapter(chapter.data.bibleId, previousChapter.id);
   };
   // console.log(chapter.data.bibleId, nextChapter.id);

   return (
      <Fragment>
         <div>
            <h3 className="pt-4">
               {chapter === null
                  ? ""
                  : chapter.data.reference.split(" ")[0] +
                    " " +
                    chapter.data.number}
            </h3>

            {chapter === null ? "" : ReactHtmlParser(chapter.data.content)}
         </div>
         <div className="pagination-links">
            {previousChapter === null ? (
               ""
            ) : (
               <button onClick={getPrevious} className="pagination-btn">
                  {" "}
                  <i className="fas fa-arrow-left"></i>
               </button>
            )}
            {nextChapter === null ? (
               ""
            ) : (
               <button onClick={getNext} className="pagination-btn">
                  {" "}
                  <i className="fas fa-arrow-right"></i>
               </button>
            )}
         </div>
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
});

export default connect(mapStateToProps, { getSingleChapter })(DisplayChapter);
