import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  // * Why use componentDidMount() - To make API call as it is called after comp is loaded.
  componentDidMount() {}

  render() {
    return (
      <div className="">
        <div className="text-center">
          <h1 className="m-2 p-2 font-bold text-2xl">About Page</h1>
          <h2 className="m-2 p-2 font-bold text-xl">
            This App is a Swiggy Clone App
          </h2>
        </div>

        <div className="">
          <div className="hover:bg-orange-200">
            <UserClass
              className=""
              name={"Tushar Meena"}
              location={"Delhi"}
              contact={"8920XXXXXX"}
              github={"https://github.com/tmeena202/"}
              leetcode={"https://leetcode.com/Dark_chronicle202/"}
              linkedln={"https://www.linkedin.com/in/tushar-meena-b620591a2/"}
            />
          </div>
          <div className="hover:bg-blue-200">
            <UserClass
              className=""
              name={"Tushar Meena"}
              location={"Delhi"}
              contact={"8920XXXXXX"}
              github={"https://github.com/tmeena202/"}
              leetcode={"https://leetcode.com/Dark_chronicle202/"}
              linkedln={"https://www.linkedin.com/in/tushar-meena-b620591a2/"}
            />
          </div>
          <div className="hover:bg-green-200">
            <UserClass
              className=""
              name={"Tushar Meena"}
              location={"Delhi"}
              contact={"8920XXXXXX"}
              github={"https://github.com/tmeena202/"}
              leetcode={"https://leetcode.com/Dark_chronicle202/"}
              linkedln={"https://www.linkedin.com/in/tushar-meena-b620591a2/"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
