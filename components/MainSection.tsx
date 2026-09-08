import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const artStyles = [
  { title: 'Doodle Art', desc: 'Playful, intricate, and fun designs' },
  { title: 'Canvas Painting', desc: 'Unique artwork for homes and galleries' },
  { title: 'Wall Painting', desc: 'Transform spaces with vibrant creativity' },
  { title: 'Portrait Painting', desc: 'Capturing emotions and expressions perfectly' },
];

export default function MainSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-purple-100 via-pink-50 to-white px-6 py-20 pt-28 text-center"
    >
      <h1 className="mb-6 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
        Hi, I’m Rakesh Sankhala
      </h1>

      <p className="mb-8 max-w-3xl text-lg text-gray-700 sm:text-xl md:text-2xl">
        I’m a graffiti art enthusiast from Jaipur, Rajasthan with{' '}
        <span className="font-semibold text-indigo-600">8 years of hands-on experience</span> in creating vibrant,
        captivating art that brings walls and canvases to life.
      </p>

      <p className="mb-12 max-w-4xl text-base text-gray-600 sm:text-lg md:text-xl">
        Passionate about expressing creativity, I specialize in transforming ideas into visually stunning masterpieces.
        From intricate doodle art to bold canvas paintings, striking wall murals, and lifelike portrait paintings, I
        bring imagination to reality with every stroke.
      </p>

      <div className="mb-12 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {artStyles.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-white/80 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h2 className="mb-2 text-xl font-semibold text-indigo-600">{item.title}</h2>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </article>
        ))}
      </div>

      <a
        href="#contact"
        className="mb-6 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-2xl"
      >
        Let’s Collaborate
      </a>

      <div className="flex items-center gap-6 text-2xl text-gray-700">
        <a aria-label="Visit Facebook profile" href="https://www.facebook.com/p/Rakesh-Sankhla-%C3%80rt-100063960668984/" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a aria-label="Visit Instagram profile" href="https://www.instagram.com/rakesh.sankhala_art/" target="_blank" rel="noopener noreferrer" className="transition hover:text-pink-600">
          <FaInstagram />
        </a>
        <a aria-label="Contact on WhatsApp" href="https://wa.me/918239638262" target="_blank" rel="noopener noreferrer" className="transition hover:text-green-600">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
