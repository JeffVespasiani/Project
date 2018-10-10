import React, { Component } from 'react';
import AppData from '../data/apple.json'

class App extends Component {
	
  constructor(props) {
		super(props);
		this.state = { data: [], };
	}
	
	componentDidMount() {
		return (fetch('http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json')
		.then((Response) => Response.json()))
		.then((findresponse) => {
			console.log(findresponse.feed)
			this.setState({ data : findresponse.feed })
		})
	}
	
	render() {
		console.log(this.state.data);
		return (
			<div>
			{
				Object.keys(this.state.data).map((listData, key) => 
				<ul>
					<li><p>{listData.entry.entry["im:name"].label}</p><img src={listData.entry.entry["im:images"].label[0]} /></li>
				</ul>
				)
			}
			</div>
		);
	/*render() {
    return (
		<div>
			{AppData.feed.entry.map((appDetail, index)=>{
				return <p>{appDetail.entry['im:name'].label}</p>
			})}
		</div>
    );*/
  }
}

export default App;
