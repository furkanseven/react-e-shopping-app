import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log("Detay Sayfasında hata oluştu", isError);
  }

  const images = data.photos.map((photo) => ({ original: photo }));

  console.log(data);
  console.log(process.env.REACT_APP_BASE_URL);

  return (
    <>
      <Box margin="10" w="35%">
        <ImageGallery items={images}/>
      </Box>
      <Button colorScheme="yellow">Sepete Ekle</Button>

      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>

      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>

      <p>{data.description}</p>
    </>
  );
}

export default ProductDetail;
