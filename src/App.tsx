import Form from "./components/Form"
function App() {


  return (
    <>
      <header className="w-full bg-emerald-400 text-black dark:dark:bg-gray-600 dark:text-white text-center text-4xl font-semibold p-5">
        <h1 className="font-3xl">Form with React, Vite and TS</h1>
      </header>
      <section className="py-20 px-5 border-indigo-50">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
