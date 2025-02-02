import { useState } from "react";
import "@mantine/core/styles.css";
import { Button, MantineProvider, TextInput } from "@mantine/core";
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  return (
    <MantineProvider>
      <h1>React Form</h1>
      {/* <label htmlFor="Email">Email</label> */}
      {/* <br /> */}
      {/* <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />*/}

      {/* <button onClick={() => setEmail(" ")}>Clear</button> */}

      <form>
        <TextInput label="Email" placeholder="Enter your Email" />
      </form>

      <form>
        <TextInput label="Password" placeholder="Enter your Password" />
      </form>

      <Button onClick={() => setEmail(" ")} color="green">
        Clear
      </Button>
    </MantineProvider>
  );
}
export default App;
