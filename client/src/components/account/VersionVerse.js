import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { deleteVerse } from "../../actions/verseCollection";
import { connect } from "react-redux";

const VersionVerse = ({ verseVersion, singleVerse, deleteVerse, history }) => {
   // console.log(singleVerse._id);
   return (
      <Fragment>
         {singleVerse === null ? (
            ""
         ) : (
            <div className="card">
               <div className="card-body text-center">
                  <h5>
                     {verseVersion === null
                        ? singleVerse.verseReference
                        : verseVersion.data.reference}
                  </h5>
                  <p className="verse-fetched">
                     {verseVersion === null
                        ? singleVerse.verseText
                        : verseVersion.data.content[0].items
                             .map((p) =>
                                p.name === "char" ? p.items[0].text : p.text
                             )
                             .filter((item) => item !== undefined)
                             .join("")}
                  </p>
                  <button className="delete-verse">
                     <i
                        class="fas fa-trash-alt"
                        onClick={() => deleteVerse(history, singleVerse._id)}
                     ></i>
                  </button>
               </div>
            </div>
         )}
         {/* {error === null ? "k" : error.msg} */}
      </Fragment>
   );
};

export default connect(null, { deleteVerse })(withRouter(VersionVerse));
