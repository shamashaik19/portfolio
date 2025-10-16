import { Cloud, Server, Shield, Code } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "AWS Cloud Tools",
      icon: <Cloud className="w-7 h-7 text-yellow-400" />,
      skills: [
        "EC2",
        "S3",
        "Lambda",
        "IAM",
        "CloudWatch",
        "RDS",
        "DynamoDB",
        "Route 53",
        "CloudFormation",
        "VPC",
      ],
    },
    {
      title: "DevOps Tools",
      icon: <Server className="w-7 h-7 text-cyan-400" />,
      skills: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitLab CI/CD",
        "GitHub Actions",
        "Terraform",
        "Ansible",
        "ArgoCD",
        "Jira",
      ],
    },
    {
      title: "Monitoring & Security",
      icon: <Shield className="w-7 h-7 text-green-400" />,
      skills: [
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "HashiCorp Vault",
        "CloudWatch Alerts",
      ],
    },
    {
      title: "Programming & Databases",
      icon: <Code className="w-7 h-7 text-pink-400" />,
      skills: ["Python", "SQL", "Bash", "YAML", "Linux"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
          Technical Skills
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of AWS services, DevOps tools, monitoring platforms, and
          programming skills I work with daily.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition duration-300 border border-gray-700 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-cyan-300">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-700/40 hover:bg-gray-700 text-sm font-medium py-2 rounded-md transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
