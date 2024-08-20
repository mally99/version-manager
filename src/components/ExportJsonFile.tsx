import React from "react";
import { IConfig } from "../interfaces/configTypes";
import { Button } from "@mui/material";
import { strings } from "../assets/strings";

export interface IExportJson {
  data?: IConfig;
}
export const ExportJsonFile = ({ data }: IExportJson) => {
  const handleExport = () => {
    const jsonString = JSON.stringify(data, null, 2); // Converts the object to a JSON string with indentation
    const blob = new Blob([jsonString], { type: "application/json" }); // Creates a Blob object
    const url = URL.createObjectURL(blob); // Creates a URL for the Blob
    const link = document.createElement("a"); // Creates an anchor element
    link.href = url;
    link.download = "config.json"; // Sets the default file name for the download
    document.body.appendChild(link);
    link.click(); // Programmatically clicks the link to trigger the download
    document.body.removeChild(link); // Removes the link from the document
  };

  return <Button onClick={handleExport}>{strings.exportJson.label}</Button>;
};
