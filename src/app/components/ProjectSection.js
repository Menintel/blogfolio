"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectModel from "./ProjectModel";
import ProjectDetails from "./ProjectDetails";

export default function ProjectSection() {
    const projects = ProjectDetails;
    const [selectedProject, setSelectedProject] = useState(null);
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const handleOpenModal = (id) => {
        setSelectedProject(id);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleNextProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);
        if (currentIndex === projects.length - 1) {
            setSelectedProject(projects[0].id);
        } else {
            setSelectedProject(projects[currentIndex + 1].id);
        }
    };

    const handlePreviousProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);
        if (currentIndex === 0) {
            setSelectedProject(projects[projects.length - 1].id);
        } else {
            setSelectedProject(projects[currentIndex - 1].id);
        }
    };
    return (
        <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Featured Project</h2>
            <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => (
                    <div onClick={() => handleOpenModal(project.id)} key={project.id} className="p-10 bg-gray-900/15 transition-colors
                    backdrop-blur-sm rounded-lg border border-b-purple-950/50 border-gray-950/50 shadow-md hover:shadow-purple-500/50 ">
                        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                        <p className="mt-6 text-xl text-gray-500 leading-8">{project.description}</p>
                        {/*    <Image src={project.image} alt={project.title} width={150} height={150} /> */}
                        <div className="flex flex-wrap gap-1 mt-auto">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 text-xs font-medium text-gray-50">{tag}</span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <button className="px-3 py-1 rounded-4xl bg-purple-600 text-white font-medium hover:bg-purple-900">View Project</button>
                        </div>
                    </div>
                ))}
            </div>
            {
                selectedProject && (
                    <ProjectModel project={projects.find((project) => project.id === selectedProject)} 
                    onClose={handleCloseModal} 
                    onNext={handleNextProject} 
                    onPrevious={handlePreviousProject} />
                )
            }
        </section>
    );
}