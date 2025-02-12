import { useRouteError } from "react-router-dom";
export default function Cuserr(){
    const error = useRouteError()
    console.error(error)
    return(
        <>
        <div className="font-extrabold items-baseline justify-items-center">
            <h1>Sorry!</h1>
            <p>An Unexpected error has occured.</p>
            <p><i>{error.statusText||error.message}</i></p>
        </div>
        </>
    )
}