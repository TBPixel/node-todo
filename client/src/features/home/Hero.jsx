function Hero({ children }) {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
              The Todo app for everyone;
              <span className="text-indigo-600"> literally.</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              Whats Todo is an open source todo app that anyone can add, edit, complete or even erase from. It's a communal todo-board of sorts.
            </p>
          </div>

          <div className="mt-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero
