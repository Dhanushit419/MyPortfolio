import React from 'react';
import Temp from '../images/person.png'

const projects = [
    {
        title: 'E-commerce Website',
        image: Temp,
        description: 'Developed an interactive e-commerce website with advanced search functionalities, including image search, providing a seamless user experience.'
    },
    {
        title: 'Student Reminder App',
        image: Temp,
        description: 'Built a mobile application using React Native that allows staff to schedule, postpone, or cancel classes. The app provides students with their attendance status and an interactive dashboard, enhancing their academic experience.'
    },
    {
        title: 'Shortest Path Map System',
        image: Temp,
        description: 'Implemented Dijkstra\'s algorithm to develop a shortest path map system for Tamil Nadu districts, helping users find the most efficient routes.'
    },
    {
        title: 'Visual Assistant for the Blind',
        image: Temp,
        description: 'Collaborated on an IoT project to create a visual assistant for blind individuals. Our system uses Azure AI to recognize surroundings and provide audio feedback, significantly improving the independence and safety of visually impaired users.'
    },
    {
        title: 'Visual Assistant for the Blind',
        image: Temp,
        description: 'Collaborated on an IoT project to create a visual assistant for blind individuals. Our system uses Azure AI to recognize surroundings and provide audio feedback, significantly improving the independence and safety of visually impaired users.'
    },
];

const ProjectsSection = () => {
    return (
        <div className="projects-section">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={project.image} alt={project.title} />
                            <div className="card-text">{project.title}</div>
                        </div>
                        <div className="card-back">
                            <div className="card-text">{project.description}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsSection;
