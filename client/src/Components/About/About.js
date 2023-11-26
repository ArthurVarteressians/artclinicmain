import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./About.css";

const AboutMap = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const delayToShowMap = setTimeout(() => {
      setShowMap(true);
    }, 1000);

    return () => {
      clearTimeout(delayToShowMap);
    };
  }, []);

  const mapCenter = { lat: 40.200183, lng: 44.49135 };
  const zoomLevel = 14;

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true
  };

  return (
    <div className="mainAboutusSec">
      {showMap && (
        <div className="mapInAbout">
          <LoadScript
            googleMapsApiKey="AIzaSyDvIyx1Zog-TxltpeOh3VKklQQifU-ZptI"
            onLoad={() => {}}
          >
            <GoogleMap
              mapContainerStyle={{ height: "100%" }}
              center={mapCenter}
              zoom={zoomLevel}
              options={mapOptions}
            >
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
      )}
      <div className="aboutUscontetn">
        <p>
          Welcome to <span style={{ fontWeight: "bold" }}> Art Clinic</span>,
          your trusted destination for online healthcare services. Our clinic is
          dedicated to providing exceptional medical care that is
          patient-centric, accessible, and reliable.
        </p>
        <p style={{ paddingTop: "20px" }}>
          At <span style={{ fontWeight: "bold" }}> Art Clinic</span>, we
          understand the importance of convenient and accessible healthcare in
          today's fast-paced world. Our team of skilled healthcare
          professionals, including experienced physicians, nurses, and support
          staff, are committed to delivering high-quality virtual healthcare
          services to patients in the comfort of their own homes.
        </p>
        <p style={{ paddingTop: "20px" }}>
          At
          <span style={{ fontWeight: "bold" }}> Art Clinic</span>, we prioritize
          patient confidentiality and privacy. We use advanced encryption and
          security measures to protect patient information and ensure that all
          interactions and communications are secure and confidential.
        </p>
      </div>
    </div>
  );
};

export default AboutMap;
