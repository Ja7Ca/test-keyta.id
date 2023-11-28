const Pricing = () => {
  return (
    <section className="py-20" id="pricing">
        <div className="container">
            <h1 className="text-4xl text-center font-bold">PRICING</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg p-5 sm:p-10 border border-purple-800">
                <p className="text-3xl font-semibold text-center">BASIC</p>
                <div className="mt-9 text-center">
                  <p className="text-5xl font-semibold">$1.00</p>
                  <p className="text-base sm:text-xl">per month</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 text-center">
                  <p className="text-base sm:text-xl">Mencatat barang masuk</p>
                  <p className="text-base sm:text-xl">Mencatat barang keluar</p>
                  <p className="text-base sm:text-xl">Mencatat hasil keuntungan</p>
                  <p className="text-base sm:text-xl md:block hidden">&nbsp;</p>
                  <p className="text-base sm:text-xl md:block hidden">&nbsp;</p>
                  <p className="text-base sm:text-xl md:block hidden">&nbsp;</p>
                </div>
                <div className="mt-10">
                  <button className="rounded bg-purple-800 text-white py-4 w-full duration-200 hover:scale-105 active:scale-95">Get Started</button>
                </div>
              </div>
              <div className="rounded-lg p-5 sm:p-10 border border-purple-800">
                <p className="text-3xl font-semibold text-center">BUSINESS</p>
                <div className="mt-9 text-center">
                  <p className="text-5xl font-semibold">$5.00</p>
                  <p className="text-base sm:text-xl">per month</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 text-center">
                  <p className="text-base sm:text-xl">Mencatat barang masuk dan keluar</p>
                  <p className="text-base sm:text-xl">Mencatat Keuntungan</p>
                  <p className="text-base sm:text-xl">CHART Analisa Penjualan</p>
                  <p className="text-base sm:text-xl">Support 7x24 Jam</p>
                  <p className="text-base sm:text-xl md:block hidden">&nbsp;</p>
                  <p className="text-base sm:text-xl md:block hidden">&nbsp;</p>
                </div>
                <div className="mt-10">
                  <button className="rounded bg-purple-800 text-white py-4 w-full duration-200 hover:scale-105 active:scale-95">Get Started</button>
                </div>
              </div>
              <div className="rounded-lg p-5 sm:p-10 border border-purple-800">
                <p className="text-3xl font-semibold text-center">ENTREPRENEUR</p>
                <div className="mt-9 text-center">
                  <p className="text-5xl font-semibold">CUSTOM</p>
                  <p className="text-base sm:text-xl">per month</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 text-center">
                <p className="text-base sm:text-xl">Mencatat barang masuk dan keluar</p>
                  <p className="text-base sm:text-xl">Mencatat Keuntungan</p>
                  <p className="text-base sm:text-xl">CHART Analisa Penjualan</p>
                  <p className="text-base sm:text-xl">Support 7x24 Jam</p>
                  <p className="text-base sm:text-xl">Export data ke Excel</p>
                  <p className="text-base sm:text-xl">AI Prediksi penghasilan</p>
                </div>
                <div className="mt-10">
                  <button className="rounded bg-purple-800 text-white py-4 w-full duration-200 hover:scale-105 active:scale-95">Get Started</button>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing