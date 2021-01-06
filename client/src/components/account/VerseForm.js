import React, { useState } from "react";
import { getChapterVerse } from "../../actions/getBibles";
import { getVerseByVersion } from "../../actions/verseCollection";
import { connect } from "react-redux";

const VerseForm = ({ getVerseByVersion, singleVerse, bibles }) => {
   const [id, setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
      //   setId({ ...id, [e.target.name]: e.target.value });
   };

   if (id !== "") {
      getVerseByVersion(id, singleVerse.verseId);
      //   console.log(id, singleVerse.verseId);
   }

   //    if (verseVersion !== null) {
   //       console.log(verseVersion);
   //    }
   //    console.log(id);
   return (
      <div className="form-group  input-group md-form form-sm form-2 pl-0 mt-4 mb-4">
         {/* <input type="text" name="id" onChange={handleChange} /> */}
         <select
            type="text"
            name="id"
            onChange={handleChange}
            value={id}
            className="form-control blue-border"
         >
            <option value="">Read Verse in Other Versions</option>
            {bibles === null
               ? ""
               : bibles.data.map((bible, i) => {
                    if (bible.language.id === "eng") {
                       return (
                          <option key={i} value={bible.id}>
                             {bible.name}
                          </option>
                       );
                    }
                 })}
         </select>
         {/* <button type="submit" className="input-group-text blue-border">
           <i className="fas fa-search"></i>
        </button> */}
      </div>
   );
};

// const mapStateToProps = (state) => ({
//    verseVersion: state.verseCollection.verseVersion,
// });

export default connect(null, { getChapterVerse, getVerseByVersion })(VerseForm);
