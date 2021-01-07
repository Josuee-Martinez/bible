import React, { useState } from "react";
import { connect } from "react-redux";
import { getBibleBooks } from "../actions/getBibles";

const GetBibleBooks = ({ getBibleBooks, bibles }) => {
   const [id, setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
      // setId({ ...id, [e.target.name]: e.target.value });
   };

   if (id !== "") {
      getBibleBooks(id);
   }

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    getBibleBooks(id);
   // };
   console.log(bibles);

   return (
      // <form onSubmit={handleSubmit} className="mt-4 mb-4">
      <div className="form-group  input-group md-form form-sm form-2 mt-4 mb-4">
         {/* <input type="text" name="id" onChange={handleChange} /> */}
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
         {/* <button type="submit" className="input-group-text blue-border">
               <i className="fas fa-search"></i>
            </button> */}
      </div>
      // </form>
   );
};

export default connect(null, { getBibleBooks })(GetBibleBooks);
