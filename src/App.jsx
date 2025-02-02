import { useState } from "react";
import "@mantine/core/styles.css";
import {
  Button,
  MantineProvider,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import "./App.css";
import { useForm } from "@mantine/form";
import { useRef } from "react";

// // Using Mantine Elements
// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <MantineProvider>
//       <h1>React Form</h1>
//       {/* <label htmlFor="Email">Email</label> */}
//       {/* <br /> */}
//       {/* <input
//         type="text"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />*/}

//       {/* <button onClick={() => setEmail(" ")}>Clear</button> */}

//       <form
//         onSubmit={() => {
//           console.log(email, password), setEmail(""), setPassword("");
//         }}
//       >
//         <TextInput
//           label="Email"
//           placeholder="Enter your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           // error="Invalid Email"
//         />

//         <PasswordInput
//           label="Password"
//           placeholder="Enter your Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <Button onClick={() => setEmail(" ")} color="green" type="submit">
//           Clear
//         </Button>
//       </form>
//     </MantineProvider>
//   );
// }

// Using Mantine FORM
function App() {
  const headRef = useRef(null);
  const textRef = useRef(null);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      // email: (value) => (value == "phillip@email.com" ? null : "Invalid Email"),

      email: (value) => {
        let users = ["phillip@email.com", " mark@rmail.com", "john@mail.com"];
        if (users.includes(value)) {
          return null;
        } else {
          return "Invalid Email";
        }
      },

      password: (value) => (value == "12345" ? null : "Invalid Password"),
    },
  });

  return (
    <MantineProvider>
      <h1 ref={headRef}>React Form</h1>
      <p ref={textRef}>size</p>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Email"
          placeholder="Enter your Email"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your Password"
          {...form.getInputProps("password")}
        />

        <Button onClick={() => setEmail(" ")} color="green" type="submit">
          Clear
        </Button>

        <br />
        <button
          onClick={() => {
            headRef.current.style.textDecoration = "underline";
            headRef.current.style.color = "Red";
          }}
        >
          Update The Heading
        </button>
      </form>
      <button
        onClick={() => {
          textRef.current.style.innerText = "xx-large";
        }}
      >
        Change Size
      </button>
    </MantineProvider>
  );
}

export default App;

// import React from 'react';
// import { Button, Checkbox, Group, TextInput } from '@mantine/core';
// import { useForm } from '@mantine/form';

// function Demo() {
//   const form = useForm({
//     mode: 'uncontrolled',
//     initialValues: {
//       email: '',
//       termsOfService: false,
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//     },
//   });

//   return (
//     <form onSubmit={form.onSubmit((values) => console.log(values))}>
//       <TextInput
//         withAsterisk
//         label="Email"
//         placeholder="your@email.com"
//         key={form.key('email')}
//         {...form.getInputProps('email')}
//       />

//       <Checkbox
//         mt="md"
//         label="I agree to sell my privacy"
//         key={form.key('termsOfService')}
//         {...form.getInputProps('termsOfService', { type: 'checkbox' })}
//       />

//       <Group justify="flex-end" mt="md">
//         <Button type="submit">Submit</Button>
//       </Group>
//     </form>
//   );
// }
// export default Demo;
