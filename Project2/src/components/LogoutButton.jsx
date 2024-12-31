import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth-slice";
import { Button } from "react-native";

const LogoutButton = () => {
    const dispatch = useDispatch()
    
    const handleLogout = async () => {
            dispatch(logoutUser()).then(data=>{
                console.log(data, "logout");        
            })
        }

    return (
        <Button title="Logout" onPress={handleLogout} />
    );
};

export default LogoutButton