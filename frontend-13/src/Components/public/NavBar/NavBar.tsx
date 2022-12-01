// import { useTheme } from "@mui/system";
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    Stack,
    Typography,
    Link,
    Grid
  } from "@mui/material";
  import {
    // AppbarActionIcons,
    AppbarContainer,
    AppbarHeader,
    MyList,
  } from "../../../styles/navbar";
  import {Colors} from "../../../styles/theme";
  import PersonIcon from "@mui/icons-material/Person";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import { OpenCart, getCartStatus } from "../../../Redux/showcart.slice";
  import { useAppDispatch, useAppSeletor } from "../../../Redux/store.hook";


function NavBar(){
  const dispatch = useAppDispatch();
  const show = useAppSeletor(getCartStatus);
  const handleOpenCart = (showornot:boolean)=>{dispatch(OpenCart(showornot));
  console.log(show)};
 
// const theme = useTheme();

return(
<AppbarContainer>
      <AppbarHeader variant="h4">Happy Shop</AppbarHeader>
      <MyList >
     
      <ListItem button component="a" href="/" >
        <ListItemText secondary="Home"/>
        </ListItem>

        <ListItem button component="a" href="/" >
        <ListItemText secondary="Categories" />
        </ListItem>

        <ListItem button component="a" href="/">
        <ListItemText secondary="Products" />
        </ListItem>

        <ListItem button component="a" href="/">
        <ListItemText secondary="About us" />
        </ListItem>

        {/* <ListItem button component="a" href="/">
        <ListItemText secondary="Contact us" />
        </ListItem>
     */}
        {/* <ListItemButton onClick={() => setShowSearchBox(true)}> */}
    
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItem>

        <ListItem button
          sx={{
            justifyContent: "center",
          }}
          onClick={()=>handleOpenCart(show)}
          
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItem >
        <Divider orientation="vertical" flexItem />

        <ListItem button
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:  Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItem>
        <Divider orientation="vertical" flexItem />

        <ListItem button component="a" href="/login"
          sx={{
            justifyContent: "center",
          }}
        >
        
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
       
        </ListItem>

        <Divider orientation="vertical" flexItem />
     
          </MyList>
       
    </AppbarContainer>
);

}

export default NavBar;