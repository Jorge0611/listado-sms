import {
  Button,
  Header,
  HeaderName,
  DataTable,
  TableToolbarAction,
} from "carbon-components-react";

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
} = DataTable;

export default function Testing() {
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
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      </Header>

      <Button kind="danger" style={{ "margin-top": "6%" }}>
        Example usage
      </Button>

      {/* <Table style={{ "margin-top": "4%" }}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader id={header.key} key={header}>
                {header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row)
                .filter((key) => key !== "id")
                .map((key) => {
                  return <TableCell key={key}>{row[key]}</TableCell>;
                })}
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <DataTable
        rows={rows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getTableProps,
          getRowProps,
          onInputChange,
        }) => (
          <TableContainer title="DataTable" description="With filtering">
            <TableToolbar>
              <TableToolbarContent>
                {/* pass in `onInputChange` change here to make filtering work */}
                <TableToolbarSearch onChange={onInputChange} />

                <Button>Primary Button</Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header, key) => (
                    <TableHeader
                      key={"header-" + key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, key) => (
                  <TableRow key={"row-" + key} {...getRowProps({ row })}>
                    {row.cells.map((cell, key) => (
                      <TableCell key={"cell-" + key + cell.name}>
                        {cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      ></DataTable>
    </>
  );
}
