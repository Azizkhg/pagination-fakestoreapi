import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  return (
    <MDBCard
      className="text-black"
      style={{ maxWidth: "33.33%" }}
      key={data.id}
    >
      <Link to={`/products/${data.id}`}>
        {" "}
        <MDBCardImage
          src={data.image}
          position="top"
          alt="product img"
          style={{
            width: "50%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      </Link>
      <Link
        className="text-decoration-none"
        style={{ color: "black" }}
        to={`/products/${data.id}`}
      >
        <MDBCardBody>
          <div className="text-center">
            <MDBCardTitle className="text-decoration-none">
              {data.title}
            </MDBCardTitle>
            <p className="text-muted mb-4 ">{data.catagory}</p>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>Discription</span>
              <span>{data.description}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Total inc GST</span>
            <span>₹.{data.price}</span>
          </div>
        </MDBCardBody>
      </Link>
    </MDBCard>
  );
}
