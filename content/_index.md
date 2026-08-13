---
# Leave the homepage title empty to use the site title
title: ""
summary: ""
date: 2026-08-12
type: landing

sections:
  - block: dev-hero
    id: hero
    content:
      username: john-fotis
      greeting: "Hi, I'm"
      show_status: true
      show_scroll_indicator: true
      typewriter:
        enable: true
        prefix: "I build"
        strings:
          - "automated infrastructures"
          - "cloud-native ecosystems"
          - "resilient network architectures"
          - "high-availability environments"
        type_speed: 70
        delete_speed: 40
        pause_time: 2500
      cta_buttons:
        - text: View My Work
          url: "#projects"
          icon: arrow-down
        - text: Get In Touch
          url: "#contact"
          icon: envelope
    design:
      style: centered
      avatar_shape: circle
      animations: true
      background:
        color:
          light: "#fafafa"
          dark: "#0a0a0f"
      spacing:
        padding: ["6rem", "0", "4rem", "0"]

  - block: portfolio
    id: projects
    content:
      title: "Featured Projects"
      subtitle: "A selection of my work"
      count: 0
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: "*"
        - name: Infrastructure
          tag: Infrastructure
        - name: Development
          tag: Development
        - name: Research & Telecom
          tag: Research
      default_button_index: 0
    design:
      columns: 3
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: tech-stack
    id: skills
    content:
      title: "Tech Stack"
      subtitle: "Technologies I use to build and automate apps"
      categories:
        - name: Operating Systems & Hypervisors
          items:
            - name: Debian
              icon: devicon/debian
            - name: Ubuntu Server
              icon: devicon/ubuntu
            - name: Proxmox VE
              icon: devicon/proxmox
            - name: Windows Server
              icon: devicon/windows11
        - name: Languages
          items:
            - name: YAML
              icon: devicon/yaml
            - name: Bash Scripting
              icon: devicon/bash
            - name: Python
              icon: devicon/python
            - name: Go
              icon: devicon/go
        - name: Version Control - Containerization - Orchestration
          items:
            - name: Git
              icon: devicon/git
            - name: Docker
              icon: devicon/docker
            - name: Kubernetes
              icon: devicon/kubernetes
            - name: Helm
              icon: devicon/helm
        - name: Networking & Security
          items:
            - name: Cloudflare
              icon: devicon/cloudflare
            - name: OPNSense
              icon: devicon/opnsense
            - name: Nginx
              icon: devicon/nginx
            - name: Traefik
              icon: devicon/traefikproxy
        - name:
          items:
            - name: Authentik
              icon: brands/authentik
            - name: Vaultwarden
              icon: brands/vaultwarden
            - name: Wireguard
              icon: brands/wireguard
            - name: Tailscale
              icon: brands/tailscale
        - name: Storage - Backups - Databases
          items:
            - name: TrueNAS
              icon: brands/truenas
            - name: Mongo DB
              icon: devicon/mongodb
            - name: PostgreSQL
              icon: devicon/postgresql
            - name: Redis
              icon: devicon/redis
        - name: CI/CD - Provisioning - Configuration
          items:
            - name: GitHub Actions
              icon: devicon/githubactions
            - name: Jenkins
              icon: devicon/jenkins
            - name: Ansible
              icon: devicon/ansible
            - name: Terraform
              icon: devicon/terraform
        - name: Monitoring
          items:
            - name: Prometheus
              icon: devicon/prometheus
            - name: Grafana
              icon: devicon/grafana
            - name: InfluxDB
              icon: devicon/influxdb
            - name: Slack
              icon: devicon/slack
    design:
      style: grid
      show_levels: false
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: experience
    id: experience
    content:
      username: john-fotis
      title: Experience
    design:
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # - block: skills
  #   content:
  #     username: john-fotis
  #     title: Skills
  #     text: Tooling and languages I use most often.
  #   design:
  #     columns: 2
  #     background:
  #       color:
  #         light: "#ffffff"
  #         dark: "#0d0d12"
  #     spacing:
  #       padding: ["4rem", "0", "4rem", "0"]

  - block: languages
    content:
      username: john-fotis
      title: Languages

  - block: contact-info
    id: contact
    content:
      username: john-fotis
      title: Get In Touch
      subtitle: "Let's build something together"
      text: |-
        Whether you want to discuss infrastructure architecture, network security, or open-source deployments, feel free to reach out!
      email: giannisfotis@gmail.com
      autolink: true
    design:
      columns: "1"
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: cta-card
    content:
      title: "Open to Opportunities"
      text: |-
        I'm currently targeting **cloud and platform engineering** roles.
        Let's connect and discuss how I can help your infrastructure scale.
      button:
        text: "Download Resume"
        url: uploads/resume.pdf
        new_tab: true
    design:
      card:
        css_class: "bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200 dark:from-primary-600 dark:via-primary-700 dark:to-secondary-700"
        text_color: dark
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "6rem", "0"]
---
