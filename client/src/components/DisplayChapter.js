import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getSingleChapter } from "../actions/getBibles";
import { getChapterVerse } from "../actions/getBibles";

import ReactHtmlParser, {
   processNodes,
   convertNodeToElement,
   htmlparser2,
} from "react-html-parser";
import Navbar from "./layout/Navbar";

const DisplayChapter = ({
   getSingleChapter,
   getChapterVerse,
   data: { chapter, nextChapter, previousChapter },
}) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   });

   const getNext = () => {
      getSingleChapter(chapter.data.bibleId, nextChapter.id);
   };

   const getPrevious = () => {
      getSingleChapter(chapter.data.bibleId, previousChapter.id);
   };

   const showInfo = (e) => {
      // console.log(e.target.dataset);
      getChapterVerse(e.target.dataset.bibleid, e.target.dataset.verseid);
   };
   return (
      <Fragment>
         <div>
            <h3 className="mt-4 mb-4">
               {chapter === null
                  ? ""
                  : chapter.data.reference.split(" ")[0] +
                    " " +
                    chapter.data.number}
            </h3>

            {chapter === null
               ? ""
               : chapter.data.content.map((item) =>
                    item.items.map((n, i) => {
                       if (n.name === "verse") {
                          let verse = n.attrs.sid
                             .replace(" ", ".")
                             .replace(":", ".");
                          //   console.log(verse);
                          return (
                             <a
                                href="#!"
                                data-bibleid={chapter.data.bibleId}
                                data-verseid={verse}
                                onClick={showInfo}
                                className="verse-link"
                             >
                                {n.attrs.number}{" "}
                             </a>
                          );
                       }
                       //   console.log(chapter.data);
                       return (
                          <span>
                             {n.name === "char" ? n.items[0].text : ""}
                             {n.text}{" "}
                          </span>
                       );
                    })
                 )}
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

export default connect(mapStateToProps, { getSingleChapter, getChapterVerse })(
   DisplayChapter
);
