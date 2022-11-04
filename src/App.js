import './App.css';
import Card from "./components/Card.jsx";

function App() {

    const bin = {}

    const changeOrder = (id, type, buttonCallback) => {
        console.log(id, type);
        console.log(bin);
        if (!bin[id])
            bin[id] = 1;
        else {
            if (type)
                ++bin[id]
            else {
                --bin[id]
                if (!bin[id])
                    buttonCallback()
            }
        }
        console.log(bin[id]);
    }

  return (
    <div className="App">
      <div className="container">
        <div className="inner">
            <Card id={1} img={"/home/a1k0u/Documents/homehrum/hrum-bot/src/img/a.png"} name={"Уха донская из атлантического лосося"} bin={bin} price={6} callback={changeOrder}/>
            <Card id={2} img={"/home/a1k0u/Documents/homehrum/hrum-bot/src/img/a.png"} name={"Чахохбили из курицы"} bin={bin} price={3} callback={changeOrder}/>
            <Card id={3} img={""} name={"Рулеты из баклажанов с орехами"} bin={bin} price={2} callback={changeOrder}/>
            <Card id={4} img={""} name={"Дюквари"} bin={bin} price={1} callback={changeOrder}/>
            <Card id={5} img={""} name={"Блинчики с мясом"} bin={bin} price={10} callback={changeOrder}/>
            <Card id={6} img={""} name={"UUDU Блинчики с мясом"} bin={bin} price={11} callback={changeOrder}/>
        </div>
      </div>
    </div>
  );
}

export default App;
