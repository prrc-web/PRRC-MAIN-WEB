# Visual Monolith: PRRC System Architecture

## System Topography
This diagram represents the single source of truth for the PRRC containerized environment.

```mermaid
graph TD
    %% Nodes
    User((User / Internet))
    
    subgraph Host_Machine [Windows Server / Host]
        
        subgraph Docker_Network [Docker Bridge Network]
            Nginx[Nginx Reverse Proxy]
            
            subgraph Container_NextJS [Next.js Monolith :3000]
                NextFront[Frontend <br/> Pages Router]
                Payload[Payload CMS 3.0 <br/> App Router]
                API[REST API <br/> /api/*]
            end
            
            Mongo[(MongoDB :27017)]
        end
        
        Volume_Media[Docker Volume: <br/> payload_uploads]
        Volume_DB[Docker Volume: <br/> mongodb_data]
    end

    %% Data Flow
    User -- HTTPS :443/80 --> Nginx
    Nginx -- Proxy Pass --> NextFront
    Nginx -- /admin-panel --> Payload
    Nginx -- /api --> API
    
    NextFront -- Data Fetch --> API
    Payload -- Mongoose --> Mongo
    API -- Mongoose --> Mongo
    
    %% Persistence
    Payload -- Read/Write --> Volume_Media
    Mongo -- Persistence --> Volume_DB
    
    %% Styling
    style User fill:#f9f,stroke:#333,stroke-width:2px
    style Nginx fill:#ff9,stroke:#333,stroke-width:2px
    style Container_NextJS fill:#cfc,stroke:#333,stroke-width:2px
    style Mongo fill:#dbd,stroke:#333,stroke-width:2px
```

## Directory Map
High-level mapping of the monolithic repository structure.

```mermaid
graph LR
    Root[PRRC-MAIN-WEB]
    
    Root --> Specs[specs/]
    Specs --> Standards[standards/]
    
    Root --> App[prrc-next-app/]
    App --> Collections[src/collections/]
    App --> Components[src/components/]
    App --> PayloadConfig[payload.config.ts]
    
    Root --> Nginx[nginx/]
    Root --> Compose[docker-compose.yml]
    
    style Specs fill:#ff9999,stroke:#333
```

---

## Script Execution Guidelines for AI Agents

When executing commands or scripts, AI agents must follow these protocols:

1. **Background Execution**: Run long-running processes in detached mode to prevent blocking
2. **Log Monitoring**: Check output in the `logs/` directory rather than waiting for direct output
3. **Timeout Prevention**: Use appropriate timeout mechanisms to avoid hanging processes
4. **Available Scripts**: Use the logging versions of scripts (e.g., `generate:types:log`) when available