import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Search from "./Components/Search/Search";
import ContactList from "./Components/Contact list/Contact list";

class App extends React.Component {
  state = {
    List: [
      {
        id: 1,
        name: "Тарас Тополя",
        description: 'Фронтмен групи "Антитіла"',
        avatar: 32,
        gender: "men",
        facebook: "https://www.facebook.com/taras.topolya",
        twitter: "https://twitter.com/nb9gr",
        favorite: false
      },
      {
        id: 2,
        name: "Юлія Саніна",
        description: "Cолістка українського гурту «The Hardkiss»",
        avatar: 31,
        gender: "women",
        facebook: "https://www.facebook.com/juliasanina",
        twitter: "https://twitter.com/julia_hardkiss",
        favorite: false
      },
      {
        id: 3,
        name: "Аніта Луценко",
        description:
          "Українська спортсменка, професійний тренер, відомий фахівець зі схуднення, телеведуча («Зважені та щасливі»)",
        avatar: 32,
        gender: "women",
        facebook: "https://www.facebook.com/anitasporty/",
        twitter: "https://twitter.com/modernlife991",
        favorite: true
      }
    ]
  };

  onStarPress = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const newFavorite = this.state.List.slice();
    newFavorite[index].favorite = !newFavorite[index].favorite;
    // console.log("id=> ", id);
    this.setState({
      favorite: !this.state.newFavorite
    });
  };
  onDelete = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    console.log(index);
    let counter = 0;
    let newArr = [];
    for (let i = 0; i < this.state.length; i++) {
      if (i !== index) {
        newArr[counter] = this.state.List[i];
        counter++;
      }
    }

    this.setState(() => {
      return {
        List: newArr
        // ContactList={this.state.newArr}
      };
    });
  };
  render() {
    return (
      <div className="container bootstrap snippet">
        <Search />
        <ContactList
          ContactList={this.state.List}
          onStarPress={this.onStarPress}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
