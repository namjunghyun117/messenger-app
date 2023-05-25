import React, { useEffect, useState } from "react";
import { InputLabel, Input, FormControl } from "@mui/material";
import { Button } from "@mui/joy";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    onSnapshot(collection(db, 'message'))(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [] )

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, message: input}]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="soft"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
