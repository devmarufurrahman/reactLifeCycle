import React, { Component } from "react";

export default class MountingPhase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Maruf",
		};
		console.log("constructor call");
	}
	static getDriveStateFromProps(props, state) {
		console.log("getDriveStateFromProps call");
	}
	componentDidMount() {
		console.log("componentDidMount call");
	}
	render() {
		console.log("rendering call");
		return <div>MountingPhase</div>;
	}
}
