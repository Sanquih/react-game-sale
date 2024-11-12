import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type Props = {};

function ErrorElement({}: Props) {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error)
        ? "The page does not exist"
        : `An error has occurred ${(error as Error).message}`}
    </div>
  );
}

export default ErrorElement;
