import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser, {
   processNodes,
   convertNodeToElement,
   htmlparser2,
} from "react-html-parser";

const DisplayChapter = ({ data: { chapter } }) => {
   console.log(chapter);
   return <div>{ReactHtmlParser(chapter)}</div>;
};

const mapStateToProps = (state) => ({
   data: state.getBibles,
});

export default connect(mapStateToProps)(DisplayChapter);
