import ListGroup from "react-bootstrap/ListGroup"

interface selectedDishProps {
  id: number
  name: string
  image: string
  category: string
  label: string
  price: string
  description: string
  comments: {
    id: number
    rating: number
    comment: string
    author: string
    date: Date
  }[]
}

const DishComments = (props: selectedDishProps) => (
  <ListGroup>
    {props ? (
      props.comments.map((c) => <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>)
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
