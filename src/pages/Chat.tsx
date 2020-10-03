import React, { FormEvent, useEffect, useState } from "react";
import {
  Wrapper,
  Messages,
  UserMessage,
  CurrentUserMessage,
} from "../components/ChatStyle";
import { auth, database } from "../services/firebase";
import { signOut } from "../helpers/auth";

const Chat = () => {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  useEffect(() => {
    setReadError(null);

    try {
      database.ref("chats").on("value", (snapshot: any) => {
        let chats: any = [];
        snapshot.forEach((snap: any): void => {
          chats.push(snap.val());
        });
        setChats(chats);
      });
    } catch (error) {
      setReadError(error.message);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setWriteError(null);
    setContent("");

    if (!content) return;

    try {
      await database.ref("chats").push({
        content,
        timestamp: Date.now(),
        uid: user?.uid,
      });
    } catch (error) {
      setWriteError(error.message);
    }
  };

  return (
    <Wrapper>
      <Messages>
        {chats.map((chat: any) =>
          chat.uid === user?.uid ? (
            <CurrentUserMessage key={chat.timestamp}>
              {chat.content}
            </CurrentUserMessage>
          ) : (
            <UserMessage key={chat.timestamp}>{chat.content}</UserMessage>
          )
        )}
      </Messages>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event: FormEvent<HTMLInputElement>) =>
            setContent(event.currentTarget.value)
          }
          value={content}
        />
        {writeError ? <p>{writeError}</p> : null}
        <button type="submit">Send message</button>
      </form>
      <div>
        Logged in as <strong>{user?.email}</strong>
      </div>
      <div>
        <button onClick={signOut}>Leave the chat</button> if you wish
      </div>
    </Wrapper>
  );
};

export default Chat;
