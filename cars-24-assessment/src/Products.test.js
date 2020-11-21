import { render } from '@testing-library/react';
import Products from './components/Products'

const filteredList = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  }]
  let getByText;
describe('Products Component test', () => {
  
  beforeEach(()=> {
     getByText = render(<Products filteredList={filteredList} />).getByText;
  })
  test('renders title', () => {
    const title = getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(title).toBeInTheDocument();
  });
  test('renders jewelery', () => {
    const categoryJwell = getByText('jewelery');
    expect(categoryJwell).toBeInTheDocument();
  });
  test('renders men clothing', () => {
    const categoryMenClothing = getByText('men clothing');
    expect(categoryMenClothing).toBeInTheDocument();
  });
  test('renders 109.95', () => {
    const price = getByText('109.95');
    expect(price).toBeInTheDocument();
  });

});

