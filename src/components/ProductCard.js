import Button from 'react-bootstrap/Button';
import { Card, Container, Col ,CardGroup} from 'react-bootstrap';

export const ProductCard = ({ product }) => {
  return (
    
    
      <Card className='col-3'>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text className='mt-auto'>{product.author}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Footer>
      </Card>
  
  );
}

// id: 1,
// title: "My First Book of Pencil Control",
// author: "by Wonder House Books | 25 April 2018",
// price: 89,
// img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
// amount: 1,

