## 📦 Deliverables

### ✅ Working Prototype
Live demo of the pagination-enabled editor:

🔗 https://opensphere-assign.vercel.app/

---

### ✅ GitHub Repository
The repository includes:
- Clean project structure
- Clear setup and run instructions
- Well-separated editor, pagination, and layout logic
- Readable and interview-ready code

---

### 🧠 Pagination Approach

Pagination is implemented using a **visual, DOM-based approach** rather than inserting page-break nodes into the document schema.

**How it works:**
1. The Tiptap editor renders content normally.
2. The rendered content height is measured from the DOM.
3. Page count is calculated based on A4 page height with standard margins.
4. Content is visually segmented into page containers that resemble printed pages.

This approach keeps the ProseMirror document model clean while ensuring that the on-screen layout matches printed output.

---

### ⚠️ Trade-offs & Limitations

- Pagination is visual, not semantic
- Very complex tables may require additional handling
- Header and footer repetition is not implemented yet

These trade-offs were chosen to prioritize editor stability, clean architecture, and print accuracy.

---

### 🔮 Improvements With More Time

- Header and footer support
- Manual page breaks
- Improved table pagination across pages
- Export to PDF/DOCX with identical layout
- Performance optimizations for very long documents

---

### 🎤 Interview Preparation

For the interview discussion, I am prepared to:
- Explain the pagination strategy step-by-step
- Walk through the codebase and design decisions
- Discuss trade-offs and alternative approaches
- Explain how this solution could be extended for production use

---
