import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ProjectModel({project, onClose, onNext, onPrevious} ) {
    const overlayRef = useRef(null);
    const modelRef = useRef(null);
    const handleOutsideClick = (e) => {
        if (overlayRef.current && modelRef.current && !modelRef.current.contains(e.target)) {
            onClose();
        }
    };
    
    return (
            <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50"
                onClick={handleOutsideClick}   ref={overlayRef}>
                <div ref={modelRef} className="p-8 bg-gray-900/15 transition-colors max-w-4xl w-11/12 max-h-[90vh] h-10/12 overflow-y-auto
                backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-purple-700/50" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold tracking-tight text-purple-500">{project.title}</h2>
                        <X size={24} className="cursor-pointer text-red-500" onClick={onClose}
                            onMouseEnter={(e) => e.target.style.color = "red"}
                            onMouseLeave={(e) => e.target.style.color = "white"}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                        {/* Image */}
                        <div className="relative h-64 w-full md:w-1/2 flex-shrink-0">
                            <Image className="rounded-xl" src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <p className="mt-6 text-xl text-gray-300 leading-8">{project.description}</p>  
                            <p className="mt-6 text-xl text-gray-300 leading-8">{project.fullDescription}</p>
                            {/* Tags */}

                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-purple-800 mb-3">Tech Stack</h3>
                                <ul className="grid grid-cols-2 list-disc list-inside">
                                    {project.teckStack.map((tag) => (
                                        <li key={tag} className="px-1 py-1 text-sm font-medium text-gray-50">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Navigation */}
                    <div className="mt-5 bottom-2 flex justify-between w-11/12 max-w-4xl">
                        <ChevronLeft className="cursor-pointer text-white hover:text-purple-600" size={24} onClick={onPrevious} />
                        <ChevronRight className="cursor-pointer text-white hover:text-purple-600 translate-x-full" size={24} onClick={onNext}/>
                    </div>
                </div>
            </div>
    );
}