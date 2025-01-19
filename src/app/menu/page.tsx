import Banner from "@/components/Banner";
import Highlight from "@/components/Highlight";
import MenuCardLeft from "@/components/MenuCardLeft";
import MenuCardRight from "@/components/MenuCardRight";

export default function MenuPage() {
    return(
        <>
            {/* <PageHeader /> */}
            <Banner Title="Our Menu" Page="Menu" />
            <div className="bg-white py-16">
                <MenuCardLeft ImageSrc="/assets/images/menu/menu_card/Rectangle_8874.svg" ImageText="Bowl of Chicken and Vegetables" MealType="Starter Menu" Dish1="Alder Grilled Chinook Salmon" DishDes1="Toasted French bread topped with romano, cheddar" DishCal1={560} DishPrice1={32} Dish2="Berries and creme tart" DishDes2="Gorgonzola, ricotta, mozzarella, taleggio" DishCal2={700} DishPrice2={43} Dish3="Tormentoso Bush Pizza Pintoage" DishDes3="Ground cumin, avocados, peeled and cubed" DishCal3={1000} DishPrice3={14} Dish4="Spicy Vegan Potato Curry" DishDes4="Spreadable cream cheese, crumbled blue cheese" DishCal4={560} DishPrice4={35} />
                <MenuCardRight ImageSrc="/assets/images/menu/menu_card/unsplash_-GFCYhoRe48.svg" ImageText="Burger" MealType="Main Course" Dish1="Optic Big Breakfast Combo Menu" DishDes1="Toasted French bread topped with romano, cheddar" DishCal1={560} DishPrice1={32} Dish2="Cashew Chicken With Stir-Fry" DishDes2="Gorgonzola, ricotta, mozzarella, taleggio" DishCal2={700} DishPrice2={43} Dish3="Vegetables & Green Salad" DishDes3="Ground cumin, avocados, peeled and cubed" DishCal3={1000} DishPrice3={14} Dish4="Spicy Vegan Potato Curry" DishDes4="Spreadable cream cheese, crumbled blue cheese" DishCal4={560} DishPrice4={35} />
                <Highlight />
                <MenuCardLeft ImageSrc="/assets/images/menu/menu_card/unsplash_90HdOlGbjck.svg" ImageText="Brownie" MealType="Dessert" Dish1="Fig and lemon cake" DishDes1="Toasted French bread topped with romano, cheddar" DishCal1={560} DishPrice1={32} Dish2="Creamy mascarpone cake" DishDes2="Gorgonzola, ricotta, mozzarella, taleggio" DishCal2={700} DishPrice2={43} Dish3="Pastry, blueberries, lemon juice" DishDes3="Ground cumin, avocados, peeled and cubed" DishCal3={1000} DishPrice3={14} Dish4="Pain au chocolat" DishDes4="Spreadable cream cheese, crumbled blue cheese" DishCal4={560} DishPrice4={35} />
                <MenuCardRight ImageSrc="/assets/images/menu/menu_card/unsplash_akwA-GPF710.svg" ImageText="Burger" MealType="Drinks" Dish1="Optic Big Breakfast Combo Menu" DishDes1="Caffè macchiato" DishCal1={560} DishPrice1={32} Dish2="Cashew Chicken With Stir-Fry" DishDes2="Aperol Spritz Capacianno" DishCal2={700} DishPrice2={43} Dish3="Caffe Latte Campuri" DishDes3="Ground cumin, avocados, peeled and cubed" DishCal3={1000} DishPrice3={14} Dish4="Tormentoso BushTea Pintoage" DishDes4="Spreadable cream cheese, crumbled blue cheese" DishCal4={560} DishPrice4={35} />
            </div>
            
        </>
    )
}