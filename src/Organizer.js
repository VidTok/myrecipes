function Organizer ({label, cuisine, dish, time, weight, calories, fat, carbs, protein, ingredients, image, directions}) {

    return (
        
        <div className="dishBox">

            <div className="dishHeader">
                <h2>{label}</h2>
            </div>

            <div className="dishInfoContainer">

                <ul className="dishTypeUl">
                    <li><b>Cuisine:</b> {cuisine}</li>
                    <li><b>Cooking time:</b> {time} min</li>
                    <li><b>Dish type:</b> {dish}</li>
                    <li><b>Weight:</b> {weight.toFixed()} g</li>
                </ul>

                <div>
                    <ul className="ulCal">
                        <li><b>Cal</b> – {calories.toFixed()}</li>
                        <li><b>Fat</b> – {fat.toFixed()}</li>
                        <li><b>Carbs</b> – {carbs.toFixed()}</li>
                        <li><b>Protein</b> – {protein.toFixed()}</li>
                    </ul>
                </div>

            </div>


            <div className="imgBox">
                <img className="dishIMG" src={image} alt="dish" />
            </div>

            <div>
                <h3>Ingredients:</h3>
                <ul className="ingredientsUl">
                    {ingredients.map ((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>

            <div>
                <a className="recipeLink" href={directions} target='blank'>How to cook</a>
            </div>

        </div>

    )
}

export default Organizer;