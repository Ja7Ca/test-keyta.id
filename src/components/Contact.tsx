const Contact = () => {
  return (
    <section className="py-20" id="contact">
        <div className="container">
            <h1 className="text-2xl md:text-5xl text-center font-bold">Ingin Mencoba nya?</h1>
            <h1 className="text-2xl md:text-5xl text-center font-bold text-purple-800">Hubungi Kami</h1>
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-4">
                <button className="py-4 px-11 rounded-lg font-bold bg-purple-800 text-white duration-200 hover:scale-105 active:scale-95">Start for Free</button>
                <button className="py-4 px-11 rounded-lg font-bold bg-white text-purple-800 border duration-200 hover:scale-105 active:scale-95">Request more info</button>
            </div>
        </div>
    </section>
  )
}

export default Contact