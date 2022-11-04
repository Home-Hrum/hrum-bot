import './App.css';
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="inner">
            <Card img={"/home/a1k0u/Documents/homehrum/hrum-bot/src/img/a.png"} name={"Уха донская из атлантического лосося"} price={6} />
            <Card img={"/home/a1k0u/Documents/homehrum/hrum-bot/src/img/a.png"} name={"Чахохбили из курицы"} price={3} />
            <Card img={""} name={"Рулеты из баклажанов с орехами"} price={2} />
            <Card img={""} name={"Дюквари"} price={5} />
            <Card img={""} name={"Блинчики с мясом"} price={10} />

        </div>
      </div>
    </div>
  );
}

export default App;
