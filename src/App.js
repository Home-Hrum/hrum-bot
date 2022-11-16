import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram.js";
import CardsList from "./components/CardsList/CardsList.jsx";

const products = [
  {
    categoryName: "Грузия",
    groups: [
      [
        {
          id: 1,
          img: "",
          name: " g1 Уха",
          price: 6,
        },
        {
          id: 2,
          img: "",
          name: "g1 Уха",
          price: 6,
        },
      ],
      [
        {
          id: 3,
          img: "",
          name: "Название",
          price: 13,
        },
        {
          id: 4,
          img: "",
          name: "text",
          price: 443,
        },
      ],
    ],
  },
  {
    categoryName: "Турция",
    groups: [
      [
        {
          id: 1,
          img: "",
          name: "Уха",
          price: 6,
        },
        {
          id: 1,
          img: "",
          name: "Уха",
          price: 6,
        },
      ],
    ],
  },
];

function App() {
  // console.log(telegram.initData);

  let counter = 0;
  const { telegram, userData, onClose, onToggleMainButton } = useTelegram();

  useEffect(() => {
    telegram.ready();
    // telegram.expand();
  });

  useEffect(() => {
    onToggleMainButton();
  }, [counter, onToggleMainButton]);

  // send data
  /*
  const onSendButton = useCallback(() => {
    telegram.sendData(JSON.stringify("{'age': 1}"));
  }, [bin]);

  useEffect(() => {
    telegram.onEvent("mainButtonClicked", onSendButton);

    return () => {
      telegram.offEvent("mainButtonClicked", onSendButton);
    };
  }, []);
  */

  const bin = {};

  const changeOrder = (id, type, buttonCallback) => {
    console.log(id, type);
    console.log(bin);

    if (!bin[id]) bin[id] = 1;
    else {
      if (type) ++bin[id];
      else {
        --bin[id];
        if (!bin[id]) buttonCallback();
      }
    }
    console.log(bin[id]);
  };

  return (
    <div className="container-fluid">
      <button onClick={onClose}>sdclose app</button>
      <button onClick={onToggleMainButton}>toogle</button>
      <span>{userData?.user?.username}</span>

      <CardsList products={products} bin={bin} callback={changeOrder} />
    </div>
  );
}

export default App;
