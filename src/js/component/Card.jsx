import React from "react";

const Card = () => {
  return (
    <div className="card-group">
      <div className="card text-center">
        <img
          src="https://picsum.photos/200/300?grayscale"
          className="card-img-top"
        ></img>
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit atque adipisci quidem non debitis. Quo voluptatibus, numquam iusto repellat, dolorum, adipisci dicta molestiae in perferendis consequuntur totam perspiciatis aliquid?
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
      <div className="card text-center">
        <img
          src="https://picsum.photos/200/300/?blur"
          className="card-img-top"
        ></img>
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam minima voluptatum impedit consequatur laboriosam ullam praesentium. Nam eveniet, atque voluptatum ab ad, debitis repellendus distinctio, excepturi facilis culpa incidunt.
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
      <div className="card text-center">
        <img
          src="https://picsum.photos/id/237/200/300"
          className="card-img-top"
        ></img>
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illum laborum ipsa nobis iure nam molestias, reiciendis unde at distinctio quis impedit et voluptatibus eos tenetur dolorum iusto. Minima, est!
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
      <div className="card text-center">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="card-img-top"
        ></img>
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis eius unde aut consectetur eligendi minima optio tenetur pariatur voluptate? Qui possimus vero delectus quam. Fugiat maiores dicta optio sequi.
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
export default Card;