import { Routes, Route } from "react-router-dom";
import { App } from "./pages/App";
import { History } from "./pages/History"
export function Router(){
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/history" element={<History />}/>
        </Routes>
    )
}