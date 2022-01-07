import react, { useEffect, useState } from "react";
import { getProductById } from "../app/services/productsServices";

export const ProductView = ({ match }) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const { params } = match;
    getProductById(params.id)
      .then(productFromDB => setProductDetail(productFromDB))
      .catch(err => console.log(err));
  }, [match]);

  return (
    <div>
      <h1>{productDetail && JSON.stringify(productDetail)}</h1>
    </div>
  );
};
