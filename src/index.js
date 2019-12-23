import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactList from "./Components/Contact list/Contact list";
import NotFound from "./Components/NotFound/NotFound";
import MainMenu from "./Components/MainMenu/MainMenu";
import AddNewContact from "./Components/AddNewContact/AddNewContact";
import uuidv4 from "uuid";
import EditContact from "./Components/EditContact/EditContact";

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
    ],
    contactForEdit: ""
  };
  onEditContact = (name, description, avatar, gender) => {
    const id = uuidv4();
    const newContact = {
      id: id,
      name: name,
      description: description,
      avatar: avatar,
      gender: gender,
      favorite: false
    };
    let newList = this.state.List.slice();
    newList.push(newContact);
    this.setState({
      List: newList
    });
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
    for (let i = 0; i < this.state.List.length; i++) {
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
  // onDelete = id => {
  //   const index = this.state.List.findIndex(elem => elem.id === id);
  //   console.log(index);
  //   let counter = 0;
  //   let newArr = [];
  //   for (let i = 0; i < this.state.length; i++) {
  //     if (i !== index) {
  //       newArr[counter] = this.state.List[i];
  //       counter++;
  //     }
  //   }

  //   this.setState(() => {
  //     return {
  //       List: newArr
  //       // ContactList={this.state.newArr}
  //     };
  //   });
  // };
  findById = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let contactForEdit;
    for (let i = 0; i < this.state.List.length; i++) {
      if (index === i) {
        contactForEdit = this.state.List[i];
      }
    }
    this.setState({ contactForEdit: contactForEdit });
  };

  render() {
    return (
      <div className="container bootstrap snippet">
        <Router>
          <MainMenu></MainMenu>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <ContactList
                  ContactList={this.state.List}
                  onStarPress={this.onStarPress}
                  onDelete={this.onDelete}
                  findById={this.findById}
                />
              )}
            ></Route>
            <Route
              path="/add"
              exact
              component={() => (
                <AddNewContact onEditContact={this.onEditContact} />
              )}
            ></Route>
            <Route
              path="/edit"
              exact
              component={() => (
                <EditContact contactForEdit={this.state.contactForEdit} />
              )}
            ></Route>
            {/* <Route path="/" exact component={Search}></Route> */}
            <Route path="*" exact component={NotFound}></Route>
          </Switch>
        </Router>

        {/* <ContactList
          ContactList={this.state.List}
          onStarPress={this.onStarPress}
          onDelete={this.onDelete}
        /> */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
