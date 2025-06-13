import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectModel({project, onClose, onNext, onPrevious} ) {
    return (
        <div>
            <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50">
                <div className="p-10 bg-gray-900/15 transition-colors max-w-4xl w-11/12 max-h-[90vh] h-[90vh]
                backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-purple-700/50 ">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold tracking-tight text-purple-500">{project.title}</h2>
                        <X size={24} className="cursor-pointer text-red-500" onClick={onClose}
                            onMouseEnter={(e) => e.target.style.color = "red"}
                            onMouseLeave={(e) => e.target.style.color = "white"}
                        />
                    </div>
                    <div className="mt-2 flex justify-center">
                        <Image className="rounded-xl" src={project.image} alt={project.title} width={500} height={500} loading="eager" />
                    </div>
                    <p className="mt-6 text-xl text-gray-500 leading-8">{project.description}</p>
                    <p className="mt-6 text-xl text-gray-300 leading-8">{project.fullDescription}</p>
                    <div className="flex gap-4 mt-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium text-gray-50">{tag}</span>
                        ))}
                    </div>
                    <div className="flex gap-4 justify-center">
                        <ArrowLeft size={24} onClick={onPrevious}/>
                        <ArrowRight size={24} onClick={onNext}/>
                    </div>
                </div>
            </div>
        </div>
    );
}