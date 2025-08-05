Here's a concise summary of our work and the ultimate solution:

### Problem Context
You needed to:
1. Replace an old IIS-hosted website with a new Next.js app (running in Docker/npm)
2. Maintain the same domain (www.prrc.nmt.edu) without DNS changes
3. Work around admin restrictions preventing direct domain reassignment

### Key Challenges
- Docker build failures due to ESLint errors
- Port conflicts between IIS (port 80) and Docker
- Proper reverse proxy configuration
- Preserving original domain in browser

### Solution Architecture
```
User Request → IIS (port 80) → Reverse Proxy → Docker Nginx (port 8080) → Next.js (port 3000)
```

### Critical Steps Taken
1. **Fixed Docker Build Issues**
   - Corrected duplicate props in Footer.jsx
   - Set `CI=false` to ignore non-critical warnings
   - Updated Dockerfile with proper base image

2. **Configured Docker Networking**
   ```yaml
   services:
     nginx:
       ports:
         - "8080:80"  # Avoids IIS port conflict
   ```

3. **IIS Reverse Proxy Setup**
   - Installed ARR and URL Rewrite modules
   - Created rewrite rule:
     ```xml
     <rule name="PRRC_Proxy" stopProcessing="true">
       <match url="(.*)" />
       <action type="Rewrite" url="http://localhost:8080/{R:1}" />
       <serverVariables>
         <set name="HTTP_X_FORWARDED_HOST" value="{HTTP_HOST}" />
       </serverVariables>
     </rule>
     ```

4. **DNS/Hosts Configuration**
   - Verified `www.prrc.nmt.edu` resolves to server IP
   - Added local testing entry to hosts file:
     ```
     127.0.0.1 www.prrc.nmt.edu
     ```

### Why This Approach Worked
1. **Zero Downtime Transition**
   - Old site remained live until proxy was verified
   - No DNS changes required

2. **Port Conflict Resolution**
   - Docker uses 8080 externally while IIS keeps 80
   - Nginx internally routes to Node.js on 3000

3. **Domain Preservation**
   - IIS maintains original domain in browser
   - X-Forwarded headers ensure app generates correct URLs

4. **Future Flexibility**
   - Easy rollback by disabling proxy rule
   - Docker allows independent app updates

### Verification Steps
1. **Direct Docker Access**
   ```powershell
   curl http://localhost:8080 -H "Host: www.prrc.nmt.edu"
   ```

2. **Through IIS Proxy**
   ```powershell
   curl http://localhost -H "Host: www.prrc.nmt.edu"
   ```

3. **Header Inspection**
   ```javascript
   // In Next.js app
   console.log(req.headers['x-forwarded-host']) // Should show original domain
   ```

### Current Status
✅ Docker containers running (Node:3000, Nginx:8080)  
✅ IIS reverse proxy configured  
✅ Original domain preserved  
✅ Zero DNS changes required  

This solution provides a clean transition path while meeting all technical and administrative constraints. Would you like to review any specific component in more detail?