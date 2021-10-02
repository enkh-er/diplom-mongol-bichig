import React, {useState, useEffect} from "react";

const GlobalContext = React.createContext();

export const Global = (props) => {
    const [userInfo, setUserInfo] = useState(null);
    const setUser = (user) => {
        setUserInfo(user);
        localStorage.removeItem("user");
        if (user != null) localStorage.setItem("user", JSON.stringify(user));
    };
    useEffect(() => {
        let user = localStorage.getItem("user");
        setUserInfo(user ? JSON.parse(user) : null);
        return () => {
        };
    }, []);
    return (
        <GlobalContext.Provider
            value={{
                userInfo,
                setUser,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
