import React from "react";

const Jumbotron = () => {
  return (
    <div className="Jumbotron container bg-light">
        <h1 className="display-4">Hello World</h1>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <hr className="my-4"/>
        <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Click</a>
        </p>
        </div>
  );
};
export default Jumbotron;