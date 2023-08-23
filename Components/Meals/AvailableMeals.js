import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Paneer Tikka Masala with Naan',
      description: 'Grilled paneer in creamy tomato gravy with soft naan bread.',
      price: 199.99,
    },
    {
      id: 'm2',
      name: 'Chicken Biryani',
      description: 'Fragrant rice with spiced chicken and fried onions.',
      price: 70.89,
    },
    {
      id: 'm3',
      name: 'Aloo Paratha with Curd',
      description: 'Potato-stuffed flatbread with yogurt.',
      price: 40.67,
    },
    {
      id: 'm4',
      name: 'Pani Puri (Golgappa)',
      description: 'Hollow crispy balls with tangy fillings.',
      price: 30.48,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
    key = {meal.id} 
    id = {meal.id}
    name = {meal.name}
    description = {meal.description}
    price = {meal.price}
     />
     ))



    return (
    <section className={classes.meals}>
        <Card>
        <ul> {mealsList} </ul>
        </Card>
    </section>
    )
}

export default AvailableMeals