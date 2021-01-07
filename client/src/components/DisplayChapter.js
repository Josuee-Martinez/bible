import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getSingleChapter } from "../actions/getBibles";
import { getChapterVerse } from "../actions/getBibles";
import { saveVerse } from "../actions/verseCollection";
import { setAlert } from "../actions/alert";

const DisplayChapter = ({
   getSingleChapter,
   getChapterVerse,
   saveVerse,
   setAlert,
   data: { chapter, nextChapter, previousChapter, verse, verseContent },
   authenticated,
}) => {
   const getNext = () => {
      getSingleChapter(chapter.data.bibleId, nextChapter.id);
      window.scrollTo(0, 0);
   };

   const getPrevious = () => {
      getSingleChapter(chapter.data.bibleId, previousChapter.id);
      window.scrollTo(0, 0);
   };

   const getVerse = (e) => {
      getChapterVerse(e.target.dataset.bibleid, e.target.dataset.verseid);
      console.log(verse);
   };

   const saveUserVerse = (e) => {
      if (authenticated) {
         const verseToSave = {
            verseId: verse.data.id,
            verseReference: verse.data.reference,
            verseText: verseContent,
         };

         saveVerse({ verseToSave });
      } else {
         setAlert("You need to create an account to save verse", "error");
      }
   };

   console.log(previousChapter, nextChapter);
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
                          let selectedVerse;
                          if (n.attrs.sid === undefined) {
                             selectedVerse =
                                chapter.data.id + "." + n.attrs.number;
                             console.log(n, "un", selectedVerse);
                          } else {
                             selectedVerse = n.attrs.sid
                                .replace(" ", ".")
                                .replace(":", ".");
                             console.log(n, "de", selectedVerse);
                          }
                          return (
                             <Fragment>
                                <a
                                   data-toggle="modal"
                                   data-target="#exampleModal"
                                   href="#!"
                                   data-bibleid={chapter.data.bibleId}
                                   data-verseid={selectedVerse}
                                   onClick={getVerse}
                                   className="verse-link"
                                >
                                   {n.attrs.number}
                                </a>

                                <div
                                   key={i}
                                   className="modal fade"
                                   id="exampleModal"
                                   tabIndex="-1"
                                   role="dialog"
                                   aria-labelledby="exampleModalLabel"
                                   aria-hidden="true"
                                >
                                   <div
                                      className="modal-dialog"
                                      role="document"
                                      key={i}
                                   >
                                      <div className="modal-content" key={i}>
                                         <div className="modal-header">
                                            <h5
                                               className="modal-title"
                                               id="exampleModalLabel"
                                            >
                                               <i className="fas fa-bookmark">
                                                  {" "}
                                               </i>{" "}
                                               Save to verse collection ?
                                            </h5>
                                            <button
                                               type="button"
                                               className="close"
                                               data-dismiss="modal"
                                               aria-label="Close"
                                            >
                                               <span aria-hidden="true">
                                                  &times;
                                               </span>
                                            </button>
                                         </div>
                                         <div className="modal-body">
                                            {verse === null ? (
                                               <div className="d-flex justify-content-center">
                                                  <div
                                                     className="spinner-border text-info"
                                                     role="status"
                                                  >
                                                     <span className="sr-only">
                                                        Loading...
                                                     </span>
                                                  </div>
                                               </div>
                                            ) : (
                                               verse.data.reference
                                            )}{" "}
                                            {verseContent}
                                         </div>
                                         <div className="modal-footer">
                                            <button
                                               type="button"
                                               className="btn btn-secondary book-btn"
                                               data-dismiss="modal"
                                            >
                                               Discard
                                            </button>
                                            <button
                                               type="button"
                                               className="btn btn-primary book-btn"
                                               data-dismiss="modal"
                                               onClick={saveUserVerse}
                                            >
                                               Save
                                            </button>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </Fragment>
                          );
                       }

                       return (
                          <span>
                             {n.name === "char" ? n.items[0].text : ""} {n.text}{" "}
                          </span>
                       );
                    })
                 )}
         </div>
         <div className="pagination-links">
            {previousChapter === null || previousChapter === undefined ? (
               ""
            ) : (
               <button onClick={getPrevious} className="pagination-btn">
                  <i className="fas fa-arrow-left"></i>
               </button>
            )}
            {nextChapter === null || nextChapter === undefined ? (
               ""
            ) : (
               <button onClick={getNext} className="pagination-btn">
                  <i className="fas fa-arrow-right"></i>
               </button>
            )}
         </div>
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
   authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, {
   getSingleChapter,
   getChapterVerse,
   saveVerse,
   setAlert,
})(DisplayChapter);
