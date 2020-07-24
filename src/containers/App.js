import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

/*
    Now to communicate between the components, we need States. We have seen props earlier, which just takes the input and helps us to render. With states we can communicate between the components. Here whatever written in the searchbox, should interact with the cardlist and show us the result. So we need to make the App() function into a class.
*/
/*
    const App = () => {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots = { robots }/>
            </div>
        );
    }
*/

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }

        else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    {/* We can see Scroll is not a self closing component, it actuall wraps some other component. We need to tell Scroll that render whatever present inside of you. Here children concept comes in. Scroll has children to render. We can get the children inside props. */}

                    {/* Later we added ErrorBoundary componenet to show if there is some error in rendering the cards, we should show our users some other messages.  */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

    }
}
export default App;