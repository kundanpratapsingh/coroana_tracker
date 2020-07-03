import React, { useEffect, useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../india-map.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TotalGraph from "./totalGraph";

const StateData = (props) => {
  const statesarray = props.statesArray;
  const [country, setcountry] = useState("");
  const Array = [
    "active",
    "confirmed",
    "deaths",
    "lastupdatedtime",
    "recovered",
  ];

  const handlefilteredCountry = (e) => {
    setcountry(e.target.value);
  };

  const rendercards = (element, index) => {
    return (
      <div className="statecard" key={index}>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>{element.state}</Card.Title>
            {Array.map((text, index) => {
              return (
                <Card.Text key={index}>{`${text.toUpperCase()} :${
                  element[text]
                }`}</Card.Text>
              );
            })}
          </Card.Body>
          <div>
            <TotalGraph data={element} />
          </div>
        </Card>
      </div>
    );
  };

  const rendercountry = (statesarray) => {
    const countiesArray = statesarray;
    const filteredCountries = countiesArray.filter((a) => {
      return a.statecode.toLowerCase().indexOf(country.toLowerCase()) !== -1;
    });
    if (filteredCountries.length > 0) {
      return filteredCountries.map((element, index) =>
        rendercards(element, index)
      );
    } else {
      return (
        <div className="No-data">
          <div>No Data...</div>{" "}
        </div>
      );
    }
  };

  return (
    <div className="containerg">
      <div className="Search-country">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Search for states here.."
            onChange={handlefilteredCountry}
          />
        </InputGroup>
      </div>
      {rendercountry(statesarray)}
    </div>
  );
};

export default StateData;
