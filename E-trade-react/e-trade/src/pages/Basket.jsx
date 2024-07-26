import * as React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  ChakraProvider,
  Container,
  CloseButton
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {removefromBasket } from '../slices/basketSlice'

function Basket() {
  const {products} = useSelector((store)=> store.basket)
  const {selectedProduct}=useSelector((store)=>store.product);
  const {id} = selectedProduct;
  const dispatch = useDispatch();
  // useEffect(()=>{

  // },[])
  const RemoveItem=(itemid)=>{
    const payload={
      id:itemid,
    }
    dispatch(removefromBasket(payload))
  }
  return (
    <>
      <ChakraProvider>
    {
      products.length>0 ? (
          <>
            <Container maxW='1100px' mt={110} centerContent>
            <TableContainer w={1000}>
              <Table>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Image</Th>
                    <Th>Title</Th>
                    <Th>Count</Th>
                    <Th isNumeric>Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    {
                      products && products.map((item)=>{
                      // dispatch(setselectedProduct(item));
                        return(
                          <React.Fragment key={item.id}>
                            <Tr verticalAlign='middle'>
                              <Td maxWidth={5}><CloseButton onClick={() => RemoveItem(item.id)} borderRadius={100} size='lg' /></Td>
                              <Td height={120} w={120} objectFit='cover'><img src={item.image} alt="" /></Td>
                              <Td>{item.title}</Td>
                              <Td>{item.counter}</Td>
                              <Td color="green" fontWeight={700} isNumeric>{item.price * item.counter} $</Td>
                            </Tr>
                            {/* <Divider/> */}
                          </React.Fragment>
                        )
                      })
                    }
                </Tbody>
                <Tfoot>
                  <Tr>
              
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            </Container>
          </>
        ) : 
        <>
        <Container maxW='1100px' mt={110} centerContent>
            <TableContainer w={1000}>
              <Table>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Image</Th>
                    <Th>Title</Th>
                    <Th>Count</Th>
                    <Th isNumeric>Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                      <Td colSpan={5} textAlign='center'>Basket is empty</Td>
                    </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            </Container>
        </>
    }
    </ChakraProvider>
    </>
  )
}

export default Basket
