export default function Home() {
  return (
    <div className="w-full pt-16">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
        
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
             
              <img
                src="/Hero Mandala.png"
                alt="Mandala"
                className="w-[600px] h-auto"
              />

             
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src="/VFilms Logo.png"
                  alt="Logo"
                  className="w-64 h-auto drop-shadow-xl"
                />
              </div>
            </div>

            <div className="mt-12">
            </div>
          </div>
          
         
          <div className="relative pt-16 flex flex-col text-right">
            <div className="bg-[#f9f3c8] p-8 shadow-lg transform relative">
              
              <p className="font-[Halant] font-normal text-[40px] leading-tight text-center mb-4">
                Films . Brands . Art
              </p>
              <p className="width: 487;
                              height: 154;
                              top: 673px;
                              left: 1066px;
                              angle: 0 deg;
                              opacity: 1;
                              font-family: Instrument Sans;
                              font-weight: 400;
                              font-style: Regular;
                              font-size: 18px;
                              leading-trim: NONE;
                              line-height: 100%;
                              letter-spacing: 0%;
                              text-align: center;
                              ">
                Since 2009, V’ve been telling stories — stories of people, their journeys,
                and the places that shape them. Some begin in polished boardrooms, others
                in humble village squares. But every story starts the same way — by listening
                with intention. V believes it takes trust, patience, and an eye for the unseen
                to capture what truly matters. V doesn’t just tell stories — V honors them.
              </p>
            </div>

            <div className="text-right mt-24 pb-16">
            
              <button className="bg-[#ff5722] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#f4511e] transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

