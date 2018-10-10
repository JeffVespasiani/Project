import React, { Component } from 'react';

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
			return <ul>
				<li key={ index }><img src={myObj['im:image'][0].label} /><br />{myObj['im:name'].label}</li>
			</ul>
		})
		return <div>{ MyList }</div>
  }
}

export default App;
