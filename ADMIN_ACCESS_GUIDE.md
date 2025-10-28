# 👨‍💼 Admin Guide: Managing Private Repository Access

## 🎯 Quick Steps to Add Team Members

### 1. Invite Collaborators
```
🌐 Go to: https://github.com/4hannnn/web_desa_tanjung_rambutan/settings/access

📧 Invite Process:
1. Click "Invite a collaborator"
2. Enter GitHub username or email
3. Choose permission level
4. Click "Add [username] to this repository"
```

### 2. Permission Levels Guide

#### **Write Access** (Recommended for Developers)
✅ **Can do:**
- Clone private repository
- Create branches and pull requests  
- Push to branches (except main/develop)
- Comment on issues and PRs
- Merge PRs (if branch protection allows)

❌ **Cannot do:**
- Delete repository
- Manage repository settings
- Force push to protected branches
- Manage team access

#### **Admin Access** (For Lead/Senior)
✅ **Full repository control**
- All Write permissions PLUS:
- Manage repository settings
- Add/remove collaborators
- Delete repository
- Manage branch protection rules

### 3. Recommended Team Structure

```
Repository: web_desa_tanjung_rambutan (Private)
├── Admin: 4hannnn (Owner)
├── Write: frontend_dev_1 (Write Access)
├── Write: frontend_dev_2 (Write Access)
└── Write: backend_developer (Write Access)
```

## 📋 Invitation Checklist

### Before Inviting:
- [ ] Get GitHub usernames from team members
- [ ] Decide permission levels for each member
- [ ] Prepare welcome message with setup instructions

### After Inviting:
- [ ] Verify invitations were sent
- [ ] Share PRIVATE_ACCESS_GUIDE.md with team
- [ ] Help team members with SSH/token setup
- [ ] Test that everyone can clone successfully

## 💬 Invitation Message Template

```
Hi [Name],

You've been invited to collaborate on the "Website Desa Tanjung Rambutan" project!

📁 Repository: https://github.com/4hannnn/web_desa_tanjung_rambutan
🔐 Access Level: Write (you can push code and create PRs)

🚀 Next Steps:
1. Accept the GitHub invitation (check your email)
2. Follow the setup guide: PRIVATE_ACCESS_GUIDE.md
3. Clone the repository and start development
4. Join our daily standups at 9:00 AM

Need help with setup? Let me know!

Best regards,
[Your Name]
```

## 🔧 Managing Access

### View Current Collaborators:
```
Settings → Manage access → View all X collaborators
```

### Change Permissions:
```
1. Go to repository collaborators
2. Find team member name
3. Click permission dropdown
4. Select new permission level
```

### Remove Access:
```
1. Go to repository collaborators  
2. Find team member name
3. Click "Remove" button
4. Confirm removal
```

## 📊 Monitoring Team Access

### Check Activity:
- **Insights → Traffic** - Clone activity
- **Insights → Network** - Branch activity  
- **Pull Requests** - Team contributions
- **Issues** - Team discussions

### Security Audit:
- Monthly review of collaborators
- Remove inactive members
- Monitor unusual access patterns
- Update team permissions as needed

## 🚨 Emergency Access Management

### If Team Member Leaves:
1. **Immediately remove** from repository collaborators
2. **Revoke any Personal Access Tokens** they might have
3. **Change shared passwords** (if any)
4. **Review recent commits** for any security issues
5. **Update team documentation**

### If Repository Compromised:
1. **Change to Private** (if public)
2. **Remove all external collaborators**
3. **Audit recent activity**
4. **Reset all tokens and keys**
5. **Re-invite verified team members**

## 📈 Best Practices

### Team Onboarding:
- **Personal Welcome**: Don't just send GitHub invite
- **Guided Setup**: Help with SSH/token configuration
- **Documentation**: Ensure they have all guides
- **Test Access**: Verify they can clone and push

### Ongoing Management:
- **Regular Reviews**: Monthly collaborator audit
- **Clear Communication**: About permission changes
- **Documentation**: Keep team contact info updated
- **Backup Plans**: Alternative access methods

### Security Mindset:
- **Principle of Least Privilege**: Give minimum required access
- **Regular Rotation**: Update access credentials periodically
- **Activity Monitoring**: Watch for unusual patterns
- **Quick Response**: Fast action on security concerns

---

## 🤖 GitHub CLI Commands (for Admin)

```bash
# List collaborators
gh api repos/4hannnn/web_desa_tanjung_rambutan/collaborators

# Invite collaborator (requires GitHub CLI with admin access)
gh api repos/4hannnn/web_desa_tanjung_rambutan/collaborators/USERNAME \
  --method PUT \
  --field permission=push

# Check repository visibility
gh repo view 4hannnn/web_desa_tanjung_rambutan --json visibility

# List repository access
gh api repos/4hannnn/web_desa_tanjung_rambutan/collaborators \
  --jq '.[] | {login: .login, permissions: .permissions}'
```

---

**Effective team access management ensures smooth collaboration! 👥**

*Last updated: October 28, 2025*