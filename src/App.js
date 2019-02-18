import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
        const {robots, searchfield} = this.state;

        //filteredRobots array has only those robot objects whose name matches the search 
        //field state.
        //The filter() method creates a new array with all elements that pass the test implemented 
        //by the provided function. 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ? <h1>Loading</h1> :
            (
                <div className='tc'>
                    
                    <h1 className='f1'>RoboFriends</h1>
                    
                    <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
                    
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                        

                </div>        
            );
    }   
}

export default App;