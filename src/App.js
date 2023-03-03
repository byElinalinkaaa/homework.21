import { useCallback, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import Basket from "./components/basket/Basket"
import Header from "./components/header/Header"
import Meals from "./components/meals/Meals"
import Summary from "./components/summary/Summary"
import "./App.css"
import { Snackbar } from "@mui/material"
import { uiActions } from "./store/UI/uiSlice"

function App() {
  const dispatch= useDispatch()
  const [isBasketVisible, setBasketVisible] = useState(false)

  const snackbar = useSelector((state)=> state.ui.snackbar)
  console.log(snackbar)




  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState)
  }, [])

  return (
    <div className="App">
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
      <Snackbar
        isOpen={snackbar.isOpen}
        severity={snackbar.severity}
        message={snackbar.message}
        autoHideDuration={6000}
        onClose={() => dispatch(uiActions.closeSnackbar())}
      />
    </div>
  );
}

export default App

const Content = styled.div`
  margin-top: 101px;
`
