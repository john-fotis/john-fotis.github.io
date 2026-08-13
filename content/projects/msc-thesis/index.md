---
title: "Assessing the Energy and Resilience Trade-offs of Service Mesh Integration and DDoS Mitigation in a Cloud-Native 5G Environment"
date: 2025-10-27
summary: "Design and implementation of a custom anomaly detection platform for dynamic DDoS mitigation, alongside the quantification of Service Mesh energy overhead in a 5G Core."
tags:
  - Research
  - 5G
  - Infrastructure
  - Cloud-Native Architecture
  - Cybersecurity
  - Development
tech_stack:
  - Open5GS
  - UERANSIM
  - Kubernetes
  - Istio Service Mesh
  - Prometheus & Grafana
  - Kepler
  - Python
featured: true
status: "Completed"
role: "Researcher"
duration: "2024 - 2025"
team_size: 2
highlights:
  - "Designed and validated a fully containerized 5G Core testbed with a custom anomaly detection framework."
  - "Developed a dynamic Fair-use policy algorithm that achieved a ~50% reduction in signaling traffic during registration floods."
  - "Quantified the exact energy overhead of Istio sidecars under varying signaling loads using eBPF-based telemetry."
---

## Research Context: Securing the Cloud-Native 5G Core

The telecommunications sector is undergoing a profound transformation as 5G networks embrace cloud-native technologies and a Service-Based Architecture (SBA). In this modern paradigm, monolithic infrastructure has been replaced by containerized, modular Network Functions (NFs) that communicate via HTTP/2 APIs and are orchestrated by platforms like Kubernetes.

While this virtualization enables unprecedented scalability and automation, it also introduces immense signaling complexity. A single procedure - such as a user registration - now triggers dozens of distributed API calls across the network. This decoupled nature drastically expands the attack surface, making the Control Plane highly vulnerable to signaling storms and Distributed Denial of Service (DDoS) attacks.

Furthermore, as the industry's research pushes toward 6G, environmental and economic sustainability have emerged as essential design parameters alongside ultra-low latency and reliability. Telecom operators now face a critical dilemma: **How can they deploy robust, dynamic security in the Control Plane without violating green energy goals or inflating operational costs?**

### Thesis Objectives

To address the complexity of distributed signaling, 3GPP introduced the Service Communication Proxy (SCP) as a centralized broker for inter-NF communication. This Master's thesis leverages the SCP concept by integrating an Istio Service Mesh, utilizing Envoy sidecar proxies to enforce zero-trust security (mTLS) and provide unified Layer 7 observability.

The primary objective of this research was to design a custom experimentation platform and an intelligent anomaly detection algorithm capable of dynamically mitigating signaling-level DDoS attacks, specifically registration floods. Secondarily, the study aimed to empirically quantify the exact "energy cost of resilience" by measuring the power overhead introduced by the Service Mesh under varying network loads.

---

## Custom Experimentation Platform

To conduct this research, a comprehensive, fully decoupled 5G testbed was engineered from the ground up. The platform leveraged a modern open-source software stack deployed on a bare-metal Kubernetes cluster, provisioned via Proxmox Virtual Environment to ensure near-native performance and strict resource isolation.

| Component          | Technology                   | Implementation Details                                                                                                                                |
| :----------------- | :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **5G Core**        | Open5GS                      | Containerized Release-17 implementation for 5GC, strictly enforcing 3GPP Model D communication where the SCP acts as the centralized broker. |
| **RAN Simulation** | UERANSIM                     | Simulated 5G User Equipment (UE) and Next Generation Node B (gNB) to generate massive signaling loads.                                       |
| **Service Mesh**   | Istio                        | Handled centralized routing control, unified Layer 7 observability, and mandatory mutual TLS (mTLS) encryption via Envoy sidecars.           |
| **Telemetry**      | Prometheus, Grafana & Kepler | Centralized time-series metrics collection, unified observability dashboards, and eBPF-based pod-level energy estimation.                    |

---

## Dynamic Anomaly Detection & Mitigation

The core innovation of this thesis was the design and validation of a proprietary, metric-based anomaly detection framework tailored specifically for the 5G Control Plane.

A registration flood - where misbehaving UEs repeatedly perform registration and deregistration procedures - can quickly exhaust Control Plane resources (CPU, Memory, Network Bandwidth) and degrade service for legitimate users. To combat this, a custom Python-based backend was developed to constantly monitor telemetry and enforce a dynamic rate-limiting strategy directly within the Kubernetes environment.

### The Detection Algorithm

The custom algorithm evaluates real-time metrics against historical data to distinguish between legitimate high-demand traffic and sustained malicious behavior:

- **Historical Context:** The system queries Prometheus every 10 seconds, maintaining a memory buffer of the 100 most recent median network usage records for each UE workload.
- **Threshold Identification:** A pod is flagged as suspicious if its current metric exceeds a predefined threshold factor (set to 2.5) multiplied by its current median.
- **Sustained Anomaly Verification:** To prevent false positives, the quarantine mechanism is strictly activated only after 5 consecutive spikes, equating to at least 50 seconds of sustained abnormal behavior.
- **Dynamic Mitigation:** Because UERANSIM bridges all simulated UE traffic to the pod's single `eth0` interface, fine-grained control per UE was not feasible without a specialized CNI plugin. Therefore, once a policy violation is confirmed, the offending UE pod is rate-limited at the network interface level for a 5-minute duration.
- **Adaptive Median Adjustment:** During the quarantine period, the system continues to update the pod's median record; if the traffic originates from legitimate high volume, the median adjusts upwards to prevent blind re-banning once the policy expires.

### Results

When tested against a simulated 100-UE registration flood, the framework successfully detected the anomaly and triggered the Fair-use policy. The enforcement of the rate-limit resulted in a **~50% reduction in signaling traffic** directed at critical core Network Functions, heavily mitigating the load on the Access and Mobility Management Function (AMF) and the Session Management Function (SMF).

---

## Service Mesh Energy Impact Assessment

While the Service Mesh provided crucial Layer 7 security and observability, injecting Envoy sidecars into every pod inherently introduces operational overhead. The secondary objective of this study was to empirically quantify this environmental cost to address the gap in understanding the true OPEX of cloud-native 5G adoption.

Using Kepler, which utilizes eBPF to probe CPU performance counters and Linux kernel tracepoints, the energy consumption of a plain Open5GS core was benchmarked against a Service Mesh-enabled core under varying levels of signaling load (from 10 to 100 concurrent UEs).

- **Idle Overhead:** At an idle state, the sidecar proxies introduced a baseline energy overhead of **9.3%**.
- **Active Load Scalability:** As signaling traffic volume increased, the proxy overhead scaled accordingly due to the computational demands of L7 routing and cryptographic mTLS processing.
- **Peak Consumption:** Under heavy signaling load (50 to 100 UEs), the energy overhead gap widened and stabilized at approximately **33.6% to 34.1%** additional power consumption compared to the naked 5G core.

These findings establish tangible, quantitative data on the operational expenditure of cloud-native adoption, providing a clear picture of the energy required to gain the security and resilience benefits of a Service Mesh in a 5GC deployment.

---

## 🔗 Resources & Artifacts

- **Thesis Document:** [Pergamos Library Repository](https://pergamos.lib.uoa.gr/item/uoadl:5311065)
- **Code Repository:** [GitHub - Thesis Open5GS Work](https://github.com/katerinagiann/Thesis_Open5GS)
