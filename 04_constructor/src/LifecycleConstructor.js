//./src/LifecycleConstructor.js
// constructor(props)는 생명주기 함수 중 가장 먼저 실행
// 처음 한 번만 호출
// 컴포넌트 내부에서 사용되는 변수(state)를 선언하고,
// 부모 객체에서 전달받은 변수(props)를 초기화할 때 사용
// super() 함수는 가장 위에 호출해야함.
import React, { Component } from 'react';

class LifecycleConstructor extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log( 'constructor 호출');
	}

	render () {
		console.log( 'render 호출');
		return (
			<h2> constructor 함수</h2>
		)
	}
}

export default LifecycleConstructor;