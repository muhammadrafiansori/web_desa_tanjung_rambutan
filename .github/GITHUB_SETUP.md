# GitHub Project Setup Guide

## 🚀 Setting Up GitHub Projects (Project V2)

### 1. Create New Project
1. Go to your repository → Projects tab
2. Click "New Project"
3. Choose "Table" view
4. Name: "Desa Tanjung Rambutan Development"

### 2. Configure Project Views

#### 📋 Board View (Kanban)
**Columns:**
- **📝 Backlog** - New issues, not yet prioritized
- **🎯 Sprint Ready** - Prioritized and ready for development  
- **🔄 In Progress** - Currently being worked on
- **👀 In Review** - Pull request created, needs review
- **✅ Done** - Completed and merged
- **🚀 Released** - Deployed to production

#### 📊 Table View (Detailed)
**Custom Fields:**
- **Priority**: High, Medium, Low
- **Component**: Frontend, Backend, Design, DevOps
- **Estimate**: 1, 2, 3, 5, 8 (story points)
- **Sprint**: Sprint 1, Sprint 2, Sprint 3...
- **Assignee**: Team member responsible
- **Labels**: bug, feature, task, documentation

#### 📈 Timeline View (Roadmap)
- Visualize sprint timelines
- Track milestone progress
- Identify dependencies

### 3. Automation Rules

#### Auto-move Cards:
```yaml
# When PR is created → Move to "In Review"
when: pull_request.opened
then: move_to_column("In Review")

# When PR is merged → Move to "Done"  
when: pull_request.merged
then: move_to_column("Done")

# When issue is closed → Move to "Done"
when: issues.closed
then: move_to_column("Done")
```

### 4. Labels Strategy

#### Type Labels:
- 🐛 `bug` - Something isn't working
- ✨ `enhancement` - New feature or request
- 📋 `task` - General development task
- 📚 `documentation` - Improvements or additions to docs
- 🎨 `ui/ux` - User interface and experience

#### Priority Labels:
- 🔴 `priority: high` - Critical, must be done this sprint
- 🟡 `priority: medium` - Important, should be done soon
- 🟢 `priority: low` - Nice to have, can wait

#### Component Labels:
- ⚛️ `frontend` - React/Tailwind components
- 🔧 `backend` - WordPress/PHP development
- 🎨 `design` - UI/UX design work
- 🚀 `devops` - Deployment and infrastructure

#### Status Labels:
- 🔍 `needs-triage` - Needs to be reviewed and prioritized
- 💭 `needs-discussion` - Requires team discussion
- 🔄 `in-progress` - Currently being worked on
- 👀 `needs-review` - Ready for code review
- ⏳ `blocked` - Cannot proceed due to dependency

### 5. Milestone Planning

#### Sprint Milestones:
```
Sprint 1 (Week 1-2): Foundation Setup
- Component library structure
- API service layer  
- WordPress configuration
- Basic routing

Sprint 2 (Week 3-4): Core Features
- Homepage components
- News system (Frontend + Backend)
- Navigation enhancement
- Mobile responsiveness

Sprint 3 (Week 5-6): Content Management  
- Admin dashboard
- Content CRUD operations
- Image gallery system
- SEO optimization
```

### 6. Issue Templates Usage

#### Creating New Issues:
1. Go to Issues → New Issue
2. Choose appropriate template:
   - **Bug Report** - For bugs and errors
   - **Feature Request** - For new features
   - **Task** - For general development work

#### Issue Workflow:
```
1. Create Issue → Auto-labeled "needs-triage"
2. Team Discussion → Add to project, set priority
3. Sprint Planning → Assign to sprint milestone
4. Development → Move to "In Progress"
5. PR Created → Move to "In Review"
6. PR Merged → Move to "Done"
7. Deployed → Move to "Released"
```

## 📋 Daily Workflow for Team

### Morning Standup (9:00 AM):
1. Open GitHub Project board
2. Review "In Progress" column
3. Each member updates status:
   - Yesterday's completed work
   - Today's planned work  
   - Any blockers

### During Development:
1. **Pick up task** from "Sprint Ready"
2. **Move to "In Progress"**
3. **Create feature branch**
4. **Regular commits** with clear messages
5. **Update issue** with progress comments

### End of Day:
1. **Push code** to feature branch
2. **Update issue status**
3. **Create PR** if feature complete
4. **Review team PRs**

## 🔧 GitHub CLI Commands

### Setup:
```bash
# Install GitHub CLI
# Windows: winget install GitHub.cli
# Mac: brew install gh

# Login
gh auth login

# Clone repository
gh repo clone username/Web_Desa_TanjungRambutan
```

### Daily Commands:
```bash
# View project status
gh project list

# Create new issue
gh issue create --title "[FE] Add responsive navbar" --body "Description..."

# Create PR
gh pr create --title "[FE] Responsive navbar component" --body "Fixes #123"

# Review PRs
gh pr list
gh pr review 42 --approve
```

## 🎯 Success Metrics

### Weekly Review:
- **Velocity**: Story points completed vs planned
- **Cycle Time**: Time from "In Progress" to "Done"
- **PR Review Time**: Time from creation to merge
- **Bug Rate**: Bugs found vs features delivered

### Tools for Tracking:
- GitHub Insights
- Project progress charts
- Milestone completion rates
- Issue close rates

## 🤝 Team Communication

### GitHub Discussions:
Use for architectural decisions, feature discussions, and knowledge sharing.

### Code Review Guidelines:
```markdown
### PR Review Checklist:
- [ ] Code follows project standards
- [ ] Tests included (if applicable)
- [ ] Documentation updated
- [ ] No console errors
- [ ] Mobile responsive (for UI changes)
- [ ] Performance impact considered
```

---

**Ready to collaborate efficiently with GitHub! 🚀**