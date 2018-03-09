import React from 'react';
import '../style/footer.scss'

export default class Footer extends React.Component {
    state = {
        name: 'duhonghui'
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className="foot">
                <span>@{this.state.name}</span>
                <span>  这是一个footer</span>
            </div>
        )
    }
}

