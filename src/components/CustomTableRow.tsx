import React, { useEffect, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import axios from "axios";

type ComponentProps = {
  data: {
    a: String;
    q: String;
    c: String;
  };
};

const CustomTableRow = ({ data }: ComponentProps) => {
  const [authGender, setAuthGender] = useState("");
  let authName = data?.a;
  useEffect(() => {
    axios
      .get(`https://api.genderize.io/?name=${authName.split(" ")[0]}`)
      .then((res) => setAuthGender(res.data.gender));
  }, []);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {data.c}
      </TableCell>
      <TableCell align="left">{data.q}</TableCell>
      <TableCell align="left">{data.a}</TableCell>
      <TableCell align="left">
        {authGender && authGender === "female" ? "👩" : "👨"}
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
