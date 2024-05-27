/*
import React from 'react'; 
is not required in the latest version(s) of React because it uses a new JSX Transform.
JSX Transform: React 17에서 도입된 새로운 기능으로, JSX 코드를 변환할 때 React를 명시적으로 import하지 않아도 됩니다.
*/
import { useState } from 'react';
// import IconButton from "@mui/material/IconButton";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, Typography, Toolbar, Box, AppBar, Alert } from "@mui/material";
import styled from 'styled-components';

function AlertMessage({ text }: { text: string }) {
  return (
    <HeadContainer>
      {text && <Alert severity={text.includes("Add") ? "success" : text.includes("Edit") ? "info" : "error"}>{text}</Alert>}
    </HeadContainer>
  );
}

function HomePage() {
  const [alertText, setAlertText] = useState("");

  const handleAddLocationClick = () => {
    setAlertText("Add Light");
    setTimeout(() => {
      setAlertText("");
    }, 2000); // 2초 후에 alertText를 비움
  };

  const handleEditLocationClick = () => {
    setAlertText("Edit Location of Light");
    setTimeout(() => {
      setAlertText("");
    }, 2000); // 2초 후에 alertText를 비움
  };

  const handleDeleteForeverClick = () => {
    setAlertText("Delete Light Forever");
    setTimeout(() => {
      setAlertText("");
    }, 2000); // 2초 후에 alertText를 비움
  };


  return (
    <div className="App"> 
      <Box sx={{ flexGrow: 1 }}> 
        <StyledAppBar position="static"> 
          <StyledToolbar disableGutters={true}> 
            <Typography> 
              Toolbar
            </Typography> 
            <IconsContainer>
              <div aria-label="add location" onClick={handleAddLocationClick}>
                <AddLocationIcon />
              </div>
              <div aria-label="edit location" onClick={handleEditLocationClick}>
                <EditLocationAltIcon />
              </div>
              <div aria-label="delete forever" onClick={handleDeleteForeverClick}>
                <DeleteForeverIcon />
              </div>
            </IconsContainer>
            <Button color="inherit">Right</Button> 
          </StyledToolbar> 
        </StyledAppBar> 
      </Box> 
      <HeadContainer> 
        <AlertMessage text={alertText} />
      </HeadContainer> 
    </div> 
  );
}

export default HomePage;

const StyledAppBar = styled(AppBar)`
  position: static;
  background-color: #2F2E34; /* success color */
`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
  }
`;

// TODO 아이콘 불러올때 svg로 가져오는데 아래에 margin이 약간 있음 -> 제거해야함
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  div {
    margin: 4px 5px;
    padding: 3px 5px;
    cursor: pointer; 
  }

  div:hover {
    transform: scale(1.1);
    background-color: rgba(255, 64, 129, 0.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
`;

// const HoverIconButton = styled(IconButton)`
//   && {
//     color: inherit;
//     transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
//     border-radius: 8px; 

//     &:hover {
//       transform: scale(1.1);
//       background-color: rgba(255, 64, 129, 0.1); 
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* offset-x offset-y blur-radius */
//     }
//   }
// `;

// Change color
//  && {
//     color: inherit;
//     transition: transform 0.2s, color 0.2s;

//     &:hover {
//       transform: scale(1.2);
//       color: #ff4081; /* Change to any color you like */
//     }
//   }


const HeadContainer = styled.div`
  width: fit-content;
  margin: auto;
  padding-top: 8px;
  text-align: center;

  h1 {
    color: green;
  }

`;
