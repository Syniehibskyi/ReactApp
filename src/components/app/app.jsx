import{Component} from 'react'
import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployerList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';


class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            data: [
                {name: "Alex M." , salary: 800, increase: false, rise: true, id:1},
                {name: "Snoop D." , salary: 1500, increase: true, rise: false, id:2},
                {name: "Eminem M" , salary: 5000, increase: false, rise: false, id:3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rice: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];


            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // console.log(index)

            // const old = data[index];
            // const newItem = {...old, increase: !old.increase};
            // console.log(newItem);
            // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            // return {
            //     data: newArr
            // }



        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }
    
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
    }


    searchEmp = (items, term) => {
        if(term.length === 0){
            return items
        }
        // indexOf(term) > -1
        return items.filter(item => {
            return item.name.match(new RegExp(term, 'i'))
           
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen10000': 
                return items.filter(item => item.salary > 10000);
            default:
                 return items
        }
    }


    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo data={this.state.data}
                totEmploees={this.totEmploees}/>
    
                <div className="search-pannel">
                <SearchPannel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filter={filter}
                            onFilterSelect={this.onFilterSelect}/>
                
                </div>
                <EmployerList data={visibleData}
                onDelete={this.deleteItem} 
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;