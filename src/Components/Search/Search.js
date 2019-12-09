import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div class="row">
      <div class="col-lg-8 d-block mx-auto">
        <div class="panel panel-default">
          <div class="panel-body p-t-0">
            <div class="input-group">
              <input
                type="text"
                id="example-input1-group2"
                name="example-input1-group2"
                class="form-control"
                placeholder="Search"
              />
              <span class="input-group-btn">
                <button type="button" class="btn btn-effect-ripple btn-primary">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
