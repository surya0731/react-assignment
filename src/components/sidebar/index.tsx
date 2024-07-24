import { styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import styles from "./style.module.css"

const SideBar = () => {
  return (
    <CustomMenu className={styles.menu} />
  )
}

const CustomMenu = styled("div")({
    display: "flex",
    flexDirection: "column",
    height: "100%"
})

export default SideBar
