const initstate = "Login"
export default function NavReducer(state=initstate, action)
{
    switch(action.type){
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        default:
            return "Login";
    }
}