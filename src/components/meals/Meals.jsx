import { useEffect, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMeals } from "../../store/meals/mealsSlice"
import MealItem from "./meal-item/MealItem"
import styled from "styled-components"

const DUMMY_MEALS = [
  {
    id: "meal1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "meal2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: "meal3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "meal4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
]

const Meals = () => {
  const { meals , isLoading, error } = useSelector((state) => state.meals)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])

  return (
    <Card>
      {isLoading && !error && <p>Loading</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <StyledUl>
        {meals.map((item) => (
          <MealItem key={item._id} item={item} />
        ))}
      </StyledUl>
    </Card>
  )
}

export default memo(Meals)

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  width: 64.9375rem;
  margin: 160px auto;
`

const StyledUl = styled.ul`
  list-style: none;
  padding: 20px 40px;
`
