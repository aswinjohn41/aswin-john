import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Box, Chip } from '@mui/material'
import { Code, Palette, Storage, Build } from '@mui/icons-material'

const skillCategories = [
  {
    title: "Mobile Development",
    icon: <Code />,
    skills: ["React Native", "Flutter", "Kotlin", "Swift", "Android Studio", "Xcode"]
  },
  {
    title: "Web & Desktop Development",
    icon: <Build />,
    skills: ["React.js", "Node.js", "Electron.js", "WebSockets", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "UI/UX & Design",
    icon: <Palette />,
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "Design Systems"]
  },
  {
    title: "Backend & Tools",
    icon: <Storage />,
    skills: ["Node.js", "Firebase", "SQLite", "REST APIs", "Git", "GitHub", "AWS", "Jira", "Postman"]
  },
  {
    title: "Workflow & Methodologies",
    icon: <Build />,
    skills: ["Agile/Scrum", "CI/CD", "Testing & QA", "Code Review", "DevOps Basics"]
  }
]

function Skills() {
  return (
    <Container sx={{ padding: '80px 0' }}>
      <Typography variant="h2" sx={{
        textAlign: 'center',
        marginBottom: 4,
        color: 'primary.main',
        fontWeight: 700,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 3,
          background: 'linear-gradient(90deg, #722f37, #90EE90)',
          borderRadius: 2
        }
      }}>
        Technical Skills
      </Typography>
      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ height: '100%', animationDelay: `${index * 0.1}s` }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ marginLeft: 1, color: 'primary.main' }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        background: 'linear-gradient(135deg, #722f37, #90EE90)',
                        color: 'white'
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills