import Snow from "./Snow";

function App() {
  return (
    <div className="h-screen w-screen flex lg:items-center justify-center overflow-hidden bg-[#282828] text-white relative">
      
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="relative z-50 px-10 lg:px-0 pt-[200px] lg:pt-0">
          <h1
            className="max-w-md text-3xl font-bold text-center lg:text-5xl lg:text-left"
          >Este sitio está en <b>construcción</b></h1>
          <p className="mt-2 text-lg text-center text-gray-500 lg:text-left">Si quieres obtener este dominio, <a href="mailto:jonathanbarrios1998@gmail.com" className="text-blue-500 cursor-pointer hover:text-blue-600">comunicate aqui</a></p>
        </div>
        <div className="lg:w-[500px] lg:h-[500px] absolute bottom-[200px] lg:relative lg:bottom-0">
          <div data-js="astro" className="astronaut">
            <div className="head"></div>
            <div className="arm arm-left"></div>
            <div className="arm arm-right"></div>
            <div className="body">
              <div className="panel"></div>
            </div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
            <div className="schoolbag"></div>
          </div>
        </div>
      </div>
      <Snow />
    </div>
  );
}

export default App;
