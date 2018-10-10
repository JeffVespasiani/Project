import React, { Component } from 'react';
import '../css/style.css';
import moment from 'moment';

class App extends Component {
	
  constructor() {
		super();
		this.state = { 
			data: [],
		};
	}
	
	toggle() {
		this.setState({
			visible: true,
		})
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
				<div key={1}><button className="menu" data-toggle="collapse" onClick><img src={myObj['im:image'][0].label} /><br />{myObj['im:name'].label}</button></div>,
				<div key={2}><ul className="list">
					<li>{myObj['im:name'].label}</li>
					<li><img src={myObj['im:image'][1].label} /></li>
					<li>Release Date: {moment(myObj['im:releaseDate'].label).format('MM/DD/YYYY')}</li>
					<li>{myObj.summary.label}</li>
					<li>Price: {myObj['im:price'].label} {myObj['im:price'].attributes.currency}</li>
					<li>category: {myObj.category.attributes.label}</li>
					<li><a href={myObj.link.attributes.href}>Buy it here!</a></li>
					<li>Publisher: <a href={myObj['im:artist'].attributes.href}>{myObj['im:artist'].label}</a></li>
				</ul></div>
			]
		})
		return <div>{ MyList }</div>
  }
}

export default App;
