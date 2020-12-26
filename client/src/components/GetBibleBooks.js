import React, { useState } from "react";
import { connect } from "react-redux";
import { getBibleBooks } from "../actions/getBibles";

const GetBibleBooks = ({ getBibleBooks, bibles }) => {
   const [id, setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      getBibleBooks(id);
   };

   return (
      <form onSubmit={handleSubmit} className="mt-4 mb-4">
         <div className="form-group  input-group md-form form-sm form-2 pl-0">
            <select
               type="text"
               name="id"
               onChange={handleChange}
               value={id}
               className="form-control blue-border"
            >
               <option value="">Select Bile version</option>
               {bibles === null
                  ? ""
                  : bibles.data.map((bible, i) => (
                       <option key={i} value={bible.id}>
                          {bible.name}
                       </option>
                    ))}
            </select>
            <button type="submit" className="input-group-text blue-border">
               <i className="fas fa-search"></i>
            </button>
         </div>
      </form>
   );
};

export default connect(null, { getBibleBooks })(GetBibleBooks);
