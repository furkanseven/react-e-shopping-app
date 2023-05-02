import React from "react";
import { Box,Image,Button} from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment"

function Card({item}) {


  return (
    <>
      <Box bg="#1A365D" p={4} color="white" overflow="hidden">
          <Link to={`/product/${item._id}`}>
            <Image src={item.photos[0]} alt="product" loading="lazy"/>
            <Box p={6}>
                <Box d="flex" alignItems="baseline">{moment(item.createdAt).format('DD/MM/YYYY')}</Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">{item.title}</Box>
                <Box>{item.price} TL</Box>
            </Box>
          </Link>
          <Button colorScheme='orange'>Sepete Ekle</Button>
      </Box>
    </>
  );
}

export default Card;
