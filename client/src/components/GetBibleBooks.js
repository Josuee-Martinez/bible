import React, { useState } from "react";
import { connect } from "react-redux";
import { getBibleBooks } from "../actions/getBibles";

const GetBibleBooks = ({ getBibleBooks, bibles }) => {
   const [id, setId] = useState("");

   // const { idd } = id;

   const handleChange = (e) => {
      setId(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      getBibleBooks(id);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="form-group  input-group md-form form-sm form-2 pl-0 mt-4">
            {/* <label htmlFor="bibles">Select Bible version</label> */}
            <select
               type="text"
               name="id"
               onChange={handleChange}
               value={id}
               className="form-control custom-select lime-border"
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
            <button
               type="submit"
               className="input-group-text lime-border lighten-2"
            >
               <i className="fas fa-search text-grey" aria-hidden="true"></i>
            </button>
         </div>
      </form>
   );
};

export default connect(null, { getBibleBooks })(GetBibleBooks);
