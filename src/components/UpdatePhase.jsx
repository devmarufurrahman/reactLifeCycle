import React, { Component } from "react";

export default class UpdatePhase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Noman",
		};
		console.log("constructor");
	}

	static getDriveStateFromProps(props, state) {
		console.log("getDriveStateFromProps");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate");
		return null;
	}

	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
		return true;
	}
	getSnapshotBeforeUpdate(previousProps, previousState) {
		console.log("getSnapshotBeforeUpdate");
		return null;
	}

	updateState = () => {
		this.setState({
			name: "Maruf",
		});
	};
	render() {
		console.log("rendering");
		return (
			<div>
				UpdatePhase
				<button onClick={this.updateState}>stateUpdate</button>
			</div>
		);
	}
}
