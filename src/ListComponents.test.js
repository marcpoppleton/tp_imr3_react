import React from "react";
import { render } from "@testing-library/react";
import { List,ListItem } from "./ListComponents";

test("ListItem renders without crashing", () => {
  const props  ={
    line_1:"line 1",
    onClick : ()=>{}
  };
  render(<ListItem {...props}/>);
})

test("List renders without crashing", () => {
  const items = [
    { field_1: "A 1",field_2: "A 2" },
    { field_1: "B 1" ,field_2: "B 2" }
  ]; 
  const fields = ["field_1","field_2"];
  const props = {
    items : items,
    fields : fields,
    onClick : ()=>{}
  }
  render(<List {...props}/>);
});
