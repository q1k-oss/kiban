# Force Publishing Methods & Override Documentation

This document explains all the ways to force, override, or control the automatic NPM publishing behavior in the GitHub Actions workflow.

## 🔥 Force Publishing Methods

### 1. **Manual Workflow Dispatch** (Strongest Override)
**Bypasses ALL automatic checks including security restrictions**

```bash
# Via GitHub UI:
# 1. Go to Actions tab
# 2. Select "Publish NPM Package" workflow
# 3. Click "Run workflow"
# 4. Set "Publish to NPM" to true
# 5. Choose version bump type (patch/minor/major/prerelease)
```

**When to use:**
- Emergency hotfixes
- Manual releases outside normal workflow
- Testing publishing process
- Overriding security restrictions

**What it bypasses:**
- ✅ Direct push restrictions (merge-only protection)
- ✅ File change detection
- ✅ Explicit no-publish keywords
- ✅ All automatic logic

---

### 2. **Version Tag Push** (Strong Override)
**Bypasses most checks but respects explicit no-publish**

```bash
# Create and push a version tag
git tag v1.2.3
git push origin v1.2.3

# Or create annotated tag with message
git tag -a v1.2.3 -m "Release v1.2.3"
git push origin v1.2.3
```

**When to use:**
- Official releases
- Semantic versioning workflow
- CI/CD integration
- GitHub release creation

**What it bypasses:**
- ✅ Direct push restrictions
- ✅ File change detection
- ✅ Merge-only protection
- ❌ Still respects explicit no-publish keywords

---

### 3. **Explicit Publish Keywords** (Medium Override)
**Forces publishing even with mixed file changes**

```bash
# Keywords that force publishing:
git commit -m "Update docs and fix component [publish]"
git commit -m "Mixed changes [release]"
git commit -m "Documentation update [publish]"
git commit -m "Website changes but need to publish component fix [release]"
```

**Keywords:**
- `[publish]`
- `[release]`

**When to use:**
- Mixed changes (website + components)
- Documentation updates that should trigger release
- Forcing publish when automatic detection fails

**What it bypasses:**
- ✅ File change detection (website-only restrictions)
- ❌ Still requires PR merge to main (security protection)
- ❌ Still respects explicit no-publish keywords

---

## 🚫 Force NO Publishing (Override Prevention)

### **Explicit No-Publish Keywords** (Highest Priority)
**Prevents publishing even when all conditions would normally trigger it**

```bash
# Keywords that prevent publishing:
git commit -m "Fix critical Button component bug [skip publish]"
git commit -m "Add new Card component [no publish]"  
git commit -m "Update package.json dependencies [skip npm]"
git commit -m "Component refactoring WIP [no release]"
git commit -m "Breaking changes - not ready [skip release]"
```

**Keywords:**
- `[skip publish]`
- `[no publish]`
- `[skip npm]`
- `[no release]`
- `[skip release]`

**When to use:**
- Work in progress (WIP) changes
- Breaking changes not ready for release
- Component refactoring in progress
- Dependencies updates that need testing
- Any time you want to prevent accidental publishing

**What it overrides:**
- ✅ Package file changes (normally auto-publish)
- ✅ Explicit publish keywords
- ✅ All automatic publishing logic
- ❌ Cannot override manual workflow dispatch
- ❌ Cannot override version tags (but will log warning)

---

## 📋 Priority Order (Highest to Lowest)

1. **🔥 Manual Workflow Dispatch** - Always wins
2. **🚫 Explicit No-Publish Keywords** - Blocks everything except manual
3. **🔒 Merge-Only Security Check** - Blocks direct pushes
4. **🏷️ Version Tag Push** - Strong override
5. **✅ Explicit Publish Keywords** - Medium override
6. **🤖 Automatic Package Detection** - Default behavior
7. **⏭️ Website-Only Changes** - Default skip

---

## 🛠️ Practical Examples

### Emergency Hotfix (Bypass Everything)
```bash
# Use manual workflow dispatch
# This is the only way to publish a direct push to main
```

### Work in Progress Component
```bash
git add components/NewComponent.tsx
git commit -m "WIP: Adding new component structure [skip publish]"
git push origin feature-branch  # Won't publish beta either
```

### Force Publish Mixed Changes
```bash
git add app/docs.tsx components/Button.tsx
git commit -m "Update docs and fix button hover state [publish]"
# This will publish even though it has website changes
```

### Official Release
```bash
# Update version in package.json first, then:
git tag v1.5.0
git push origin v1.5.0
# This bypasses all checks and creates a GitHub release
```

### Prevent Accidental Publish During Dependencies Update
```bash
git add package.json package-lock.json
git commit -m "Update React to v19 [skip publish]"
# This prevents publishing even though package.json changed
```

### Safe Development Workflow
```bash
# On feature branch - automatic beta publishing
git commit -m "Add new Card component with tests"
git push origin feature/card-component
# This creates a beta version for testing

# When ready for main
git commit -m "Card component ready for release"
# PR merge to main will auto-publish
```

---

## 🔍 How to Check What Will Happen

### Check File Changes
```bash
# See what files changed in your commit
git diff --name-only HEAD~1

# Check if changes are package or website related
# Package files: components/, internal/, gulpfile.js, package.json, etc.
# Website files: app/, content/, public/, styles/, etc.
```

### Dry Run Test
```bash
# Test what npm publish would do
npm run publish:dry
```

### Workflow Logs
The workflow logs will show exactly why publishing was triggered or skipped:
- `✅ Package-related changes detected`
- `⏭️ Only website changes detected, skipping package publish`
- `🚫 Explicit no-publish intent found in commit message`
- `⚠️ Direct push to main detected - only PR merges trigger publishing`

---

## ⚠️ Important Notes

1. **Security**: Manual workflow dispatch is the ONLY way to publish direct pushes to main
2. **Testing**: Always use `[skip publish]` for WIP component changes
3. **Releases**: Use version tags for official releases
4. **Mixed Changes**: Use `[publish]` when you have both website and component changes
5. **Emergency**: Manual dispatch bypasses ALL safety checks - use carefully

## 🔗 Related Files

- `.github/workflows/publish.yml` - The actual workflow implementation
- `package.json` - NPM package configuration
- `PUBLISH_SETUP.md` - Initial setup documentation 