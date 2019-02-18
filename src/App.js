import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    componentDidMount(){
        //fetch is part of the window object and 
        //fetch comes with all the browsers now
        //fetch allows us to send requests to the server
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));        
    }

    render() {

        //filteredRobots array has only those robot objects whose name matches the search 
        //field state.
        //The filter() method creates a new array with all elements that pass the test implemented 
        //by the provided function. 
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    
                    <h1 className='f1'>RoboFriends</h1>
                    
                    <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
                    
                    <CardList robots={filteredRobots} />

                </div>        
            );
        }
    }   
}

export default App;