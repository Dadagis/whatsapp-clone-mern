import React, { Component } from "react";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export default class ChatHeaderIcons extends Component {
  render() {
    return (
      <div>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    );
  }
}
