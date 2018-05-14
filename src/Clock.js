import React from 'react';

class Clock extends React.Component {
    state = {
        time: new Date()
    }

    // компонент примонтировался
    componentDidMount() {
        // каждую секунду выывается функция *tick*
        this.interval = setInterval(() => this.tick(), 1000);
    }

    // компонент демонтирован
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            // Выводит время в соответствии с локалью [браузера]
            <p>{this.state.time.toLocaleTimeString()}</p>
        );
    }
}

export default Clock;