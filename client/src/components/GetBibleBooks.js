import React, { useState } from "react";
import { connect } from "react-redux";
import { getBibleBooks } from "../actions/getBibles";

const GetBibleBooks = ({ getBibleBooks, bibles }) => {
   const [id, setId] = useState({
      idd: "",
   });

   const { idd } = id;

   const handleChange = (e) => {
      setId({ ...id, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      getBibleBooks(idd);
   };

   return (
      <form onSubmit={handleSubmit}>
         <select
            name="bibles"
            id="bibles"
            type="text"
            id="text"
            name="idd"
            value={idd}
            onChange={handleChange}
         >
            {bibles === null
               ? ""
               : bibles.data.map((bible, i) => (
                    <option key={i} value={bible.id}>
                       {bible.name}
                    </option>
                 ))}
         </select>
         <button type="submit" />
      </form>
   );
};

export default connect(null, { getBibleBooks })(GetBibleBooks);
