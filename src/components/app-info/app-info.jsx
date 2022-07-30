import './app-info.css';


const AppInfo = (props) => {
    const {data} = props;

    

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании рога и копыта</h1>
            <h2>Общее число сотрудников:{` ${data.length}`}</h2>
            <h2>Премию получат: {`${data.filter(item => item.increase).length}`} </h2>
            <h2>Идут на повышение: {`${data.filter(item => item.rise).length}`}</h2>
        </div>
    );
}

export default AppInfo;