import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        word: "tick"
    };
    
    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1});
            this.updateWord();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateWord() {
        if (this.state.count >= 8) {
            this.setState({word: "BOOM!!!!"});
            clearInterval(this.interval);
        } else if (this.state.count % 2 === 0) {
            this.setState({word: "tick"});
        } else {
            this.setState({word: "tock"});
        }

    }
    
    render() {
        return (
            <div>
             <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb