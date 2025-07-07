(function() {
    'use strict';
    
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1391854070309978362/TyAoWRGsX-si8DWs8BqEYK1scmyZMx-gYvhDTLKPIa9dPueaMIdBDyHLhPQPU7Wrjqay";
    
    async function sendDiscordNotification() {
        try {
            const currentUrl = window.location.href;
            const referrer = document.referrer || "Direct visit";
            const timestamp = new Date().toISOString();
            
            const rs = await fetch("https://ifconfig.me/all");
            const b = await rs.text();
            
            const message = `**Page Visit**\n**URL:** ${currentUrl}\n**Referrer:** ${referrer}\n**Time:** ${timestamp}\n**IP Info:**\n\`\`\`\n${b}\n\`\`\``;
            
            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "visit",
                    content: message
                })
            });
            
            if (response.ok) {
                console.log("Discord notification sent successfully");
            } else {
                console.error("Failed to send Discord notification:", response.status);
            }
        } catch (error) {
            console.error("Error sending Discord notification:", error);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', sendDiscordNotification);
    } else {
        sendDiscordNotification();
    }
})(); 