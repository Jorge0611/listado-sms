import TableData from "../component/Datatable";
export default function User() {
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
      <TableData rows={rows} headers={headers} />
    </>
  );
}
