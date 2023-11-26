import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import End_point from "../../../../Baseurl";

const CallRequests = () => {
  const [callReqList, setCallReqList] = useState([]);

  useEffect(() => {
    getCallRequests();
  }, []);

  const getCallRequests = () => {
    Axios.get(`${End_point}/ConsultingReq`).then((response) => {
      setCallReqList(response.data);
    });
  };
  const deleteConsultingRequest = (id) => {
    console.log("Deleting consulting request with ID:", id); // Log the ID parameter

    Axios.delete(`${End_point}/ConsultingReq/${id}`)
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
          Swal.fire("Error", "Failed to delete item.", "error");
        } else {
          setCallReqList((prevList) => prevList.filter((val) => val.id !== id));
          Swal.fire("Success", "Your item is deleted!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", "Failed to delete item.", "error");
      });
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      confirmButtonText: "Cancel",
      denyButtonText: `Yes, delete it`,
    }).then((result) => {
      if (result.isDenied) {
        deleteConsultingRequest(Number(id));
      }
    });
  };

  return (
    <div className="callRequests">
      {callReqList.length > 0 && (
        <div className="patientsGrid">
          {callReqList.map((val) => (
            <div className="patientInfo" key={val.id}>
              <div>
                <strong>Request ID: </strong> {val.id}
              </div>
              <div>
                <strong>Name: </strong> {val.name}
              </div>
              <div>
                <strong>Email: </strong> {val.email}
              </div>
              <div>
                <strong>Phone Number: </strong> {val.phonenumber}
              </div>
              <div>
                <strong>Call Requested On:</strong>{" "}
                {new Date(val.submission_time).toLocaleString()}
              </div>
              <button style={{marginLeft:"40%"}}
                onClick={() => confirmDelete(val.id)}
                className="deleteBtn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CallRequests;
