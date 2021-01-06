import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getVerseById } from "../../actions/verseCollection";
import { getBibles } from "../../actions/getBibles";

import VerseForm from "./VerseForm";
import VersionVerse from "./VersionVerse";

const Verse = ({
   getVerseById,
   singleVerse,
   verseVersion,
   match,
   bibles,
   getBibles,
}) => {
   useEffect(() => {
      getVerseById(match.params.id);
      getBibles();
   }, [getBibles]);

   return (
      <Fragment>
         <VerseForm bibles={bibles} singleVerse={singleVerse} />
         <VersionVerse singleVerse={singleVerse} verseVersion={verseVersion} />
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   singleVerse: state.verseCollection.singleVerse,
   verseVersion: state.verseCollection.verseVersion,
   bibles: state.getBibles.bibles,
   error: state.verseCollection.error,
});

export default connect(mapStateToProps, {
   getVerseById,
   getBibles,
})(Verse);
