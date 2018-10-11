import React, { Component } from 'react';
import '../css/style.css';
import moment from 'moment';

class App extends Component {
	
  constructor() {
		super();
		this.state = { 
			data: [],
			visible: false,
			index: 0,
		};
	}
	
	toggle = () => {
		this.setState({
			visible: !this.state.visible,
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
		var show = {
			display: this.state.visible ? "block": "none"
		}
		
		//var MyList = 
			return [
			<div key={1}><h1>Welcome to the app store list!</h1><p>Click a title to learn more about it.</p></div>,
			<div key={2}> {this.state.data.map((myObj,index) =>
				<div id={index}><button className="menu" onClick={this.toggle.bind(this, index)}><img src={myObj['im:image'][0].label} /><br />{myObj['im:name'].label}<ul className="list" style={show}>
					<li>Release Date: {moment(myObj['im:releaseDate'].label).format('MM/DD/YYYY')}<br /><br /></li>
					<li>{myObj.summary.label}<br /><br /></li>
					<li>Price: {myObj['im:price'].label} {myObj['im:price'].attributes.currency}<br /><br /></li>
					<li>Category: {myObj.category.attributes.label}<br /><br /></li>
					<li><a href={myObj.link.attributes.href}>Buy it here!</a><br /><br /></li>
					<li>Publisher: <a href={myObj['im:artist'].attributes.href}>{myObj['im:artist'].label}</a><br /><br /></li>
				</ul></button></div>,
				
				
			)}
			</div>
		]}
		
		//return <div>{ MyList }</div>
    }
  
  

export default App;
