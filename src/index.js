import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Search from "./Components/Search/Search";
import ContactList from "./Components/Contact list/Contact list";

const App = () => {
  const List = [
    {
      id: 1,
      name: "Тарас Тополя",
      description: 'Фронтмен групи "Антитіла"',
      avatar: 32,
      gender: "men",
      facebook: "https://www.facebook.com/taras.topolya",
      twitter: "https://twitter.com/nb9gr"
    },
    {
      id: 2,
      name: "Юлія Саніна",
      description: "Cолістка українського гурту «The Hardkiss»",
      avatar: 31,
      gender: "women",
      facebook: "https://www.facebook.com/juliasanina",
      twitter: "https://twitter.com/julia_hardkiss"
    },
    {
      id: 3,
      name: "Аніта Луценко",
      description:
        "Українська спортсменка, професійний тренер, відомий фахівець зі схуднення, телеведуча («Зважені та щасливі»)",
      avatar: 32,
      gender: "women",
      facebook: "https://www.facebook.com/anitasporty/",
      twitter: "https://twitter.com/modernlife991"
    }
  ];
  return (
    <div className="container bootstrap snippet">
      <Search />
      <ContactList ContactList={List} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
