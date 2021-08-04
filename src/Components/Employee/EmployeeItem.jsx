import React from "react";
import { Card, Image } from "react-bootstrap";

export const EmployeeItem = ({ dataDe }) => {
  return (
    <Card className="employeeItem">
      <div>
        <Image src={dataDe.imagez} width="200px" height="200px"></Image>
        <h4>Employee Item</h4>
        <span>Name: {`${dataDe.firstname} ${dataDe.lastname}`}</span>
        <br />
        <span>
          Location:{" "}
          {`${dataDe.cityname},${dataDe.statename},${dataDe.countryname}`}
        </span>
      </div>
    </Card>
  );
};
