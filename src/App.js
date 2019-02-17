import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {

        //filteredRobots array has only those robot objects whose name matches the search 
        //field state.
        //The filter() method creates a new array with all elements that pass the test implemented 
        //by the provided function. 
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                
                <h1>RoboFriends</h1>
                
                <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
                
                <CardList robots={filteredRobots} />

            </div>        
        );
    }   
}

export default App;