import * as React from "react";
import { getTodos } from "../redux/actions/todoAction";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  return (
    <div>
      <button>Load</button>
    </div>
  );
}

export default TopBar;
