export default function AboutUs() {
  return (
    <div className="w-full bg-[#fff9ef]">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Heading */}
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-12 text-center">
          About Us
        </h1>

        {/* Flex Container - Left Images + Right Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          
          {/* LEFT: 3 Tilted Frames */}
          <div className="relative flex flex-col gap-6 items-center lg:items-start">
            <img
              src="/Frame 9.png"
              alt="Projects"
              className="w-[200px] transform -rotate-3 shadow-xl"
            />
            <img
              src="/Frame 22.png"
              alt="Happy Clients"
              className="w-[200px] transform rotate-2 shadow-xl ml-6"
            />
            <img
              src="/Frame 23.png"
              alt="Experts Team"
              className="w-[200px] transform -rotate-2 shadow-xl ml-12"
            />
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex-1 text-right space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              Every project is more than just a brief — it’s a new chapter waiting to be written.
              Together, we've crafted tales that inspire, connect, and endure.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              Founded on the principle that every story deserves to be told with authenticity and brilliance, 
              we collaborate with brands, artists, and creators to transform ideas into compelling visual 
              experiences that resonate and inspire.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              Our approach combines strategic thinking with creative excellence. We believe in understanding 
              your vision deeply, then pushing the boundaries of what's possible to deliver work that not only 
              meets expectations but exceeds them.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              Whether it's commercials, documentaries, brand content, or artistic projects, we bring meticulous 
              attention to detail, innovative perspectives, and an unwavering commitment to quality in everything we do.
            </p>

            {/* Quote Box */}
            <div className="mt-10 bg-[#0F3255] text-white p-8 rounded-xl shadow-lg font-[Island_Moments] text-3xl leading-snug text-center">
              “Some stories come from the biggest names. Others begin with bold, rising voices.  
              We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
