> **🚀 Don't want to self-host?** [Join the waitlist for our fully managed solution →](https://mcp.localbosses.org)
> 
> Zero setup. Zero maintenance. Just connect and automate.

---

### 🙏 Credits

**Original Creator:** [@mastanley13](https://github.com/mastanley13) — Built the foundation for this MCP server.

**Extended by:** [@BusyBee3333](https://github.com/BusyBee3333) — Expanded to 563+ tools covering the entire GHL API.

---

# 🚀 GoHighLevel MCP Server

## 💡 What This Unlocks

**This MCP server gives AI direct access to your entire GoHighLevel CRM.** Instead of clicking through menus, you just *tell* it what you want.

### 🎯 GHL-Native Power Moves

| Just say... | What happens |
|-------------|--------------|
| *"Find everyone who filled out a form this week but hasn't been contacted"* | Searches contacts, filters by source and last activity, returns a ready-to-call list |
| *"Create an opportunity for John Smith, $15k deal, add to Enterprise pipeline"* | Creates the opp, assigns pipeline stage, links to contact — done |
| *"Schedule a discovery call with Sarah for Tuesday 2pm and send her a confirmation"* | Checks calendar availability, books the slot, fires off an SMS |
| *"Draft a blog post about our new service and schedule it for Friday"* | Creates the post in your GHL blog, SEO-ready, scheduled to publish |
| *"Send a payment link for Invoice #1042 to the client via text"* | Generates text2pay link, sends SMS with payment URL |

### 🔗 The Real Power: Combining Tools

When you pair this MCP with other tools (web search, email, spreadsheets, Slack, etc.), things get *wild*:

| Combo | What you can build |
|-------|-------------------|
| **GHL + Calendar + SMS** | "Every morning, text me a summary of today's appointments and any leads that went cold" |
| **GHL + Web Search + Email** | "Research this prospect's company, then draft a personalized outreach email and add them as a contact" |
| **GHL + Slack + Opportunities** | "When a deal closes, post a celebration to #wins with the deal value and rep name" |
| **GHL + Spreadsheet + Invoices** | "Import this CSV of clients, create contacts, and generate invoices for each one" |
| **GHL + AI + Conversations** | "Analyze the last 50 customer conversations and tell me what objections keep coming up" |

> **This isn't just API access — it's your CRM on autopilot, controlled by natural language.**

---

## 🎁 Don't Want to Self-Host? We've Got You.

**Not everyone wants to manage servers, deal with API keys, or troubleshoot deployments.** We get it.

👉 **[Join the waitlist for our fully managed solution](https://mcp.localbosses.org)**

**What you get:**
- ✅ **Zero setup** — We handle everything
- ✅ **Always up-to-date** — Latest features and security patches automatically
- ✅ **Priority support** — Real humans who know GHL and AI
- ✅ **Enterprise-grade reliability** — 99.9% uptime, monitored 24/7

**Perfect for:**
- Agencies who want to focus on clients, not infrastructure
- Teams without dedicated DevOps resources
- Anyone who values their time over tinkering with configs

<p align="center">
  <a href="https://mcp.localbosses.org">
    <img src="https://img.shields.io/badge/Join_Waitlist-Get_Early_Access-0ea5e9?style=for-the-badge&logo=rocket&logoColor=white" alt="Join Waitlist">
  </a>
</p>

---

*Prefer to self-host? Keep reading below for the full open-source setup guide.*

---

## 🚨 **IMPORTANT: FOUNDATIONAL PROJECT NOTICE** 

> **⚠️ This is a BASE-LEVEL foundational project designed to connect the GoHighLevel community with AI automation through MCP (Model Context Protocol).**

### **🎯 What This Project Is:**
- **Foundation Layer**: Provides access to ALL sub-account level GoHighLevel API endpoints via MCP
- **Community Starter**: Built to get the community moving forward together, faster
- **Open Architecture**: API client and types can be further modularized and segmented as needed
- **Educational Resource**: Learn how to integrate GoHighLevel with AI systems

### **⚠️ Critical AI Safety Considerations:**
- **Memory/Recall Systems**: If you don't implement proper memory or recall mechanisms, AI may perform unintended actions
- **Rate Limiting**: Monitor API usage to avoid hitting GoHighLevel rate limits
- **Permission Controls**: Understand that this provides FULL access to your sub-account APIs
- **Data Security**: All actions are performed with your API credentials - ensure proper security practices

### **🎯 Intended Use:**
- **Personal/Business Use**: Integrate your own GoHighLevel accounts with AI
- **Development Base**: Build upon this foundation for custom solutions  
- **Learning & Experimentation**: Understand GoHighLevel API patterns
- **Community Contribution**: Help improve and extend this foundation

### **🚫 NOT Intended For:**
- **Direct Resale**: This is freely available community software
- **Production Without Testing**: Always test thoroughly in development environments
- **Unmonitored AI Usage**: Implement proper safeguards and monitoring

---

## 🔑 **CRITICAL: GoHighLevel API Setup**

### **📋 Required: Private Integrations API Key**

> **⚠️ This project requires a PRIVATE INTEGRATIONS API key, not a regular API key!**

**How to get your Private Integrations API Key:**

1. **Login to your GoHighLevel account**
2. **Navigate to Settings** → **Integrations** → **Private Integrations**
3. **Create New Private Integration:**
   - **Name**: `MCP Server Integration` (or your preferred name)
   - **Webhook URL**: Leave blank (not needed)
4. **Select Required Scopes** based on tools you'll use:
   - ✅ **contacts.readonly** - View contacts
   - ✅ **contacts.write** - Create/update contacts  
   - ✅ **conversations.readonly** - View conversations
   - ✅ **conversations.write** - Send messages
   - ✅ **opportunities.readonly** - View opportunities
   - ✅ **opportunities.write** - Manage opportunities
   - ✅ **calendars.readonly** - View calendars/appointments
   - ✅ **calendars.write** - Create/manage appointments
   - ✅ **locations.readonly** - View location data
   - ✅ **locations.write** - Manage location settings
   - ✅ **workflows.readonly** - View workflows
   - ✅ **campaigns.readonly** - View campaigns
   - ✅ **blogs.readonly** - View blog content
   - ✅ **blogs.write** - Create/manage blog posts
   - ✅ **users.readonly** - View user information
   - ✅ **custom_objects.readonly** - View custom objects
   - ✅ **custom_objects.write** - Manage custom objects
   - ✅ **invoices.readonly** - View invoices
   - ✅ **invoices.write** - Create/manage invoices
   - ✅ **payments.readonly** - View payment data
   - ✅ **products.readonly** - View products
   - ✅ **products.write** - Manage products

5. **Save Integration** and copy the generated **Private API Key**
6. **Copy your Location ID** from Settings → Company → Locations

**💡 Tip:** You can always add more scopes later by editing your Private Integration if you need additional functionality.

---

This project was a 'time-taker' but I felt it was important. Feel free to donate - everything will go into furthering this Project -> Aiming for Mass Agency "Agent Driven Operations".

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mastanley13/GoHighLevel-MCP)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/mastanley13/GoHighLevel-MCP)
[![Donate to the Project](https://img.shields.io/badge/Donate_to_the_Project-💝_Support_Development-ff69b4?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/28E14o1hT7JAfstfvqdZ60y)

---

### 🤖 Recommended Setup Options

#### Option 1: Clawdbot (Easiest — Full AI Assistant)

**[Clawdbot](https://clawd.bot)** is the easiest way to run this MCP server. It's an AI assistant platform that handles all the MCP configuration, environment setup, and integration automatically.

**Why Clawdbot?**
- ✅ **Zero-config MCP setup** — Just add your GHL API key and go
- ✅ **Multi-channel AI** — Use your GHL tools via Discord, Slack, iMessage, WhatsApp, and more
- ✅ **Built-in automation** — Schedule tasks, create workflows, and chain tools together
- ✅ **Always-on assistant** — Runs 24/7 so your GHL automation never sleeps

**Quick start:**
```bash
npm install -g clawdbot
clawdbot init
clawdbot config set skills.entries.ghl-mcp.apiKey "your_private_integrations_key"
```

Learn more at [docs.clawd.bot](https://docs.clawd.bot) or join the [community Discord](https://discord.com/invite/clawd).

#### Option 2: mcporter (Lightweight CLI)

**[mcporter](https://github.com/cyanheads/mcporter)** is a lightweight CLI tool for managing and calling MCP servers directly from the command line. Perfect if you want to test tools, debug integrations, or build your own automation scripts.

**Why mcporter?**
- ✅ **Direct MCP access** — Call any MCP tool from the terminal
- ✅ **Config management** — Easy server setup and auth handling
- ✅ **Great for scripting** — Pipe MCP tools into shell scripts and automations
- ✅ **Debugging friendly** — Inspect requests/responses in real-time

**Quick start:**
```bash
npm install -g mcporter
mcporter config add ghl-mcp --transport stdio --command "node /path/to/ghl-mcp-server/dist/server.js"
mcporter call ghl-mcp search_contacts --params '{"query": "test"}'
```

---

> **🔥 Transform Claude Desktop into a complete GoHighLevel CRM powerhouse with 563+ powerful tools across 41+ categories**

## 🎯 What This Does

This comprehensive MCP (Model Context Protocol) server connects Claude Desktop directly to your GoHighLevel account, providing unprecedented automation capabilities:

- **👥 Complete Contact Management**: 31 tools for contacts, tasks, notes, and relationships
- **💬 Advanced Messaging**: 20 tools for SMS, email, conversations, and call recordings  
- **🏢 Business Operations**: Location management, custom objects, workflows, and surveys
- **💰 Sales & Revenue**: Opportunities, payments, invoices, estimates, and billing automation
- **📱 Marketing Automation**: Social media, email campaigns, blog management, and media library
- **🛒 E-commerce**: Store management, products, inventory, shipping, and order fulfillment
- **🎙️ Voice AI**: 11 tools for managing voice AI agents, actions, and call logs
- **📄 Proposals & Documents**: 4 tools for document/contract automation and templates
- **🏪 Marketplace**: 7 tools for app installations and billing management
- **📋 Custom Menus**: 5 tools for white-label menu customization

## ⚡ Quick Deploy Options

### 🟢 Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ghl-mcp-server)

**Why Vercel:**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS and global CDN
- ✅ Zero-config deployment
- ✅ Perfect for MCP servers

### 🚂 Railway  
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

**Why Railway:**
- ✅ $5 free monthly credit
- ✅ Simple one-click deployment
- ✅ Automatic scaling
- ✅ Great for production workloads

### 🎨 Render
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Built-in SSL

## 🌟 Complete Tool Catalog (563+ Tools)

### 🎯 Contact Management (31 Tools)
**Core Operations:**
- `create_contact`, `search_contacts`, `get_contact`, `update_contact`, `delete_contact`
- `add_contact_tags`, `remove_contact_tags` - Organize with tags

**Task & Note Management:**
- `get_contact_tasks`, `create_contact_task`, `update_contact_task`, `delete_contact_task`
- `get_contact_notes`, `create_contact_note`, `update_contact_note`, `delete_contact_note`

**Advanced Features:**
- `upsert_contact` - Smart create/update
- `get_duplicate_contact` - Duplicate detection
- `bulk_update_contact_tags` - Mass tag operations
- `add_contact_to_workflow`, `remove_contact_from_workflow` - Workflow automation
- `add_contact_followers`, `remove_contact_followers` - Team collaboration

### 💬 Messaging & Conversations (20 Tools)
**Direct Communication:**
- `send_sms`, `send_email` - Send messages with rich formatting
- `search_conversations`, `get_conversation`, `create_conversation`

**Message Management:**
- `get_message`, `get_email_message`, `upload_message_attachments`
- `update_message_status`, `cancel_scheduled_message`

**Call Features:**
- `get_message_recording`, `get_message_transcription`, `download_transcription`
- `add_inbound_message`, `add_outbound_call` - Manual logging

**Live Chat:**
- `live_chat_typing` - Real-time typing indicators

### 📝 Blog Management (7 Tools)
- `create_blog_post`, `update_blog_post` - Content creation with SEO
- `get_blog_posts`, `get_blog_sites` - Content discovery
- `get_blog_authors`, `get_blog_categories` - Organization
- `check_url_slug` - SEO validation

### 💰 Opportunity Management (10 Tools)
- `search_opportunities` - Advanced filtering by pipeline, stage, contact
- `get_pipelines` - Sales pipeline management
- `create_opportunity`, `update_opportunity`, `delete_opportunity`
- `update_opportunity_status` - Quick win/loss updates
- `upsert_opportunity` - Smart pipeline management
- `add_opportunity_followers`, `remove_opportunity_followers`

### 🗓️ Calendar & Appointments (14 Tools)
**Calendar Management:**
- `get_calendar_groups`, `get_calendars`, `create_calendar`
- `update_calendar`, `delete_calendar`

**Appointment Booking:**
- `get_calendar_events`, `get_free_slots` - Availability checking
- `create_appointment`, `get_appointment`, `update_appointment`, `delete_appointment`

**Schedule Control:**
- `create_block_slot`, `update_block_slot` - Time blocking

### 📧 Email Marketing (5 Tools)
- `get_email_campaigns` - Campaign management
- `create_email_template`, `get_email_templates` - Template system
- `update_email_template`, `delete_email_template`

### 🏢 Location Management (24 Tools)
**Sub-Account Management:**
- `search_locations`, `get_location`, `create_location`, `update_location`, `delete_location`

**Tag System:**
- `get_location_tags`, `create_location_tag`, `update_location_tag`, `delete_location_tag`

**Custom Fields & Values:**
- `get_location_custom_fields`, `create_location_custom_field`, `update_location_custom_field`
- `get_location_custom_values`, `create_location_custom_value`, `update_location_custom_value`

**Templates & Settings:**
- `get_location_templates`, `delete_location_template`, `get_timezones`

### ✅ Email ISV (9 Tools)
**Verification:**
- `verify_email` - Deliverability and risk assessment

**Sending Domains:**
- `ghl_list_email_domains`, `ghl_add_email_domain`, `ghl_delete_email_domain`
- `ghl_verify_email_domain` - Trigger DNS verification (DKIM/SPF/DMARC)
- `ghl_get_domain_dns_records` - Get required DNS records

**Deliverability & Providers:**
- `ghl_get_email_stats` - Bounce/spam/open/click rates
- `ghl_list_email_providers`, `ghl_set_default_email_provider`

### 📱 Social Media Management (17 Tools)
**Post Management:**
- `search_social_posts`, `create_social_post`, `get_social_post`
- `update_social_post`, `delete_social_post`, `bulk_delete_social_posts`

**Account Integration:**
- `get_social_accounts`, `delete_social_account`, `start_social_oauth`

**Bulk Operations:**
- `upload_social_csv`, `get_csv_upload_status`, `set_csv_accounts`

**Organization:**
- `get_social_categories`, `get_social_tags`, `get_social_tags_by_ids`

**Platforms:** Google Business, Facebook, Instagram, LinkedIn, Twitter, TikTok

### 📁 Media Library (3 Tools)
- `get_media_files` - Search and filter media
- `upload_media_file` - File uploads and hosted URLs
- `delete_media_file` - Clean up media assets

### 🏗️ Custom Objects (9 Tools)
**Schema Management:**
- `get_all_objects`, `create_object_schema`, `get_object_schema`, `update_object_schema`

**Record Operations:**
- `create_object_record`, `get_object_record`, `update_object_record`, `delete_object_record`

**Advanced Search:**
- `search_object_records` - Query custom data

**Use Cases:** Pet records, support tickets, inventory, custom business data

### 🔗 Association Management (10 Tools)
- `ghl_get_all_associations`, `ghl_create_association`, `ghl_get_association_by_id`
- `ghl_update_association`, `ghl_delete_association`
- `ghl_create_relation`, `ghl_get_relations_by_record`, `ghl_delete_relation`
- Advanced relationship mapping between objects

### 🎛️ Custom Fields V2 (8 Tools)
- `ghl_get_custom_field_by_id`, `ghl_create_custom_field`, `ghl_update_custom_field`
- `ghl_delete_custom_field`, `ghl_get_custom_fields_by_object_key`
- `ghl_create_custom_field_folder`, `ghl_update_custom_field_folder`, `ghl_delete_custom_field_folder`

### ⚡ Workflow Management (8 Tools)
- `ghl_get_workflows`, `ghl_list_workflows` - Workflow discovery & filtering
- `ghl_get_workflow` - Full workflow details
- `ghl_update_workflow_status` - Enable/disable workflows
- `ghl_delete_workflow` - Delete a workflow
- `ghl_trigger_workflow` - Manually enroll a contact into a workflow
- `ghl_get_workflow_executions` - Execution history & status

### 📊 Survey Management (9 Tools)
- `ghl_get_surveys`, `ghl_get_survey_submissions` - Existing survey tools
- `ghl_create_survey`, `ghl_get_survey`, `ghl_update_survey`, `ghl_delete_survey` - Full CRUD
- `ghl_list_survey_submissions`, `ghl_get_survey_submission` - Submission management
- `ghl_get_survey_stats` - Analytics & completion rates

### 🛒 Store Management (18 Tools)
**Shipping Zones:**
- `ghl_create_shipping_zone`, `ghl_list_shipping_zones`, `ghl_get_shipping_zone`
- `ghl_update_shipping_zone`, `ghl_delete_shipping_zone`

**Shipping Rates:**
- `ghl_get_available_shipping_rates`, `ghl_create_shipping_rate`, `ghl_list_shipping_rates`
- `ghl_get_shipping_rate`, `ghl_update_shipping_rate`, `ghl_delete_shipping_rate`

**Carriers & Settings:**
- `ghl_create_shipping_carrier`, `ghl_list_shipping_carriers`, `ghl_update_shipping_carrier`
- `ghl_create_store_setting`, `ghl_get_store_setting`

### 📦 Products Management (10 Tools)
**Product Operations:**
- `ghl_create_product`, `ghl_list_products`, `ghl_get_product`
- `ghl_update_product`, `ghl_delete_product`

**Pricing & Inventory:**
- `ghl_create_price`, `ghl_list_prices`, `ghl_list_inventory`

**Collections:**
- `ghl_create_product_collection`, `ghl_list_product_collections`

### 💳 Payments Management (20 Tools)
**Integration Providers:**
- `create_whitelabel_integration_provider`, `list_whitelabel_integration_providers`

**Order Management:**
- `list_orders`, `get_order_by_id`, `create_order_fulfillment`, `list_order_fulfillments`

**Transaction Tracking:**
- `list_transactions`, `get_transaction_by_id`

**Subscription Management:**
- `list_subscriptions`, `get_subscription_by_id`

**Coupon System:**
- `list_coupons`, `create_coupon`, `update_coupon`, `delete_coupon`, `get_coupon`

**Custom Payment Gateways:**
- `create_custom_provider_integration`, `delete_custom_provider_integration`
- `get_custom_provider_config`, `create_custom_provider_config`

### 🧾 Invoices & Billing (39 Tools)
**Invoice Templates:**
- `create_invoice_template`, `list_invoice_templates`, `get_invoice_template`
- `update_invoice_template`, `delete_invoice_template`
- `update_invoice_template_late_fees`, `update_invoice_template_payment_methods`

**Recurring Invoices:**
- `create_invoice_schedule`, `list_invoice_schedules`, `get_invoice_schedule`
- `update_invoice_schedule`, `delete_invoice_schedule`, `schedule_invoice_schedule`
- `auto_payment_invoice_schedule`, `cancel_invoice_schedule`

**Invoice Management:**
- `create_invoice`, `list_invoices`, `get_invoice`, `update_invoice`
- `delete_invoice`, `void_invoice`, `send_invoice`, `record_invoice_payment`
- `generate_invoice_number`, `text2pay_invoice`

**Estimates:**
- `create_estimate`, `list_estimates`, `update_estimate`, `delete_estimate`
- `send_estimate`, `create_invoice_from_estimate`, `generate_estimate_number`

**Estimate Templates:**
- `list_estimate_templates`, `create_estimate_template`, `update_estimate_template`
- `delete_estimate_template`, `preview_estimate_template`

### 🎙️ Voice AI (11 Tools)
**Agent Management:**
- `list_voice_ai_agents`, `create_voice_ai_agent`, `get_voice_ai_agent`
- `update_voice_ai_agent`, `delete_voice_ai_agent`

**Actions:**
- `create_voice_ai_action`, `get_voice_ai_action`, `update_voice_ai_action`, `delete_voice_ai_action`

**Call Logs:**
- `list_voice_ai_call_logs`, `get_voice_ai_call_log`

### 📄 Proposals & Documents (4 Tools)
- `list_proposals_documents`, `send_proposal_document`
- `list_proposal_templates`, `send_proposal_template`

### 📋 Custom Menus (5 Tools)
- `list_custom_menus`, `create_custom_menu`, `get_custom_menu`
- `update_custom_menu`, `delete_custom_menu`

### 🏪 Marketplace & Billing (7 Tools)
**App Installations:**
- `list_marketplace_installations`, `delete_marketplace_installation`

**Billing Charges:**
- `list_billing_charges`, `create_billing_charge`, `check_billing_funds`
- `get_billing_charge`, `delete_billing_charge`

### 📞 Phone System (15 Tools)
**Existing:**
- `list_number_pools`, `list_active_numbers_by_location`

**Number Search & Purchase:**
- `ghl_search_available_numbers` - Search numbers by area code, country, type & capabilities
- `ghl_buy_phone_number` - Purchase a number to your location
- `ghl_release_phone_number` - Release/remove a number

**Number Management:**
- `ghl_get_phone_number`, `ghl_list_phone_numbers` - View number details
- `ghl_update_phone_number` - Update forwarding & messaging settings
- `ghl_configure_call_forwarding` - Advanced forwarding rules

**Call Records:**
- `ghl_get_call_recording`, `ghl_list_call_recordings` - Access recordings
- `ghl_get_voicemail` - Retrieve voicemail messages

**BYOC (Bring Your Own Carrier):**
- `ghl_get_byoc_trunk`, `ghl_create_byoc_trunk`, `ghl_list_byoc_trunks`

### 🤖 Agent Studio (8 Tools) — NEW March 2026
The brand-new GHL Agent Studio API for building and deploying AI agents programmatically.
Required scope: `agent-studio_write`

**Agent CRUD:**
- `ghl_create_agent` - Create a new agent (auto-creates staging version)
- `ghl_list_agents`, `ghl_get_agent` - Discover and inspect agents
- `ghl_update_agent` - Update name, description, status
- `ghl_delete_agent` - Permanently remove an agent

**Version & Deployment:**
- `ghl_list_agent_versions` - List all staging/production snapshots
- `ghl_update_agent_version` - Build the agent graph (nodes, edges, variables, config)
- `ghl_deploy_agent` - Deploy staging → production

### 🔧 Workflow Builder (7 Tools)
- `ghl_create_workflow`, `ghl_list_workflows_full`, `ghl_get_workflow_full`
- `ghl_update_workflow_actions`, `ghl_delete_workflow`
- `ghl_publish_workflow`, `ghl_clone_workflow`

## 🎮 Claude Desktop Usage Examples

### 📞 Customer Communication Workflow
```
"Search for contacts tagged 'VIP' who haven't been contacted in 30 days, then send them a personalized SMS about our new premium service offering"
```

### 💰 Sales Pipeline Management
```
"Create an opportunity for contact John Smith for our Premium Package worth $5000, add it to the 'Enterprise Sales' pipeline, and schedule a follow-up appointment for next Tuesday"
```

### 📊 Business Intelligence
```
"Get all invoices from the last quarter, analyze payment patterns, and create a report of our top-paying customers with their lifetime value"
```

### 🛒 E-commerce Operations
```
"List all products with low inventory, create a restock notification campaign, and send it to contacts tagged 'inventory-manager'"
```

### 📱 Social Media Automation
```
"Create a social media post announcing our Black Friday sale, schedule it for all connected platforms, and track engagement metrics"
```

### 🎯 Marketing Automation
```
"Find all contacts who opened our last email campaign but didn't purchase, add them to the 'warm-leads' workflow, and schedule a follow-up sequence"
```

## 🔧 Local Development

### Prerequisites
- Node.js 18+ (Latest LTS recommended)
- GoHighLevel account with API access
- Valid API key and Location ID
- Claude Desktop (for MCP integration)

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/mastanley13/GoHighLevel-MCP.git
cd GoHighLevel-MCP

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Configure your GHL credentials in .env

# Build the project
npm run build

# Start the server
npm start

# For development with hot reload
npm run dev
```

### Environment Configuration
```bash
# Required Environment Variables
GHL_API_KEY=your_private_integrations_api_key_here  # From Private Integrations, NOT regular API key
GHL_BASE_URL=https://services.leadconnectorhq.com
GHL_LOCATION_ID=your_location_id_here              # From Settings → Company → Locations
NODE_ENV=production

# Optional Configuration
PORT=8000
CORS_ORIGINS=*
LOG_LEVEL=info
```

### Available Scripts
```bash
npm run build          # TypeScript compilation
npm run dev            # Development server with hot reload
npm start              # Production HTTP server
npm run start:stdio    # CLI MCP server for Claude Desktop
npm run start:http     # HTTP MCP server for web apps
npm test               # Run test suite
npm run test:watch     # Watch mode testing
npm run test:coverage  # Coverage reports
npm run lint           # TypeScript linting
```

### Testing & Validation
```bash
# Test API connectivity
curl http://localhost:8000/health

# List available tools
curl http://localhost:8000/tools

# Test MCP SSE endpoint
curl -H "Accept: text/event-stream" http://localhost:8000/sse
```

## 🌐 Deployment Guide

### 🟢 Vercel Deployment (Recommended)

**Option 1: One-Click Deploy**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mastanley13/GoHighLevel-MCP)

**Option 2: Manual Deploy**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Configure environment variables in Vercel dashboard
# Add: GHL_API_KEY, GHL_BASE_URL, GHL_LOCATION_ID, NODE_ENV
```

**Vercel Configuration** (vercel.json):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/http-server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/dist/http-server.js"
    }
  ]
}
```

### 🚂 Railway Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up

# Add environment variables via Railway dashboard
```

### 🎨 Render Deployment

1. Connect your GitHub repository
2. Configure build command: `npm run build`
3. Configure start command: `npm start`
4. Add environment variables in Render dashboard

### 🐳 Docker Deployment

```bash
# Build image
docker build -t ghl-mcp-server .

# Run container
docker run -p 8000:8000 \
  -e GHL_API_KEY=your_key \
  -e GHL_BASE_URL=https://services.leadconnectorhq.com \
  -e GHL_LOCATION_ID=your_location_id \
  ghl-mcp-server
```

## 🔌 Claude Desktop Integration

### Quick Install

```bash
# 1. Clone and build
git clone https://github.com/BusyBee3333/Go-High-Level-MCP-2026-Complete
cd Go-High-Level-MCP-2026-Complete
npm install
npm run build

# 2. Note the absolute path to dist/server.js for config below
pwd
```

### MCP Configuration

Add to your Claude Desktop config file:
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "ghl-mcp-server": {
      "command": "node",
      "args": ["/absolute/path/to/Go-High-Level-MCP-2026-Complete/dist/server.js"],
      "env": {
        "GHL_API_KEY": "your_private_integrations_api_key",
        "GHL_BASE_URL": "https://services.leadconnectorhq.com",
        "GHL_LOCATION_ID": "your_location_id"
      }
    }
  }
}
```

> **Tip:** Replace `/absolute/path/to/` with the actual full path from `pwd` above.

### Cursor Configuration

Add to `.cursor/mcp.json` in your project or `~/.cursor/mcp.json` globally:

```json
{
  "mcpServers": {
    "ghl-mcp-server": {
      "command": "node",
      "args": ["/absolute/path/to/Go-High-Level-MCP-2026-Complete/dist/server.js"],
      "env": {
        "GHL_API_KEY": "your_private_integrations_api_key",
        "GHL_BASE_URL": "https://services.leadconnectorhq.com",
        "GHL_LOCATION_ID": "your_location_id"
      }
    }
  }
}
```

### HTTP MCP Integration
For web-based MCP clients, use the HTTP endpoint:
```
https://your-deployment-url.vercel.app/sse
```

## 📋 Project Architecture

```
ghl-mcp-server/
├── 📁 src/                    # Source code
│   ├── 📁 clients/            # API client implementations
│   │   └── ghl-api-client.ts  # Core GHL API client
│   ├── 📁 tools/              # MCP tool implementations
│   │   ├── contact-tools.ts   # Contact management (31 tools)
│   │   ├── conversation-tools.ts # Messaging (20 tools)
│   │   ├── blog-tools.ts      # Blog management (7 tools)
│   │   ├── opportunity-tools.ts # Sales pipeline (10 tools)
│   │   ├── calendar-tools.ts  # Appointments (14 tools)
│   │   ├── email-tools.ts     # Email marketing (5 tools)
│   │   ├── location-tools.ts  # Location management (24 tools)
│   │   ├── email-isv-tools.ts # Email ISV / domains (9 tools)
│   │   ├── social-media-tools.ts # Social media (17 tools)
│   │   ├── media-tools.ts     # Media library (3 tools)
│   │   ├── object-tools.ts    # Custom objects (9 tools)
│   │   ├── association-tools.ts # Associations (10 tools)
│   │   ├── custom-field-v2-tools.ts # Custom fields (8 tools)
│   │   ├── workflow-tools.ts  # Workflows (8 tools)
│   │   ├── survey-tools.ts    # Surveys (9 tools)
│   │   ├── store-tools.ts     # Store management (18 tools)
│   │   ├── products-tools.ts  # Products (10 tools)
│   │   ├── payments-tools.ts  # Payments (20 tools)
│   │   ├── invoices-tools.ts  # Invoices & billing (39 tools)
│   │   ├── phone-system-tools.ts # Phone system (15 tools)
│   │   └── agent-studio-tools.ts # Agent Studio API (8 tools) — NEW
│   ├── 📁 types/              # TypeScript definitions
│   │   └── ghl-types.ts       # Comprehensive type definitions
│   ├── 📁 utils/              # Utility functions
│   ├── server.ts              # CLI MCP server (Claude Desktop)
│   └── http-server.ts         # HTTP MCP server (Web apps)
├── 📁 tests/                  # Comprehensive test suite
│   ├── 📁 clients/            # API client tests
│   ├── 📁 tools/              # Tool implementation tests
│   └── 📁 mocks/              # Test mocks and fixtures
├── 📁 api/                    # Vercel API routes
├── 📁 docker/                 # Docker configurations
├── 📁 dist/                   # Compiled JavaScript (auto-generated)
├── 📄 Documentation files
│   ├── DEPLOYMENT.md          # Deployment guides
│   ├── CLAUDE-DESKTOP-DEPLOYMENT-PLAN.md
│   ├── VERCEL-DEPLOYMENT.md
│   ├── CLOUD-DEPLOYMENT.md
│   └── PROJECT-COMPLETION.md
├── 📄 Configuration files
│   ├── package.json           # Dependencies and scripts
│   ├── tsconfig.json          # TypeScript configuration
│   ├── jest.config.js         # Testing configuration
│   ├── vercel.json            # Vercel deployment config
│   ├── railway.json           # Railway deployment config
│   ├── Dockerfile             # Docker containerization
│   ├── Procfile               # Process configuration
│   └── cursor-mcp-config.json # MCP configuration
└── 📄 README.md               # This comprehensive guide
```

## 🔐 Security & Best Practices

### Environment Security
- ✅ Never commit API keys to version control
- ✅ Use environment variables for all sensitive data
- ✅ Implement proper CORS policies
- ✅ Regular API key rotation
- ✅ Monitor API usage and rate limits

### Production Considerations
- ✅ Implement proper error handling and logging
- ✅ Set up monitoring and alerting
- ✅ Use HTTPS for all deployments
- ✅ Implement request rate limiting
- ✅ Regular security updates

### API Rate Limiting
- GoHighLevel API has rate limits
- Implement exponential backoff
- Cache frequently requested data
- Use batch operations when available

## 🚨 Troubleshooting Guide

### Common Issues & Solutions

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist/
npm install
npm run build
```

**API Connection Issues:**
```bash
# Test API connectivity (use your Private Integrations API key)
curl -H "Authorization: Bearer YOUR_PRIVATE_INTEGRATIONS_API_KEY" \
     https://services.leadconnectorhq.com/locations/YOUR_LOCATION_ID
```

**Common API Issues:**
- ✅ Using Private Integrations API key (not regular API key)
- ✅ Required scopes enabled in Private Integration
- ✅ Location ID matches your GHL account
- ✅ Environment variables properly set

**Claude Desktop Integration:**
1. Verify MCP configuration syntax
2. Check file paths are absolute
3. Ensure environment variables are set
4. Restart Claude Desktop after changes

**Memory Issues:**
```bash
# Increase Node.js memory limit
node --max-old-space-size=8192 dist/server.js
```

**CORS Errors:**
- Configure CORS_ORIGINS environment variable
- Ensure proper HTTP headers
- Check domain whitelist

### Performance Optimization
- Enable response caching for read operations
- Use pagination for large data sets
- Implement connection pooling
- Monitor memory usage and optimize accordingly

## 📊 Technical Specifications

### System Requirements
- **Runtime**: Node.js 18+ (Latest LTS recommended)
- **Memory**: Minimum 512MB RAM, Recommended 1GB+
- **Storage**: 100MB for application, additional for logs
- **Network**: Stable internet connection for API calls

### Technology Stack
- **Backend**: Node.js + TypeScript
- **HTTP Framework**: Express.js 5.x
- **MCP SDK**: @modelcontextprotocol/sdk ^1.12.1
- **HTTP Client**: Axios ^1.9.0
- **Testing**: Jest with TypeScript support
- **Build System**: TypeScript compiler

### API Integration
- **GoHighLevel API**: v2021-07-28 (Contacts), v2021-04-15 (Conversations)
- **Authentication**: Bearer token
- **Rate Limiting**: Respects GHL API limits
- **Error Handling**: Comprehensive error recovery

### Performance Metrics
- **Cold Start**: < 2 seconds
- **API Response**: < 500ms average
- **Memory Usage**: ~50-100MB base
- **Tool Execution**: < 1 second average

## 🤝 Contributing

We welcome contributions from the GoHighLevel community!

### Development Workflow
```bash
# Fork and clone the repository
git clone https://github.com/your-fork/GoHighLevel-MCP.git

# Create feature branch
git checkout -b feature/amazing-new-tool

# Make your changes with tests
npm test

# Commit and push
git commit -m "Add amazing new tool for [specific functionality]"
git push origin feature/amazing-new-tool

# Open Pull Request with detailed description
```

### Contribution Guidelines
- ✅ Add comprehensive tests for new tools
- ✅ Follow TypeScript best practices
- ✅ Update documentation for new features
- ✅ Ensure all linting passes
- ✅ Include examples in PR description

### Code Standards
- Use TypeScript strict mode
- Follow existing naming conventions
- Add JSDoc comments for all public methods
- Implement proper error handling
- Include integration tests

## 🔗 Signet Integration

[Signet](https://signet.sh) is a portable agent identity system that lets you store API credentials securely and share MCP server configurations across environments (Claude Code, Cursor, OpenCode, etc.).

### Store your GHL credentials in Signet

```bash
signet secret put GHL_API_KEY
signet secret put GHL_LOCATION_ID
```

### Retrieve at runtime

```bash
# Inject secrets into the MCP server at startup:
GHL_API_KEY=$(signet secret get GHL_API_KEY) \
GHL_LOCATION_ID=$(signet secret get GHL_LOCATION_ID) \
node /path/to/dist/server.js
```

### Claude Desktop with Signet secrets

```json
{
  "mcpServers": {
    "ghl-mcp-server": {
      "command": "sh",
      "args": ["-c", "GHL_API_KEY=$(signet secret get GHL_API_KEY) GHL_LOCATION_ID=$(signet secret get GHL_LOCATION_ID) GHL_BASE_URL=https://services.leadconnectorhq.com node /absolute/path/to/dist/server.js"],
      "env": {}
    }
  }
}
```

### Signet agent.yaml snippet

```yaml
mcp_servers:
  ghl-mcp-server:
    command: node
    args: ["/absolute/path/to/Go-High-Level-MCP-2026-Complete/dist/server.js"]
    env:
      GHL_API_KEY: "${signet:GHL_API_KEY}"
      GHL_BASE_URL: "https://services.leadconnectorhq.com"
      GHL_LOCATION_ID: "${signet:GHL_LOCATION_ID}"
```

### Remember your MCP config with Signet memory

```bash
signet remember "GHL MCP server at /path/to/Go-High-Level-MCP-2026-Complete" -t mcp,ghl,crm
signet recall "GHL MCP"
```

For a full guide, see [SIGNET.md](SIGNET.md).

---

## 🚀 Managed Service

**Don't want to manage this yourself?**

- ✅ **Zero setup** — We handle everything
- ✅ **Always up-to-date** — Latest features and security patches
- ✅ **Priority support** — Real humans who know GHL and AI
- ✅ **Enterprise-grade reliability** — 99.9% uptime, monitored 24/7

**Need a hosted version? Contact [jake@localbosses.org](mailto:jake@localbosses.org)**

Or [join the waitlist](https://mcp.localbosses.org) for our fully managed solution.

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Community & Support

### Documentation
- 📖 [Complete API Documentation](docs/)
- 🎥 [Video Tutorials](docs/videos/)
- 📋 [Tool Reference Guide](docs/tools/)
- 🔧 [Deployment Guides](docs/deployment/)

### Getting Help
- **Issues**: [GitHub Issues](https://github.com/mastanley13/GoHighLevel-MCP/issues)
- **Discussions**: [GitHub Discussions](https://github.com/mastanley13/GoHighLevel-MCP/discussions)
- **API Reference**: [GoHighLevel API Docs](https://highlevel.stoplight.io/)
- **MCP Protocol**: [Model Context Protocol](https://modelcontextprotocol.io/)

### Community Resources
- 💬 Join our Discord community
- 📺 Subscribe to our YouTube channel
- 📰 Follow our development blog
- 🐦 Follow us on Twitter for updates

## 🎉 Success Metrics

This comprehensive MCP server delivers:

### ✅ **520+ Operational Tools** across 41 categories
### ✅ **Real-time GoHighLevel Integration** with full API coverage
### ✅ **Production-Ready Deployment** on multiple platforms
### ✅ **Enterprise-Grade Architecture** with comprehensive error handling
### ✅ **Full TypeScript Support** with complete type definitions
### ✅ **Extensive Test Coverage** ensuring reliability
### ✅ **Multi-Platform Deployment** (Vercel, Railway, Render, Docker)
### ✅ **Claude Desktop Integration** with MCP protocol compliance
### ✅ **Community-Driven Development** with comprehensive documentation

---

## 🚀 **Ready to revolutionize your GoHighLevel automation?**

**Deploy now and unlock the full potential of AI-powered CRM management!**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mastanley13/GoHighLevel-MCP) [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/mastanley13/GoHighLevel-MCP)

---

## 💝 Support This Project

This project represents hundreds of hours of development work to help the GoHighLevel community. If it's saving you time and helping your business, consider supporting its continued development:

### 🎁 Ways to Support:
- **⭐ Star this repo** - Helps others discover the project
- **🍕 Buy me a pizza** - [Donate via Stripe](https://buy.stripe.com/28E14o1hT7JAfstfvqdZ60y) 
- **🐛 Report bugs** - Help make it better for everyone
- **💡 Suggest features** - Share your ideas for improvements
- **🤝 Contribute code** - Pull requests are always welcome!

### 🏆 Recognition:
- Contributors will be listed in the project
- Significant contributions may get special recognition
- This project is community-driven and community-supported

**Every contribution, big or small, helps keep this project alive and growing!** 🚀

---

*Made with ❤️ for the GoHighLevel community by developers who understand the power of automation.* 
