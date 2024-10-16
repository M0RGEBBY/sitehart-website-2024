import React, { useEffect, useState } from "react";
import { ProjectItems } from "./ProjectItems";
import './MultiFilters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "./Buttons";

export default function MultiFilters() {
    const [selectedFilters, setSelectedFilters] = useState(["All"]);
    const [filteredItems, setFilteredItems] = useState(ProjectItems);

    let filters = [
        { name: "All", cssClass: "all-filter" },
        { name: "Web Design", cssClass: "web-design-filter" },
        { name: "C#", cssClass: "csharp-filter" },
        { name: "Java", cssClass: "java-filter" },
        { name: "Game Design", cssClass: "game-design-filter" }
    ];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedCategory === "All") {
            setSelectedFilters(["All"]);
        } else if (selectedFilters.includes("All")) {
            setSelectedFilters([selectedCategory]);
        } else {
            if (selectedFilters.includes(selectedCategory)) {
                let filters = selectedFilters.filter((el) => el !== selectedCategory);
                setSelectedFilters(filters);
            } else {
                setSelectedFilters([...selectedFilters, selectedCategory]);
            }
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.includes("All")) {
            setFilteredItems([...ProjectItems]);
        } else if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = ProjectItems.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...ProjectItems]);
        }
    };

    return (
        <div className="parent-div">

            <div className="categories-header"><p>Categories</p></div>
            <div className="projects-div">

                <div className="buttons-container">
                    {filters.map((category, idx) => (
                        <button
                            key={`filters-${idx}`}
                            onClick={() => handleFilterButtonClick(category.name)}
                            className={`button ${!selectedFilters.includes(category.name) ? "not-selected" : ""} ${selectedFilters.includes(category.name) ? "active" : ""} ${category.cssClass}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <hr className="solid2"></hr>
                <div className="items-container">
                    {filteredItems.map((item, idx) => (
                        <div key={`items-${idx}`} className="item">
                            <div className='item-content'>
                                <div className="planet-image-container">
                                    <img
                                        src={item.image}
                                        className={`project-card-image ${item.category === 'Web Design' ? 'web-design-image' : ''} ${item.category === 'C#' ? 'csharp-image' : ''} ${item.category === 'Java' ? 'java-image' : ''} ${item.category === 'Game Design' ? 'game-design-image' : ''}`}
                                    />
                                </div>
                                <div className="item-details-container">
                                    <h2 className="project-title">{item.name}</h2>
                                    <p className="project-category"><FontAwesomeIcon icon="fa-solid fa-tag" />{item.category}</p>
                                    <p className="project-description">{item.description}</p>
                                    <Button className='btns' buttonStyle='btn--outline' link='/coming-soon' scrollToTop={true}>Learn More <FontAwesomeIcon icon="fa-rocket" /></Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
