import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatsPage(props) {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="0cbdcd38-6f97-45cd-92c3-b11b1118846a"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default ChatsPage;
