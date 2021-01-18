import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
   if (chapter === null && sessionStorage.getItem("chapter")) {
      chapter = JSON.parse(sessionStorage.getItem("chapter"));
   }

   if (nextChapter === null && sessionStorage.getItem("nextChapter")) {
      nextChapter = JSON.parse(sessionStorage.getItem("nextChapter"));
   }

   if (previousChapter === null && sessionStorage.getItem("previousChapter")) {
      previousChapter = JSON.parse(sessionStorage.getItem("previousChapter"));
   }

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

   // console.log(chapter.data.bookId);

   return (
      <Fragment>
         <div>
            {chapter === null ? (
               ""
            ) : (
               <Fragment>
                  <Link
                     to={`/book/${chapter.data.bookId}`}
                     className="btn btn-primary book-btn mt-4"
                  >
                     <i className="fas fa-arrow-left"></i> Go back
                  </Link>
                  <h3 className="mt-4 mb-4">
                     {chapter.data.reference.split(" ")[0] +
                        " " +
                        chapter.data.number}
                  </h3>
               </Fragment>
            )}

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
                             <Fragment key={i}>
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
                                   >
                                      <div className="modal-content">
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
                          <span key={i}>
                             {n.name === "char" ? n.items[0].text : ""} {n.text}{" "}
                          </span>
                       );
                    })
                 )}
         </div>
         <div className="text-center">
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
