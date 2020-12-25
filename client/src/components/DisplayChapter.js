import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser, {
   processNodes,
   convertNodeToElement,
   htmlparser2,
} from "react-html-parser";

const DisplayChapter = ({ data: { chapter } }) => {
   // console.log(chapter.data);
   return (
      <div>
         {chapter === null
            ? ""
            : chapter.data.reference.split(" ")[0] + " " + chapter.data.number}

         {chapter === null ? "" : ReactHtmlParser(chapter.data.content)}
      </div>
   );
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
});

export default connect(mapStateToProps)(DisplayChapter);
