import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVerseById } from "../../actions/verseCollection";

const Verse = ({ getVerseById, singleVerse, match }) => {
   useEffect(() => {
      getVerseById(match.params.id);
   }, [getVerseById]);

   return (
      <div>
         {singleVerse === null ? (
            ""
         ) : (
            <div className="card verse">
               <div className="card-body">
                  <h5>{singleVerse.verseReference}</h5>
                  <p>{singleVerse.verseText}</p>
               </div>
            </div>
         )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   singleVerse: state.verseCollection.singleVerse,
});

export default connect(mapStateToProps, { getVerseById })(Verse);
