import React, { useState } from "react";
import "./Popup.css";
import Swal from "sweetalert2";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleUnderstoodClick = () => {
    setShowPopup(false);
    setShowMainContent(true);
    document.body.style.overflow = "auto";
  };

  if (showPopup) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div
            className="modal fade show"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Important
                  </h1>
                </div>
                <div className="modal-body">
                  This site is only for testing. You will find some usernames
                  and passwords in the managers' login section which you can log
                  in to different accounts. Therefore, make sure to use not real
                  information in the patient Signup section. Thanks!
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUnderstoodClick}
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
