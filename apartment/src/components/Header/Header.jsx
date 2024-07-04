import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
const Header = () => {
  return (
    <>
      <Box sx={{  textAlign: "center",flexGrow:1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            color: "#111",
            boxShadow: "none",
            borderBottom: "2px solid grey",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ borderRadius: "10px" }}
            >
              <MenuIcon />
              <Typography sx={{ fontWeight: "600", color: "#333", ml: "10px" }}>
                MENU
              </Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ borderRadius: "10px",ml:"5px" }}
            >
            <LanguageSharpIcon />
            <Typography sx={{ fontWeight: "600", color: "#333", ml: "10px" }}>
            English
            </Typography>
            </IconButton>
            {/* <Box sx={{ ml: "20px" }}>
            <LanguageSharpIcon />
              <Typography sx={{ fontWeight: "600", color: "#111",ml: "50px" }} >
                English
              </Typography>
            </Box> */}

            <Box sx={{ flexGrow: 1 }}>
                <img src="https://www.wimetrix.com/wp-content/uploads/2023/07/Frame-5040-1-768x232.png" alt="" width={220}/>
            </Box>
        
         <Box>
         <Button color="inherit">Login</Button>
         <Button color="inherit">Login</Button>
         <Button color="inherit">Login</Button>

         </Box>

          
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

// const Header = () => {
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar
//           position="static"
//           sx={{
//             backgroundColor: "transparent",
//             color: "#111",
//             boxShadow: "none",
//             borderBottom: "2px solid #333",
//           }}
//         >
//           <Toolbar sx={{ justifyContent: "space-between" }}>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 sx={{ borderRadius: "10px" }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography sx={{ fontWeight: "600", color: "#333", ml: "10px" }}>
//                 MENU
//               </Typography>
//               <Box sx={{ ml: "20px", display: "flex", alignItems: "center" }}>
//                 <LanguageSharpIcon sx={{ mr: "5px" }} />
//                 <Typography sx={{ fontWeight: "600", color: "#111" }}>
//                   English
//                 </Typography>
//               </Box>
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
//               <img src="https://www.wimetrix.com/wp-content/uploads/2023/07/Frame-5040-1-768x232.png" alt="logo" width={220} />
//             </Box>
//             <Box >
//             <Button color="inherit">Login</Button>
//             <Button  color="inherit">Login</Button>

//             <Button 
//                 color="inherit"
//              variant="contained" 
//             >Login</Button>


//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// };

// export default Header;
