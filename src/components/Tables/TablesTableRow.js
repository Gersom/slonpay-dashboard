import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Progress,
  Tr,
  Select,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date, progression, changeTableData } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const completeRow = (event) => {
    changeTableData(event.target.value)
    onClose()
  }

  return (
  <>
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {domain}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td>
        {status == 0 &&
          <Badge
            bg={bgStatus}
            color={colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {'En proceso'}
          </Badge>
        }
        {status == 1 &&
          <Badge
            bg={"#e94949"}
            color={"white"}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {'Cancelado'}
          </Badge>
        }
        {status == 2 &&
          <Badge
            bg={"green.400"}
            color={"white"}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {'Completado'}
          </Badge>
        }
      </Td>
      {/* <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorscheme={progression === 100 ? "teal" : "cyan"}
            size="xs"
            value={progression}
            borderRadius="15px"
          />
        </Flex>
      </Td> */}
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
      <Td>
        <Button bg="transparent" onClick={onOpen}>
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
      </Td>
    </Tr>

    {/* <ModalData /> */}
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        
        <AlertDialogBody>
          <Tr>
            <Td>Monto:</Td>
            <Text margin="0 15px 0 0"></Text>
            <Td>
              <Text fontSize="md" color={textColor} fontWeight="bold">
                {domain}
              </Text>
            </Td>           
            <Text margin="0 15px 0 0"></Text>
            <Td>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                ({subdomain})
              </Text>
            </Td>           
          </Tr>
          <Tr>
            <Td>Fecha:</Td>
            <Text margin="0 15px 0 0">
            </Text>
            <Td>
              <Text margin="15px 0 0 0" fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                {date}
              </Text>
            </Td>           
          </Tr>
          <Tr>
            <Td>Estado:</Td>
            <Text margin="0 15px 0 0"></Text>
            <Td>
              {/* <Badge
                bg={status ? "green.400" : bgStatus}
                color={status ? "white" : colorStatus}
                fontSize="16px"
                p="3px 10px"
                borderRadius="8px"
              >
                {status ? 'Completado' : 'En proceso'}
              </Badge> */}
              <Select value={status} onChange={completeRow}>
                <option value={0}>En proceso</option>
                <option value={1}>Cancelado</option>
                <option value={2}>Completado</option>
              </Select>
            </Td>
          </Tr>
          {/* <Text margin="0 0 15px 0"></Text> */}
          
          <Text margin="0 0 15px 0"></Text>
          <Textarea placeholder='Descripción...' />
        </AlertDialogBody>
        <AlertDialogFooter>
          {/* <Button ref={cancelRef} onClick={completeRow}>
            {status == 0 ? 'Aceptar' : ''}
            {status == 1 ? 'Completar' : ''}
            {status == 2 ? 'Aceptar' : ''}
          </Button> */}
          <Button onClick={onClose} colorScheme='red' ml={3}>
            Cancelar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </>
  );
}

export default TablesTableRow;
