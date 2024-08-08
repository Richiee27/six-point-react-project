import { useEffect } from "react";
import { useHistory} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../components/Login'
import { supabase } from "../index";

function Session () {
    const history = useHistory();

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if (session === null) {
                history.replace("/login");
            } else {
                history.replace("/");
            }
        });
    }, [])
};


export default Session
