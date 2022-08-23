import myPic from "./1x1.JPG";
import { GrMail } from "react-icons/gr";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Info() {
  return (
    <div className="header">
      <img className="img" src={myPic} alt="myPic" />
      <h1 className="name">Tristan Lim</h1>
      <p className="position">MERN Developer</p>
      <p className="website">website.com</p>
      <div className="buttons">
        <MDBBtn
          style={{
            backgroundColor: "white",
            color: "black",
            width: "12em",
          }}
          href="#"
        >
          <MDBIcon className="fas fa-envelope" fab icon="envelope" /> Email
        </MDBBtn>
        <MDBBtn style={{ backgroundColor: "#55acee", width: "12em" }} href="#">
          <MDBIcon className="fab fa-linkedin" fab icon="linkedin" /> LinkedIn
        </MDBBtn>
      </div>
    </div>
  );
}

export default Info;
