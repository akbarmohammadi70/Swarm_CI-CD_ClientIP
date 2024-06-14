
# Docker Swarm Deployment with Ansible

This repository contains Ansible roles and a playbook to automate the deployment of a Docker Swarm cluster with specific services using Docker containers.

## Setup

### Requirements
- Ansible installed on your local machine.
- Three nodes: at least one manager and two worker nodes, all accessible via SSH.

### Ansible Roles
1. **docker**: Installs Docker on all nodes.
2. **swarm**: Initializes a Docker Swarm.
3. **nginx**: Installs and configures Nginx on the manager node to act as a reverse proxy, serving on port 80.
4. **registery_runner**: Sets up a Docker registry and GitLab Runner on the manager node.

### Ansible Playbook

The playbook `deploy.yml` defines the installation steps:

```yaml
---
- name: Install Docker
  become: yes
  become_user: root
  hosts: all
  roles:
    - roles/docker
  tags:
    - docker

- name: Initialize Swarm
  become: yes
  become_user: root
  hosts: all
  roles:
    - roles/swarm
  tags:
    - swarm

- name: Install Nginx on Manager node for Reverse Proxy
  become: yes
  become_user: root
  hosts: manager
  roles:
    - roles/nginx
  tags:
    - nginx

- name: Install Registry and Gitlab-Runner
  become: yes
  become_user: root
  hosts: manager
  roles:
    - roles/registery_runner
  tags:
    - registery
  ```

### Usage

1. **Clone the repository**:
   ```bash
   git clone https://devops-task-akbar-mohammadi.apps.teh1.abrhapaas.com/root/ansible.git
   cd ansible
   ```

2. **Edit inventory file** (`inventory.yml`) with your server details.

3. **Run the playbook**:
   ```bash
   ansible-playbook -i inventory.yml -u root install.yml
   ```

4. **Verify deployment**:
   - Docker should be installed on all nodes.
   - Swarm should be initialized.
   - Nginx should be running on the manager node, serving as a reverse proxy on port 80.
   - Registry and GitLab Runner should be installed on the manager node within the Docker Swarm.

### Notes
- Each role (`docker`, `swarm`, `nginx`, `registery_runner`) can be individually tagged for selective execution.
- Ensure all nodes meet the prerequisites and are reachable via SSH before running the playbook.



