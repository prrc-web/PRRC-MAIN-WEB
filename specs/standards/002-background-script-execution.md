# Standard 002: Background Script Execution Protocol

## What Happened
An LLM developer attempted to run a script in attached mode that ran for 8 minutes, causing a timeout and blocking the development workflow. This highlighted the need for proper script execution protocols to prevent blocking operations.

## The Cost
* **Time Lost:** 8+ minutes of unproductive time waiting for a stuck process
* **Workflow Disruption:** Blocked development workflow requiring manual intervention
* **Resource Waste:** Unnecessarily consumed system resources during the stuck execution

## The Rule
1. **Background Execution Only:** All scripts, commands, and long-running processes must be executed in detached/background mode using the `is_background: true` parameter when available.
2. **Log Output Requirement:** All script outputs must be directed to the `logs/` directory with files named after their parent script (e.g., `script-name.log`).
3. **No Attached Mode for Long-Running Processes:** Never run scripts in attached mode that may run for more than 30 seconds, as this can cause timeouts or blocking loops.
4. **Monitoring Protocol:** Scripts should be monitored by checking log files rather than waiting for direct output in attached mode.
5. **Script Design:** When creating new scripts, ensure they can run in background mode and properly log their output to the designated logs directory.