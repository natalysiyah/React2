import React from "react";
import "./ContactItem.css";
import { Link } from "react-router-dom";

class ContactItem extends React.Component {
  state = {
    avatar: this.props.avatar,
    description: this.props.description,
    name: this.props.name,
    facebook: this.props.facebook,
    twitter: this.props.twitter,
    btnRandom: false,
    gender: this.props.gender
  };
  onButtonPress = () => {
    const randomFace = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    this.setState({
      btnRandom: !this.state.btnRandom,
      avatar: randomFace
    });
  };

  render() {
    const { avatar, description, name, twitter, facebook, gender } = this.state;
    const URL = ` https://randomuser.me/api/portraits/${gender}/${avatar}.jpg  `;
    let btnStyle = "btn btn-success";
    if (this.state.btnRandom) {
      btnStyle = "btn btn-warning";
    }

    let starStyle = "fa fa-star-o";
    if (this.props.favorite) {
      starStyle = "fa fa-star";
    }
    return (
      <div class="row">
        <div class="col-8 d-block mx-auto">
          <div class="panel">
            <div class="panel-body p-t-10">
              <div class="media-main">
                <a class="pull-left" href="#">
                  <img class="thumb-lg img-circle bx-s" src={URL} alt="" />
                </a>
                <div class="pull-right btn-group-sm">
                  <Link
                    to="/edit"
                    class="btn btn-success tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                    onClick={this.props.findById}
                  >
                    <i class="fa fa-pencil"></i>
                  </Link>
                  <a
                    href="#"
                    class="btn btn-danger tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i
                      className="fa fa-close"
                      onClick={this.props.onDelete}
                    ></i>
                  </a>
                </div>
                <div class="info">
                  <h4>{this.state.name}</h4>
                  <p class="text-muted">{this.state.description}</p>
                </div>
              </div>
              <div class="clearfix"></div>

              <ul class="social-links list-inline p-b-10">
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    class="tooltips"
                    href={this.state.facebook}
                    data-original-title="Facebook"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    class="tooltips"
                    href={this.state.twitter}
                    data-original-title="Twitter"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                {/* <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href="#"
                      data-original-title="LinkedIn"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href="#"
                      data-original-title="Skype"
                    >
                      <i class="fa fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href="#"
                      data-original-title="Message"
                    >
                      <i class="fa fa-envelope-o"></i>
                    </a>
                  </li> */}
              </ul>
              <i
                class="fa fa-star-o"
                className={starStyle}
                aria-hidden="true"
                onClick={this.props.onStarPress}
              ></i>
              <button
                type="button"
                className={btnStyle}
                onClick={this.onButtonPress}
              >
                Rundom Face
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactItem;
