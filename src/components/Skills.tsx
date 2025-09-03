// src/components/Skills.tsx
import { useEffect, useState } from "react";
import { Cloud, Server, Code, Shield } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-7 h-7 text-cyan-400" />,
      color: "text-cyan-400",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Microsoft Azure", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "DigitalOcean", level: 90 },
      ],
    },
    {
      title: "DevOps Tools",
      icon: <Server className="w-7 h-7 text-green-400" />,
      color: "text-green-400",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "GitLab CI/CD", level: 88 },
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: <Code className="w-7 h-7 text-purple-400" />,
      color: "text-purple-400",
      skills: [
        { name: "Terraform", level: 92 },
        { name: "Ansible", level: 88 },
        { name: "CloudFormation", level: 85 },
      ],
    },
    {
      title: "Monitoring & Security",
      icon: <Shield className="w-7 h-7 text-pink-400" />,
      color: "text-pink-400",
      skills: [
        { name: "Prometheus", level: 88 },
        { name: "Grafana", level: 90 },
        { name: "ELK Stack", level: 85 },
        { name: "HashiCorp Vault", level: 80 },
        { name: "Linux", level: 90 },
        { name: "Python", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Skills
            </span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A creative showcase of technologies and DevOps tools I use
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {category.skills.map((skill, i) => (
                  <RingMeter
                    key={i}
                    skill={skill}
                    colorClass={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Simple Ring Meter ---
const RingMeter = ({ skill, colorClass }: { skill: Skill; colorClass: string }) => {
  const [progress, setProgress] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start++;
      if (start <= skill.level) {
        setProgress(start);
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [skill.level]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg className="w-28 h-28 transform -rotate-90">
        {/* Background ring */}
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="gray"
          strokeOpacity="0.3"
          strokeWidth="10"
          fill="transparent"
        />
        {/* Progress ring */}
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="currentColor"
          className={colorClass}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      {/* Percentage */}
      <div className="absolute flex items-center justify-center w-28 h-28">
        <span className="text-white font-bold">{progress}%</span>
      </div>
      <p className="mt-2 text-sm text-gray-300 font-medium">{skill.name}</p>
    </div>
  );
};

export default Skills;
