import { styled } from '@mui/material'
import Navbar from '../navbar'
import Panel from '../panels'

const Main = () => {
  return (
    <CustomMain>
      <Navbar />
      <Panel />
    </CustomMain>
  )
}

const CustomMain = styled("main")({
  padding: "0 2rem"
})

export default Main
