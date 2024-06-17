import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOps Something went wrong.</h1>
      <h1>Page not found.</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
