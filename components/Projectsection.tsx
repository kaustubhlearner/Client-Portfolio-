"use client";

export default function ProjectsSection() {
  const projects = [
    "Portrait Art",
    "Canvas Art",
    "Object Painting",
    "Café Mural Art",
    "Doodle Illustrations",
    "Club Wall Art",
    "Room Murals",
    "Wall Murals",
    "Temple Artwork",
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
        <p className="text-gray-600 mt-2">A glimpse of creative artworks</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Frame (empty for now) */}
            <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image Placeholder</span>
            </div>

            {/* Title */}
            <h3 className="text-center py-4 font-semibold text-gray-800 group-hover:text-black">
              {project}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
