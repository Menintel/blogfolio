import Image from "next/image";
export default function ProjectSection() {

    const projects = [
        {
            id: 1,
            title: "Blockchain Mini Game",
            description: "A blockchain mini game built with Unity and C#.",
            image: "https://via.placeholder.com/150",
            tags: ["Unity", "C#", "C++", "Solidity"]
        },
        {
            id: 2,
            title: "Avaria Mobile App",
            description: "A flutter mobile app built with flutter and dart.",
            image: "https://via.placeholder.com/150",
            tags: ["Flutter", "Dart"]
        },
        {
            id: 3,
            title: "PCAmbassadors.club",
            description: "A wordpress website for a client @ www.pcambassadors.club.",
            image: "https://via.placeholder.com/150",
            tags: ["Wordpress", "HTML", "CSS"]
        },
    ];
    return (
        <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Featured Project</h2>
            <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="p-10 bg-gray-900/15 transition-colors
                    backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-purple-700/50 ">
                        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                        <p className="mt-6 text-xl text-gray-500 leading-8">{project.description}</p>
                        {/*    <Image src={project.image} alt={project.title} width={150} height={150} /> */}
                        <div className="mt-6">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 text-xs font-medium text-gray-50">{tag}</span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <button className="px-3 py-1 rounded-4xl bg-purple-600 text-white font-medium hover:bg-purple-700">View Project</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}