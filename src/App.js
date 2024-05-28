import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Layout from "./Layout"
import Error from "./Error"
import Info from "./Info"
import Notice from "./Notice"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/notice" element={<Notice />} />
        </Route>
          <Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;