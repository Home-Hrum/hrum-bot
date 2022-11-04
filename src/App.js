import './App.css';
import Card from "./components/Card.jsx";

function App() {

    const bin = {}

    const changeOrder = (id, type, buttonCallback) => {
        if (!bin.id)
            bin.id = 1;
        else {
            if (type)
                ++bin.id
            else {
                --bin.id
                if (!bin.id)
                    buttonCallback()
            }
        }
        console.log(bin.id);
    }

  return (
    <div className="App">
      <div className="container">
        <div className="inner">
            <Card id={1} img={"/home/a1k0u/Documents/homehrum/hrum-bot/src/img/a.png"} name={"Уха донская из атлантического лосося"} price={6} callback={changeOrder}/>
            <Card id={2} img={"/home/a1k0u/Documents/homehrum/hrum-bot/src/img/a.png"} name={"Чахохбили из курицы"} price={3} callback={changeOrder}/>
            <Card id={3} img={""} name={"Рулеты из баклажанов с орехами"} price={2} callback={changeOrder}/>
            <Card id={4} img={""} name={"Дюквари"} price={1} callback={changeOrder}/>
            <Card id={5} img={""} name={"Блинчики с мясом"} price={10} callback={changeOrder}/>
            <Card id={6} img={""} name={"UUDU Блинчики с мясом"} price={11} callback={changeOrder}/>
        </div>
      </div>
    </div>
  );
}

export default App;
