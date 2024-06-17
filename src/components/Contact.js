const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black-2 p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black-2 p-2 m-2"
          placeholder="message"
        ></input>
        <button className="border border-black-2 p-2 m-2 bg-red-200 rounded-lg">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Contact;
