import React, { useEffect, useState } from "react";
import Pagination from "../components/pagination";
import { Header } from "../header";
import Footer from "../footer";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setApiData(res.data))
      .catch((e) => {
        console.error(e);
      });
  }, []);
  console.log(apiData);

  const sortProducts = (event) => {
    if (event.target.value == "categories") {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setApiData(res.data));
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${event.target.value}`)
        .then((res) => setApiData(res.data));
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = apiData.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Header />
      {/* card start here */}
      <select name="catagory" id="catag" onChange={sortProducts}>
        <option value={"categories"}>show all Catagory</option>
        <optgroup label="Womens">
          <option value={"women's clothing"}>women's clothing</option>
          <option value={"jewelery"}>jewelery</option>
        </optgroup>
        <optgroup label="Men's">
          <option value={"men's clothing"}>men's clothing</option>
        </optgroup>
        <option value={"electronics"}>electronics</option>
      </select>
      <MDBContainer
        fluid
        className="my-5"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {currentPost?.map((data) => {
          return <ProductCard data={data} />;
        })}
      </MDBContainer>

      {/* card ends here */}
      {/* pagination */}
      <Pagination
        totalPosts={apiData.length}
        postPerPage={postPerPage}
        setCurrentPage={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}
