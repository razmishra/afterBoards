import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { RxCross1 } from "react-icons/rx";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray(props) {
  const handleDelete = (chipToDelete) => () => {
    const res = props.texts.filter((chip) => {
      return chip !== chipToDelete;
    });
    props.setTexts(res);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: "none",
      }}
      component="ul"
    >
      {props.texts &&
        props.texts.map((data, index) => {
          return (
            <ListItem key={data.key}>
              <Chip
                label={data}
                onDelete={handleDelete(data)}
                color="info"
                size="small"
                // variant="filled"
                deleteIcon={<RxCross1 size={15} color="#69BCF9" />}
                sx={{
                  p: 1,
                  backgroundColor: "#CDEAFF",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                    color: "black",
                    fontSize: "15px",
                    marginRight: "10px",
                  },
                }}
              />
            </ListItem>
          );
        })}
    </Paper>
  );
}
