import { Grid } from "@mui/material"
import SideBar from "./components/sidebar"
import Main from "./components/main"

const App = () => {
  return (
    <div>
      <Grid container>
        <Grid item lg={1} md={2}>
          <SideBar />
        </Grid>
        <Grid item lg={11} md={2}>
          <Main />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
