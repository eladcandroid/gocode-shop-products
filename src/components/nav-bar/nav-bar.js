import {useContext} from "react";
import {Category} from "../../context/catrgory";
import {Slider} from 'antd'
function NavBar({categories, minimumPrice,maximumPrice, selectedMinimumPrice, selectedMaximumPrice}) {
    const {setSelectedCategory, setSelectedMinimumPrice, setSelectedMaximumPrice} = useContext(Category)
    console.log(minimumPrice,maximumPrice)
    return (
        <>
            <nav className="product-filter">
                <h1>Jackets</h1>
                <div className="sort">
                    <div className="collection-sort">
                        <label>Filter by:</label>
                        <select onChange={(e) => {setSelectedCategory(e.target.value)}}>
                            {categories.map(category =>
                                <option key={category} value={category}>{category}</option>
                            )}
                        </select>
                    </div>

                    <div className="collection-sort">
                        <label>Sort by:</label>
                        <select>
                            <option value="/">Featured</option>
                            <option value="/">Best Selling</option>
                            <option value="/">Alphabetically, A-Z</option>
                            <option value="/">Alphabetically, Z-A</option>
                            <option value="/">Price, low to high</option>
                            <option value="/">Price, high to low</option>
                            <option value="/">Date, new to old</option>
                            <option value="/">Date, old to new</option>
                        </select>
                    </div>
                </div>
            </nav>
            <div>
                <Slider range value={[selectedMinimumPrice,selectedMaximumPrice]} min={minimumPrice} max={maximumPrice} onChange={(value) => {
                    setSelectedMinimumPrice(value[0]);
                    setSelectedMaximumPrice(value[1]);
                }}/>
            </div>
        </>
        )
}

export default NavBar;
