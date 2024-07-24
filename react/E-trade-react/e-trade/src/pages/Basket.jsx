import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Divider, CloseButton } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const {products} = useSelector((store)=> store.basket)

function Basket() {
  return (
    <>
    <ChakraProvider>
      <Container maxW='850px' mt={110} centerContent>
      <TableContainer w={850}>
        <Table>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th w={10}></Th>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
              {
                products && products.map((item)=>{
                  return(
                    <>
                      <Tr>
                        <CloseButton borderRadius={100} size='lg' />
                        <Td><img src={item.image} alt="" /></Td>
                        <Td>{item.title}</Td>
                        <Td color="green" fontWeight={700} isNumeric>{item.price} $</Td>
                      </Tr>
                      <Divider/>
                    </>
                  )
                })
              }
            {/* <Tr>
              <CloseButton borderRadius={100} size='lg' />
              <Td><img src="" alt="" /></Td>
              <Td>centimetres (cm)</Td>
              <Td color="green" fontWeight={700} isNumeric>30.48 $</Td>
            </Tr>
            <Tr>
              <CloseButton borderRadius={100} size='lg' />
              <Td><img src="" alt="" /></Td>
              <Td>metres (m)</Td>
              <Td color="green" fontWeight={700} isNumeric>200 $</Td>
            </Tr> */}
          </Tbody>
          <Tfoot>
            <Tr>
        
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      </Container>
    </ChakraProvider>
    </>
  )
}

export default Basket
