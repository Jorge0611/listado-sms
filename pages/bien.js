import {
  Button,
  Header,
  HeaderName,
  DataTable,
  TableToolbarAction,
} from "carbon-components-react";

import { Delete16, Save16, Download16 } from "@carbon/icons-react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableBatchActions,
  TableBatchAction,
  TableSelectAll,
  TableSelectRow,
} = DataTable;

export default function Bien() {
  const rows = [
    {
      id: "load-balancer-1",
      name: "Load Balancer 1",
      rule: "Round robin",
      Status: "Starting",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-2",
      name: "Load Balancer 2",
      rule: "DNS delegation",
      status: "Active",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-3",
      name: "Load Balancer 3",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-4",
      name: "Load Balancer 4",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-5",
      name: "Load Balancer 5",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-6",
      name: "Load Balancer 6",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-7",
      name: "Load Balancer 7",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
  ];
  //const headers = ["Name", "Rule", "Status", "Other", "Example"];

  const headers = [
    {
      // `key` is the name of the field on the row object itself for the header
      key: "name",
      // `header` will be the name you want rendered in the Table Header
      header: "Name",
    },
    {
      key: "rule",
      header: "Rule",
    },
    {
      key: "status",
      header: "Status",
    },
    {
      key: "other",
      header: "Other",
    },
    {
      key: "example",
      header: "Example",
    },
  ];
  return (
    <>
      <DataTable rows={rows} headers={headers}>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
          onInputChange,
          selectedRows,
          getTableProps,
          getTableContainerProps,
        }) => {
          const batchActionProps = getBatchActionProps();

          return (
            <TableContainer
              title="DataTable"
              description="With batch actions"
              {...getTableContainerProps()}
            >
              <TableToolbar {...getToolbarProps()} size="sm">
                <TableBatchActions {...batchActionProps}>
                  <TableBatchAction
                    tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                    renderIcon={Delete16}
                    //onClick={batchActionClick(selectedRows)}
                  >
                    Delete
                  </TableBatchAction>
                  <TableBatchAction
                    tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                    renderIcon={Save16}
                    onClick={() => console.log(selectedRows)}
                  >
                    Save
                  </TableBatchAction>
                  <TableBatchAction
                    tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                    renderIcon={Download16}
                    //onClick={batchActionClick(selectedRows)}
                  >
                    Download
                  </TableBatchAction>
                </TableBatchActions>
                <TableToolbarContent
                  aria-hidden={batchActionProps.shouldShowBatchActions}
                >
                  <TableToolbarSearch
                    persistent="true"
                    tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                    onChange={onInputChange}
                  />
                  <TableToolbarMenu
                    tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                    size="sm"
                  >
                    <TableToolbarAction onClick={() => alert("Alert 1")}>
                      Action 1
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert("Alert 2")}>
                      Action 2
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert("Alert 3")}>
                      Action 3
                    </TableToolbarAction>
                  </TableToolbarMenu>
                  <Button
                    tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                    //onClick={action("Add new row")}
                    size="small"
                    kind="primary"
                  >
                    Add new
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map((header, i) => (
                      <TableHeader key={i} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i} {...getRowProps({ row })}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        }}
      </DataTable>
    </>
  );
}
