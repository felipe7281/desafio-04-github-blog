import { Home } from "./pages/Home"
import { Route, Routes} from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Issue } from "./pages/Issue/Index"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/issue" element={<Issue />} />
            </Route>
        </Routes>
    )
}