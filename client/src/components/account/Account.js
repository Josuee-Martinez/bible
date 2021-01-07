import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserVerses } from "../../actions/verseCollection";

const Account = ({
   authenticated,
   user,
   userVerses,
   getUserVerses,
   loading,
}) => {
   useEffect(() => {
      getUserVerses();
   }, [getUserVerses]);
   console.log(authenticated);
   console.log(userVerses);
   return (
      <div className="mb-4">
         {userVerses === null || userVerses.length === 0 ? (
            <Fragment>
               <h3 className="mt-4 mb-4 text-center heading-blue">
                  {`Welcome, ${
                     user &&
                     user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)
                  }!`}
               </h3>
               <h5 className="text-center heading-blue">
                  Read the Bible and add your favorite verses to your
                  personalized collection
               </h5>
            </Fragment>
         ) : (
            <Fragment>
               <h3 className="mt-4 mb-4 text-center heading-blue">
                  <i className="fas fa-bookmark">
                     {user === null
                        ? ""
                        : ` ${
                             user.username.charAt(0).toUpperCase() +
                             user.username.slice(1)
                          }'s verse collection `}
                  </i>
               </h3>
               <input
                  className="form-control mb-4"
                  type="text"
                  placeholder="Search verse"
               ></input>
               {userVerses.map((verse, i) => (
                  <div className="card" key={i}>
                     <Link
                        to={`/verse/${verse._id}`}
                        className="btn btn-primary verse-btn"
                     >
                        <div className="card-body">
                           <h6>{verse.verseReference}</h6>
                           <p>{verse.verseText}</p>
                        </div>
                     </Link>
                  </div>
               ))}
            </Fragment>
         )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
   user: state.auth.user,
   userVerses: state.verseCollection.userVerses,
   loading: state.auth.loading,
});

export default connect(mapStateToProps, { getUserVerses })(Account);
