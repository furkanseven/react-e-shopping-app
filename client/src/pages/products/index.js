import React from "react";
import Card from "../../components/card/index";
import { Grid,Box,Button,Flex} from "@chakra-ui/react";
import {useInfiniteQuery} from '@tanstack/react-query'
import {fetchProductsList} from '../../api'

function Products() {

  
    const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status,} = useInfiniteQuery({
      queryKey: ['products'],
      queryFn: fetchProductsList,
      getNextPageParam: (lastGroup, allGroups) => {
        const morePagesExist = lastGroup?.length===12; //backend'den 12'defa dönüyoruz bu yüzden 12 yazdık(last grup varsa ve uzunluğu 12'ye eşit ise devamı olabileceğinden bu şekilde yazık)

        if(!morePagesExist) return;

        return allGroups.length+1; //1 grup daha açılmış olacak

      },
    })
    if (status==="loading") return 'Yükleniyor...'

    if (status==="error") return 'An error has occurred: ' + error.message
    console.log(data);
  
 

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {
          data.pages.map((group,i)=>(
            <React.Fragment key={i}>
              {
                group.map((item,i)=>(
                  <Box key={i} >
                    <Card item={item} key={item._id}/>
                  </Box>
                ))
              }
            </React.Fragment>
          ))
        }
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          colorScheme="blue"
          isLoading={isFetchingNextPage}
        >
          {isFetchingNextPage?'Daha Fazla...': hasNextPage ? 'Daha Fazla': 'Başka Ürün Yok'}
        </Button>
      </Flex>
    </>
  );
}

export default Products;
