import { Switch, Route } from "react-router-dom";
import BookAdd from "../components/BookAdd";

function AddBook(){
    return(
        <>
        <Switch>
            <Route>
                <BookAdd />
            </Route>
        </Switch>
        </>
    )}


export default AddBook;
