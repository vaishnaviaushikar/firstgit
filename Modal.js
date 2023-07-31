import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import "./Modal.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};
const Overlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onConfirm={props.onConfirm}>ok</Button>
      </footer>
    </Card>
  );
};

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm}/> , document.getElementById('modal-root'))}
    </React.Fragment>
  );
}
