import React from "react";
import Icon from "@mdi/react";
import { mdiNoteCheck } from "@mdi/js";

function Header() {
  return (
    <header>
      <h1>
        <Icon path={mdiNoteCheck} size={1} />
        My-Notes
      </h1>
    </header>
  );
}

export default Header;
