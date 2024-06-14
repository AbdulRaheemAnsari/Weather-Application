import Weather from './Components/Weather'

const App = () => {

  // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  // 535cecc8e400531e10b93dbcb7a4206d

  return (
    <div className='w-full h-screen bg-[#ECF4D6] object-cover flex justify-center items-center'>
      <Weather />
    </div>
  )
}

export default App;