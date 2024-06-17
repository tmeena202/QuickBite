import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 0,
      userInfo: {
        name: "Default",
        location: "Default",
        avatar_url: "", // Set a default avatar URL
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/tmeena202");
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { like, userInfo } = this.state;
    const { contact, github, leetcode, linkedln } = this.props;

    return (
      <div className="user-class border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Like: {like}</h1>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            onClick={() => {
              this.setState({
                like: like + 1,
              });
            }}
          >
            Increase Like
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            onClick={() => {
              this.setState({
                like: like - 1,
              });
            }}
          >
            Decrease Like
          </button>
        </div>
        <div className="flex items-center">
          <div className="w-1/4">
            <img
              className="h-32 w-32 rounded-full object-cover border border-gray-400"
              src={userInfo.avatar_url || "https://via.placeholder.com/150"}
              alt="User Avatar"
            />
          </div>
          <div className="w-3/4 ml-4">
            <h2 className="text-xl font-semibold mb-2">
              Name: {userInfo.name}
            </h2>
            <p className="text-gray-600 mb-2">Location: {userInfo.location}</p>
            <p className="text-gray-600 mb-2">Contact: {contact}</p>
            <p className="text-gray-600 mb-2">GitHub: {github}</p>
            <p className="text-gray-600 mb-2">LeetCode: {leetcode}</p>
            <p className="text-gray-600">LinkedIn: {linkedln}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
