
import './app-filter.css';


const AppFilter = (props) =>   {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen10000', label: 'З/П больше 1000$'}
    ];

    const butons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz =active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                    type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })
        
        return (
            
            <div className="btn-group">
                {butons}

            </div>
        );
    
}

export default AppFilter;

