import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div className="footer">
      <MDBBtn tag="a" color="none" className="m-3" style={{ color: "#918E9B" }}>
        <MDBIcon fab icon="facebook-square" size="lg" />
      </MDBBtn>

      <MDBBtn tag="a" color="none" className="m-3" style={{ color: "#918E9B" }}>
        <MDBIcon fab icon="google" size="lg" />
      </MDBBtn>

      <MDBBtn tag="a" color="none" className="m-3" style={{ color: "#918E9B" }}>
        <MDBIcon fab icon="instagram-square" size="lg" />
      </MDBBtn>

      <MDBBtn tag="a" color="none" className="m-4" style={{ color: "#918E9B" }}>
        <MDBIcon fab icon="github-square" size="lg" />
      </MDBBtn>
    </div>
  );
}
