# Documentation Policy: Sovereign Spec Protocol

## 1. Code is King, Spec is Law
* **Source of Truth:** The `specs/` directory is the absolute authority on architecture.
* **Sync Requirement:** No code PR shall be merged without a corresponding update to `specs/spec.md` if the architecture or data flow changes.

## 2. Visuals Over Text
* **Mermaid First:** Complex relationships (data flow, network topography, directory structures) must be defined in Mermaid.js diagrams.
* **Scannability:** Text descriptions should be bulleted and minimal. Avoid "Wall of Text."

## 3. Script Execution Guidelines (New)
* **Background Execution:** All scripts, commands, and long-running processes must be executed in detached/background mode to prevent blocking operations.
* **Log Output:** All script outputs must be directed to the `logs/` directory with files named after their parent script.
* **No Attached Mode:** Never run scripts in attached mode that may run for extended periods, as this can cause timeouts or blocking loops.
* **Command Handling:** When LLMs need to run commands that might take time, they should either:
  1. Use background execution when possible
  2. Check logs for output instead of waiting for direct output
  3. Use timeout mechanisms to prevent hanging processes

## 4. The Triangle of Pain (Standards)
Any time a significant bug, configuration error, or architectural hallucination occurs, it must be codified as a **Standard** in `specs/standards/`.
* **Filename Format:** `NNN-short-description.md` (e.g., `002-nginx-upload-limits.md`)
* **Required Sections:**
    1.  **What Happened:** The specific error or bottleneck.
    2.  **The Cost:** Time lost, performance impact, or security risk.
    3.  **The Rule:** The strict technical guideline to prevent recurrence.

## 5. Maintenance
* **Archive Strategy:** Old specs (`prrc-next-app/specs`, `legacy/`) are moved to `archive/`. They are referenced for historical context only, never as current instructions.
* **Agent Directives:** AI Agents must read `specs/spec.md` and `specs/doc_policy.md` before generating code.