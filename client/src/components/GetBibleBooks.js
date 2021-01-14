import React, { useState } from "react";
import { connect } from "react-redux";
import { getBibleBooks } from "../actions/getBibles";

const GetBibleBooks = ({ getBibleBooks, bibles }) => {
   const [id, setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
   };

   if (id !== "") {
      getBibleBooks(id);
   }

   return (
      <div className="form-group  input-group md-form form-sm form-2 mt-4 mb-4">
         <select
            type="text"
            name="id"
            onChange={handleChange}
            value={id}
            className="form-control blue-border"
         >
            <option value="">Select Bible Version</option>
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
      </div>
   );
};

export default connect(null, { getBibleBooks })(GetBibleBooks);
