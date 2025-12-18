import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material'

const experiences = [
  {
    title: "Mobile & Web Developer | UI/UX Designer",
    company: "Loom Analytics – Toronto, ON",
    date: "Mar 2024 – Present",
    points: [
      "Spearheading development across web, mobile, and desktop platforms",
      "Designed and developed live transcription app using Figma, React, and WebSockets",
      "Built Electron apps for macOS and Windows",
      "Developed mobile applications using Kotlin, Swift, and Flutter",
      "Handled end-to-end UI/UX: wireframes, design systems, and implementation",
      "Managed source control, CI/CD, and deployments using GitHub, Jira, and AWS"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Stackodile Pvt. Ltd. – India",
    date: "Nov 2022 – Apr 2024",
    points: [
      "Built and maintained cross-platform mobile apps using Flutter and React Native",
      "Translated Figma designs into production-ready interfaces",
      "Integrated APIs and implemented business logic",
      "Supported feature development, performance optimization, and testing"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Company Confidential",
    date: "Apr 2024 – Sep 2024",
    points: [
      "Developed frontend interfaces using React and mobile components in Flutter",
      "Worked on UI polishing, testing, and incremental improvements"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Futura Labs – Kerala, India",
    date: "Nov 2021 – July 2022",
    points: [
      "Assisted in Android development, software testing, and basic web application features"
    ]
  }
]

function Experience() {
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
        Professional Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', animationDelay: `${index * 0.2}s` }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: 'primary.main', marginBottom: 1 }}>
                  {exp.title}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 1, opacity: 0.9 }}>
                  {exp.company}
                </Typography>
                <Typography sx={{ color: 'secondary.main', fontWeight: 500, marginBottom: 2 }}>
                  {exp.date}
                </Typography>
                <Box component="ul" sx={{ paddingLeft: 2 }}>
                  {exp.points.map((point, i) => (
                    <Typography component="li" key={i} sx={{ marginBottom: 1 }}>
                      {point}
                    </Typography>
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

export default Experience

