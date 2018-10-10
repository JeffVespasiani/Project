import React, { Component } from 'react';
import '../css/style.css';

class App extends Component {
	
  constructor() {
		super();
		this.state = { data: [], };
	}
	
	componentDidMount() {
		fetch('http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json')
		.then((Response) => Response.json())
		.then((findresponse) => {
			console.log(findresponse.feed)
			this.setState({ data : findresponse.feed.entry })
		})
	}
	
	render() {
		var MyList = this.state.data.map(function(myObj,index){
			return [
				<div key={1}><button className="menu" data-toggle="collapse"><img src={myObj['im:image'][0].label} /><br />{myObj['im:name'].label}</button></div>,
				<div key={2}><ul>
					<li>title: {myObj['im:name'].label}</li>
					<li>icon: <img src={myObj['im:image'][1].label} /></li>
					<li>release date: {myObj['im:releaseDate'].label}</li>
					<li>summary: {myObj.summary.label}</li>
					<li>price: {myObj['im:price'].label} {myObj['im:price'].attributes.currency}</li>
					<li>category: {myObj.category.attributes.label}</li>
					<li>linktostore: {myObj.link.attributes.href}</li>
					<li>publisher: {myObj['im:artist'].label}</li>
					<li>publisherlink: {myObj['im:artist'].attributes.href}</li>
				</ul></div>
			]
		})
		return <div>{ MyList }</div>
  }
}

export default App;
