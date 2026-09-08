const projects = [
  'Portrait Art',
  'Canvas Art',
  'Object Painting',
  'Café Mural Art',
  'Doodle Illustrations',
  'Club Wall Art',
  'Room Murals',
  'Wall Murals',
  'Temple Artwork',
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
        <p className="mt-2 text-gray-600">A glimpse of creative artworks</p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-20">
        {projects.map((project) => (
          <article
            key={project}
            className="group overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="flex h-56 w-full items-center justify-center bg-gray-200">
              <span className="text-sm text-gray-500">Artwork image coming soon</span>
            </div>
            <h3 className="py-4 text-center font-semibold text-gray-800 transition group-hover:text-purple-700">
              {project}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
