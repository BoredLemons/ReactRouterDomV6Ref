import React from "react";
import { useParams, useNavigate } from "react-router-dom"

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSave = () => {
    navigate("/products", { replace: true });
  };

  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={handleSave} className="btn btn-success btn-sm">
        Save
      </button>
    </div>
  );
};

export default ProductDetails;
