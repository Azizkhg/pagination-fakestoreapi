import { Header } from "../header";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

export function Product() {
  // const [title, setTitle] = useState("");
  // const [catagory, setCatagory] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // useEffect(() => {
  //   setTitle(localStorage.getItem("Title"));
  //   setCatagory(localStorage.getItem("Catagory"));
  //   setDescription(localStorage.getItem("Description"));
  //   setPrice(localStorage.getItem("Price"));
  // }, []);
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />

      <MDBRow className="justify-content-center">
        <MDBCol sm="6">
          <MDBContainer
            fluid
            className="my-5"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <MDBCard className="text-black">
              <MDBCardImage
                src={data.image}
                position="top"
                alt="Apple Computer"
                style={{
                  width: "50%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              />
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
            </MDBCard>
          </MDBContainer>
        </MDBCol>
      </MDBRow>

      <Footer />
    </div>
  );
}
