import { Content } from "carbon-components-react";
import Navbar from "../component/Navbar";

export default function Alguito() {
  return (
    <>
      <Navbar></Navbar>
      <Content style={{ marginLeft: "75vh" }}>
        <div className="bx--grid">
          <div className="bx--row">Buenas</div>
        </div>
      </Content>
    </>
  );
}
