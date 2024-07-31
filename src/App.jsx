import { TasksProvider } from './components/Context/Context'
import { Header } from './components/Layouts/Header/Header'
import { Main } from './components/Layouts/Main/Main'
import './App.css'

function App() {

  return (
    <>
      <TasksProvider>
        <Header />
        <Main />
      </TasksProvider>
    </>
  )
}

export default App