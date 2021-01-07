import React from "react";
import { connect } from "react-redux";
import { remove } from "../../actions/alert";

const Alert = ({ alerts, remove }) =>
   alerts !== null &&
   alerts.length > 0 &&
   alerts.map((alert) => (
      // <div key={alert.id} className={`alert ${alert.alertType}`}>
      //    {alert.msg}
      // </div>
      <div key={alert.id} className="container mt-4 al">
         <div className={`card alert ${alert.alertType}`}>
            <div className="card-body">
               {alert.msg.toUpperCase()}
               <a href="#!" className="ex">
                  <i className="fas fa-times" onClick={(e) => remove(e)}></i>
               </a>
            </div>
         </div>
      </div>
   ));

const mapStateToProps = (state) => ({
   alerts: state.alert,
});

export default connect(mapStateToProps, { remove })(Alert);
