import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home.js";


class Router extends React.Component{

	render()
	{
		return(
		<BrowserRouter>
			<Route exact path="/" component={Home} />
		</BrowserRouter>);
	}
}


export default Router;
