import React, { Fragment } from "react";
import { connect } from "react-redux";

const VersionVerse = ({ verseVersion, singleVerse }) => {
   return (
      <Fragment>
         {singleVerse === null ? (
            ""
         ) : (
            <div className="card">
               <div className="card-body">
                  <h5>
                     {verseVersion === null
                        ? singleVerse.verseReference
                        : verseVersion.data.reference}
                  </h5>
                  <p>
                     {verseVersion === null
                        ? singleVerse.verseText
                        : verseVersion.data.content[0].items
                             .map((p) =>
                                p.name === "char" ? p.items[0].text : p.text
                             )
                             .filter((item) => item !== undefined)
                             .join("")}
                  </p>
               </div>
            </div>
         )}
         {/* {error === null ? "k" : error.msg} */}
      </Fragment>
   );
};

export default connect(null)(VersionVerse);
