import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import "./Person.css";

const StyledDiv = styled.div`
  .Person {
    width: 60%;
    padding: 16px;
    margin: 16px auto;
    background-color: #ccc;
    border-radius: 20px;
    text-align: center;
  }

  .close {
    width: fit-content;
  }
`;

const Person = (props) => {
  //this jsx sintax is transform to react create element, to call this method we need
  //to import react
  return (
    <StyledDiv>
      <div className="Person">
        <div className="close" onClick={props.click}>
          <CloseIcon />
        </div>
        <p>
          I'm {props.name} and I am years {props.age} old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyledDiv>
  );
};

export default Person;
