import React, { useEffect, Fragment } from "react";
import GetBibleBooks from "../GetBibleBooks";
import DisplayBibleBooks from "../DisplayBibleBooks";
import DisplayBibleBookChapters from "../DisplayBibleBookChapters";

import { connect } from "react-redux";
import { getBibles } from "../../actions/getBibles";

const Home = ({
   getBibles,
   data: { bibles, bibleBooks, bibleBookChapters },
}) => {
   useEffect(() => {
      getBibles();
   }, [getBibles]);

   return (
      <Fragment>
         <GetBibleBooks bibles={bibles} />
         <DisplayBibleBooks bibleBooks={bibleBooks} />
         {/* <DisplayBibleBookChapters bibleBookChapters={bibleBookChapters} /> */}
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
});

export default connect(mapStateToProps, { getBibles })(Home);
