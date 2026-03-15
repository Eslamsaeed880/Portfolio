import React from 'react';

const certifications = [
  { name: 'Master Spring, Spring Boot, REST, JPA, Hibernate',             issuer: 'Eazy Bytes'                  },
  { name: 'Fundamentals of Database Engineering',                          issuer: 'Hussien Nasser'              },
  { name: 'Algorithms',                                                    issuer: 'CSkilled'                    },
  { name: 'React',                                                         issuer: 'Maximilian Schwarzmuller'    },
  { name: 'Data Structures and Algorithms',                                issuer: 'CSkilled'                    },
  { name: 'Node JS Cluster with PM2, RabbitMQ, Redis and Nginx',          issuer: 'Pravinkumar Dabade'          },
  { name: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',  issuer: 'Maximilian Schwarzmuller'    },
  { name: 'Software Architecture & Technology of Large-Scale Systems',    issuer: 'New Tech Way'                },
];

export default function Certifications() {
  return (
    <div className="reveal" style={{ marginTop: 24 }}>
      <p className="coursework-label" style={{ marginBottom: 12 }}>Certifications</p>
      {certifications.map(item => (
        <div key={item.name} className="cert-card glass-panel">
          <div>
            <p className="cert-name">{item.name}</p>
            <p className="cert-issuer">{item.issuer}</p>
          </div>
          <span className="cert-year">✓</span>
        </div>
      ))}
    </div>
  );
}
