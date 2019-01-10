import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = props => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <h3>Users</h3>
      <UserList />
      <div>
        <button className="ui button" onClick={() => setResource("posts")}>Posts</button>
        <button className="ui button" onClick={() => setResource("todos")}>Tools</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
