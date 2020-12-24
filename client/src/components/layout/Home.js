import React, { useEffect, Fragment } from "react";
import GetBibleBooks from "../GetBibleBooks";
import DisplayBibleBooks from "../DisplayBibleBooks";

import { connect } from "react-redux";
import { getBibles } from "../../actions/getBibles";

const Home = ({ getBibles, data: { bibles, bibleBooks } }) => {
   useEffect(() => {
      getBibles();
   }, [getBibles]);

   return (
      <Fragment>
         <GetBibleBooks bibles={bibles} />
         <DisplayBibleBooks bibleBooks={bibleBooks} />
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
});

export default connect(mapStateToProps, { getBibles })(Home);
