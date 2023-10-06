import { Routes, Route } from "react-router-dom";
import { App } from "./pages/App";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/default.layout";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<App />}/>
                <Route path="/history" element={<History />}/>
            </Route>
        </Routes>
    )
}