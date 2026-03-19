document.addEventListener('DOMContentLoaded', () => {

    // Slide 3: Prompting Logic
    const rolBtn = document.getElementById('prompt-btn-rol');
    const objBtn = document.getElementById('prompt-btn-obj');
    const resBtn = document.getElementById('prompt-btn-res');
    const promptPreview = document.getElementById('prompt-preview-container');
    const promptText = document.getElementById('prompt-text');
    const qualityBadge = document.getElementById('prompt-quality');
    let promptState = { rol: false, obj: false, res: false };

    function updatePrompt() {
        promptPreview.style.opacity = '1';
        let textParts = [];
        let score = 0;

        if (promptState.rol) {
            textParts.push("<span style='color: #60a5fa;'>[Rol]</span> Eres un Tech Lead Senior experto en arquitectura Cloud.");
            score++;
        }
        if (promptState.obj) {
            textParts.push("<span style='color: #34d399;'>[Objetivo]</span> Escribe un script de Terraform para desplegar un clúster GKE con auto-scaling.");
            score++;
        }
        if (promptState.res) {
            textParts.push("<span style='color: #f472b6;'>[Restricción]</span> No uses módulos comunitarios, utiliza recursos nativos de google_container_cluster.");
            score++;
        }

        if (score === 0) {
            promptText.innerHTML = "<span style='color: #666;'>Esperando contexto...</span>";
            qualityBadge.className = "quality-badge bad";
            qualityBadge.innerText = "Calidad: Baja";
            promptPreview.style.opacity = '0';
        } else {
            promptText.innerHTML = textParts.join("<br><br>");
            if (score === 1) {
                qualityBadge.className = "quality-badge bad";
                qualityBadge.innerText = "Calidad: Baja";
            } else if (score === 2) {
                qualityBadge.className = "quality-badge medium";
                qualityBadge.innerText = "Calidad: Media";
            } else {
                qualityBadge.className = "quality-badge good";
                qualityBadge.innerText = "Calidad: Excelente";
            }
        }
    }

    if (rolBtn) {
        rolBtn.addEventListener('click', () => {
            promptState.rol = !promptState.rol;
            rolBtn.classList.toggle('selected');
            updatePrompt();
        });
        objBtn.addEventListener('click', () => {
            promptState.obj = !promptState.obj;
            objBtn.classList.toggle('selected');
            updatePrompt();
        });
        resBtn.addEventListener('click', () => {
            promptState.res = !promptState.res;
            resBtn.classList.toggle('selected');
            updatePrompt();
        });
    }

    // Slide 4: Multi-Agent Logic
    const btnSimulate = document.getElementById('btn-simulate-agents');
    const packet = document.getElementById('code-packet');
    const auditorStatus = document.getElementById('auditor-status');
    const agentResult = document.getElementById('agent-result');

    if (btnSimulate) {
        btnSimulate.addEventListener('click', () => {
            btnSimulate.disabled = true;
            agentResult.style.opacity = '0';
            
            // Send V1 to Auditor
            packet.style.opacity = '1';
            packet.innerText = 'V1';
            packet.style.background = '#3b82f6'; // blue
            packet.style.left = '85%';
            auditorStatus.innerText = 'Analizando...';
            
            setTimeout(() => {
                // Auditor Rejects
                packet.style.background = '#ef4444'; // red
                packet.innerText = 'FIX!';
                auditorStatus.innerText = 'Vulnerabilidad detectada';
                auditorStatus.style.color = '#ef4444';
                
                setTimeout(() => {
                    // Send Back to Dev
                    packet.style.left = '0%';
                    auditorStatus.innerText = 'Esperando revisión...';
                    auditorStatus.style.color = 'inherit';
                    
                    setTimeout(() => {
                        // Send V2 
                        packet.style.background = '#10b981'; // green
                        packet.innerText = 'V2';
                        packet.style.left = '85%';
                        auditorStatus.innerText = 'Revalidando...';
                        
                        setTimeout(() => {
                            // Auditor Approves
                            auditorStatus.innerText = 'Aprobado ✓';
                            auditorStatus.style.color = '#10b981';
                            agentResult.style.opacity = '1';
                            btnSimulate.innerText = 'Simulación Completada';
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        });
    }

    // Slide 5: Gravity
    const btnGravity = document.getElementById('btn-antigravity');
    const b1 = document.getElementById('block-1');
    const b2 = document.getElementById('block-2');
    const b3 = document.getElementById('block-3');
    const gPerc = document.getElementById('gravity-perc');
    const bizVal = document.getElementById('biz-value');
    let gravityState = false;

    // Reset gravity when slide is shown
    Reveal.on('slidechanged', event => {
        if(event.currentSlide.id === 'slide-gravedad') {
            setTimeout(() => {
                b1.style.top = '100px';
                b2.style.top = '160px';
                b3.style.top = '220px';
                gPerc.style.opacity = '1';
                gravityState = true;
                btnGravity.innerText = "Activar Antigravity";
                btnGravity.style.opacity = '1';
                bizVal.innerHTML = '30%<br><span style="font-size:0.4em">Valor Cliente</span>';
                bizVal.style.height = '30%';
            }, 1000);
        }
        
        if(event.currentSlide.id === 'slide-agentes') {
            // Reset Slide 4
            packet.style.opacity = '0';
            packet.style.left = '0';
            agentResult.style.opacity = '0';
            btnSimulate.disabled = false;
            btnSimulate.innerText = 'Iniciar Simulación';
            auditorStatus.innerText = 'Esperando...';
            auditorStatus.style.color = 'inherit';
        }
        
        if (event.currentSlide.id === 'slide-minutos') {
            document.getElementById('runner-trad').style.width = '10%';
            document.getElementById('runner-trad').innerText = 'Semanas...';
            document.getElementById('runner-anti').style.width = '10%';
            document.getElementById('runner-anti').innerText = 'Minutos!';
            document.getElementById('btn-race').disabled = false;
        }
        
        if (event.currentSlide.id === 'slide-skills') {
            document.getElementById('terminal-output').innerHTML = '<span style="color: #666;">$ agente-devops status: esperando evento...</span><span class="cursor">_</span>';
            document.getElementById('btn-trigger-incident').disabled = false;
        }
    });

    if (btnGravity) {
        btnGravity.addEventListener('click', () => {
            if (gravityState) {
                // Activate Antigravity
                b1.style.top = '-100px';
                b2.style.top = '-100px';
                b3.style.top = '-100px';
                b1.style.opacity = '0';
                b2.style.opacity = '0';
                b3.style.opacity = '0';
                gPerc.style.opacity = '0';
                
                bizVal.style.height = '100%';
                bizVal.innerHTML = '100%<br><span style="font-size:0.4em">Enfoque Total en Negocio</span>';
                
                btnGravity.style.opacity = '0'; // Hide button after use
                gravityState = false;
            }
        });
    }

    // Slide 7: Race Track
    const btnRace = document.getElementById('btn-race');
    if (btnRace) {
        btnRace.addEventListener('click', () => {
            btnRace.disabled = true;
            const rTrad = document.getElementById('runner-trad');
            const rAnti = document.getElementById('runner-anti');
            
            rTrad.style.width = '25%';
            
            setTimeout(() => {
                rAnti.style.width = '100%';
                rAnti.innerText = '¡Desplegado en Minutos!';
                
                setTimeout(() => {
                    rTrad.style.width = '40%';
                    rTrad.innerText = 'Semana 2...';
                }, 1000);
            }, 100);
        });
    }

    // Slide 9: Terminal
    const btnIncident = document.getElementById('btn-trigger-incident');
    const termOutput = document.getElementById('terminal-output');
    
    if (btnIncident) {
        btnIncident.addEventListener('click', () => {
            btnIncident.disabled = true;
            
            // Simulate typing steps
            const steps = [
                { text: '<br><br><span style="color: #ef4444;">[CRITICAL] Error 502 Bad Gateway detectado en prod-frontend-01</span>', delay: 200 },
                { text: '<br><span style="color: #94a3b8;">> agente-devops analizando logs de ingestión...</span>', delay: 1000 },
                { text: '<br><span style="color: #94a3b8;">> Causa raíz: OOM (Out of Memory) en pod. Uso > 98%.</span>', delay: 2200 },
                { text: '<br><span style="color: #f59e0b;">> Ejecutando acción parche: kubectl scale deployment prod-frontend --replicas=5</span>', delay: 3500 },
                { text: '<br><span style="color: #10b981;">[OK] Nuevos pods saludables. Balanceo de carga ajustado.</span>', delay: 4800 },
                { text: '<br><span style="color: #3b82f6;">> Generando Post-Mortem y PR para subir límite de memoria en Terraform.</span>', delay: 6000 }
            ];
            
            let currentHTML = termOutput.innerHTML.replace('<span class="cursor">_</span>', '');
            
            steps.forEach(step => {
                setTimeout(() => {
                    currentHTML += step.text;
                    termOutput.innerHTML = currentHTML + '<span class="cursor">_</span>';
                }, step.delay);
            });
        });
    }
});
