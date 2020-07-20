import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constants";

const Content = () => {
	const getCoffeeMakerCard = (coffeeMakerObj) => {
		return (
			<Grid item xs={12} sm={6} md={4}>
				<CoffeeCard {...coffeeMakerObj} />
			</Grid>
		);
	};

	return (
		<Grid spacing={4} container>
			{coffeeMakerList.map((coffeeMakerObj) => (
              getCoffeeMakerCard(coffeeMakerObj)
            ))}
		</Grid>
	);
};

export default Content;
