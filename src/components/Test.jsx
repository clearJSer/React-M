import React, { PureComponent } from 'react'

export default class Test extends PureComponent {
    constructor(props) {
        super()
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    render() {
        return (
            <div>
                hello React Test Components
      </div>
        )
    }
}
