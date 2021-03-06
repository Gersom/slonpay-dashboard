import React, { useState } from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Select,
  Box,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {

  const [tableData, setTableData] = useState(tablesTableData);
  const [typeState, setTypeState] = useState(0);
  const textColor = useColorModeValue("gray.700", "white");

  const changeTableData = (newValue, email) => {
    let temporalIndex = tableData.findIndex(value => value.email === email)
    let temporal = tableData
    temporal[temporalIndex].status = parseInt(newValue)
    setTableData(temporal)
  }

  const changeBuyAndSell = (event) => {
    setTypeState(event.target.value)
    // Compra
  }

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        
        <Flex>
          <Box>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Operaciones de :
              </Text>
            </CardHeader>
          </Box>
          <Box w='20px' />
          <Box>
            <Select value={typeState} onChange={(event) => changeBuyAndSell(event)}>
              <option value={0}>Compra</option>
              <option value={1}>Venta</option>
            </Select>
          </Box>
        </Flex>
        
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Author
                </Th>
                <Th color="gray.400">Monto</Th>
                <Th color="gray.400">Estado</Th>
                <Th color="gray.400">Fecha</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row) => {
                return (
                  <TablesTableRow
                    key={'Tables' + row.name}
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                    progression={row.progression}
                    changeTableData={changeTableData}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* <Card
        my="22px"
        overflowX={{ sm: "scroll", xl: "hidden" }}
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Projects Table
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400">
                  Companies
                </Th>
                <Th color="gray.400">Budget</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Completion</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row) => {
                return (
                  <TablesProjectRow
                    key={'TablesProjectRow' + row.name}
                    name={row.name}
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
    </Flex>
  );
}

export default Tables;
