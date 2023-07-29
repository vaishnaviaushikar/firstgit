import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./Modal.css";
export default function Modal(props) {

  
  return (
    <div >
        <div className="backdrop" onClick={props.onconfirm}>
     <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onclick={props.onconfirm}>ok</Button>
        </footer>
      </Card>
      </div>
      </div>
  );
}
