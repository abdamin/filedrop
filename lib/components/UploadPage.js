import DropZone from "./DropZone";
import React from "react";
import Spinner from "./Spinner";
import Tempalink from "./Tempalink";
import UploadActions from "../actions/UploadActions";
import UploadStore from "../stores/UploadStore";
import socket from "filepizza-socket";
import { formatSize } from "../util";

export default class UploadPage extends React.Component {
  constructor() {
    super();
    this.state = UploadStore.getState();

    this._onChange = () => {
      this.setState(UploadStore.getState());
    };

    this.uploadFile = this.uploadFile.bind(this);
  }

  componentDidMount() {
    UploadStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UploadStore.unlisten(this._onChange);
  }

  uploadFile(file) {
    UploadActions.uploadFile(file);
  }

  handleSelectedFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      UploadActions.uploadFile(files[0]);
    }
  }

  render() {
    switch (this.state.status) {
      case "ready":
        return (
          <DropZone onDrop={this.uploadFile}>
            <div className="page">
              <h1>FileDrop</h1>
              <Spinner dir="up" />

              <p>Share files for free from your browser.</p>
              <p>Files are delivered with end to end encryption.</p>
              <p>
                <label className="select-file-label">
                  <input
                    type="file"
                    onChange={this.handleSelectedFile}
                    required
                  />
                  <span>select a file</span>
                </label>
              </p>
            </div>
          </DropZone>
        );

      case "processing":
        return (
          <div className="page">
            <h1>FileDrop</h1>

            <Spinner dir="up" animated />

            <p>Processing...</p>
          </div>
        );

      case "uploading":
        return (
          <div className="page">
            <h1>FileDrop</h1>
            <Spinner
              dir="up"
              animated
              name={this.state.fileName}
              size={this.state.fileSize}
            />

            <p>Send someone this link to download.</p>
            <p>This link will work as long as this page is open.</p>
            <p>
              Current Connections: {this.state.peers}
              {/* &middot; Up:{" "}
              {formatSize(this.state.speedUp)} */}
            </p>
            <Tempalink token={this.state.token} />
          </div>
        );
    }
  }
}
