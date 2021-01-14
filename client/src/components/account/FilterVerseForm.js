import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
   filteredVerses,
   clearFilteredVerses,
} from "../../actions/verseCollection";
const FilterVerseForm = ({
   filteredVerse,
   filteredVerses,
   clearFilteredVerses,
}) => {
   useEffect(() => {
      if (filteredVerse === null) {
         str.current.value = "";
      }
   });
   const str = useRef("");

   const change = (e) => {
      if (str.current.value !== "") {
         filteredVerses(e.target.value);
      } else {
         clearFilteredVerses();
      }
   };
   return (
      <input
         ref={str}
         className="form-control mb-4"
         type="text"
         placeholder="Search verse"
         onChange={change}
      ></input>
   );
};

const mapStateToProps = (state) => ({
   filteredVerse: state.verseCollection.filteredVerse,
});

export default connect(mapStateToProps, {
   filteredVerses,
   clearFilteredVerses,
})(FilterVerseForm);
