import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RandomQuotes() {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const response = await axios.get("https://zenquotes.io/api/random/");
    setQuotes(response.data);
  };

  let quote = quotes.map((x) => x.h);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back
      </Button>
      {quotes.length ? (
        <>
          <div dangerouslySetInnerHTML={{ __html: quote[0] }}></div>
        </>
      ) : null}
      <Button variant="contained" onClick={getQuote}>
        New Quote
      </Button>
    </div>
  );
}

export default RandomQuotes;
