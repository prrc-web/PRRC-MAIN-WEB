# Standard 001: Centralized Architectural Truth

## What Happened
The project documentation was fragmented across `prrc-next-app/specs`, root `README.md`, and deprecated files like `QWEN.md`. This caused confusion regarding the location of Payload CMS (integrated vs. standalone) and the current networking setup.

## The Cost
* **Hallucinations:** AI agents could not determine if the app was Monolithic (Next.js + Payload) or Microservices (Separate Express App), leading to incorrect code generation.
* **Developer Friction:** The sole developer had to manually verify file locations instead of relying on a trusted map.

## The Rule
1.  **Root Sovereignty:** All architectural specifications live in `<root>/specs/`. No `spec.md` files are allowed inside subdirectories (e.g., `prrc-next-app/specs/` is forbidden).
2.  **Visual Confirmation:** The `specs/spec.md` file must contain an up-to-date Mermaid diagram of the Docker container topography.
3.  **Historical Isolation:** All superseded documentation must be moved to `<root>/archive/` immediately.