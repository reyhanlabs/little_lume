# 📋 LittleLume Worksheet Generator

A simple, efficient system for generating customized English worksheets for students across grades 1-6.

---

## 🎯 Quick Start

1. **Open `index.html`** in your browser
2. **Select a Grade** (1-6)
3. **Select a Skill** (Listening, Reading, Writing, Speaking)
4. **Choose a Chapter**
5. **Customize** (question count, difficulty, type)
6. **Generate** and Print/Download

---

## 📁 Folder Structure

```
worksheet/
├── index.html          ← Main portal (start here)
├── viewer.html         ← Worksheet preview & print
├── README.md           ← This file
│
├── bank/
│   ├── grade1.json     ← Question bank for Grade 1
│   ├── grade2.json     ← Question bank for Grade 2
│   └── ...grade6.json  ← Question bank for Grade 6
│
└── generated/          ← (Future) Pre-generated static files
    ├── grade1/
    ├── grade2/
    └── ...
```

---

## 🚀 How It Works

### **Portal (index.html)**
User-friendly interface for:
- ✅ Selecting grade & skill
- ✅ Choosing chapter
- ✅ Customizing options
- ✅ Generating worksheets

### **Viewer (viewer.html)**
Displays and manages generated worksheets:
- ✅ Print-ready format
- ✅ Download as HTML
- ✅ Clean, professional design
- ✅ Mobile responsive

### **Bank (bank/*.json)**
Question database for each grade:
- ✅ Organized by chapter
- ✅ Categorized by skill
- ✅ Includes difficulty levels
- ✅ Multiple question types (MC, FITB)

---

## 📝 JSON Structure (Bank Format)

Each grade file (`grade1.json`, `grade2.json`, etc.) contains:

```json
{
  "grade": 1,
  "title": "Grade 1 - Numbers & Counting",
  "chapters": [
    {
      "chapter": 1,
      "title": "Numbers & Counting",
      "listening": {
        "partA": [
          {
            "id": "L1-001",
            "question": "How many apples are there?",
            "options": ["One", "Two", "Three", "Four"],
            "answer": "B",
            "difficulty": "easy"
          },
          ...
        ],
        "partB": [
          {
            "id": "L1-B01",
            "question": "There are [BLANK] apples.",
            "answer": "two",
            "difficulty": "easy"
          },
          ...
        ]
      },
      "reading": { ... },
      "writing": { ... },
      "speaking": { ... }
    }
  ]
}
```

### **Question Types:**

**Multiple Choice (MC):**
```json
{
  "id": "L1-001",
  "question": "How many apples are there?",
  "options": ["One", "Two", "Three", "Four"],
  "answer": "B",
  "difficulty": "easy"
}
```

**Fill in the Blank (FITB):**
```json
{
  "id": "L1-B01",
  "question": "There are [BLANK] apples.",
  "answer": "two",
  "difficulty": "easy"
}
```

---

## ⚙️ Features

### ✅ Currently Working
- Grade selection (1-6)
- Skill selection (Listening, Reading, Writing, Speaking)
- Chapter selection
- Question count customization (5-20)
- Difficulty filtering (easy, medium, hard, mixed)
- Question type filtering (MC, FITB, mixed)
- Worksheet preview
- Print functionality
- Download as HTML

### 🔄 In Development
- Pre-generated static files (for quick access)
- PDF download
- Answer keys
- Teacher dashboard
- Student progress tracking

---

## 📊 Current Bank Status

| Grade | Chapters | Status |
|-------|----------|--------|
| 1 | Numbers & Counting, Colors | ✅ Complete |
| 2 | (Pending) | ⏳ TODO |
| 3 | (Pending) | ⏳ TODO |
| 4 | (Pending) | ⏳ TODO |
| 5 | (Pending) | ⏳ TODO |
| 6 | (Pending) | ⏳ TODO |

---

## 🔧 How to Add More Worksheets

### **Option 1: Add to Existing Grade**

Edit `bank/grade1.json` and add a new chapter:

```json
{
  "chapter": 3,
  "title": "Family",
  "listening": {
    "partA": [ /* 6 MC questions */ ],
    "partB": [ /* 6 FITB questions */ ]
  },
  "reading": { ... },
  "writing": { ... },
  "speaking": { ... }
}
```

### **Option 2: Create New Grade**

1. Create `bank/grade2.json`
2. Copy the structure from `grade1.json`
3. Fill in your questions

---

## 🎯 Usage Workflow

### **For Teachers:**

```
1. Open index.html
   ↓
2. Select: Grade 2 → Reading → Chapter 1
   ↓
3. Customize: 15 questions, Medium difficulty, Mixed types
   ↓
4. Generate → Preview → Print
   ↓
5. Distribute to students ✅
```

### **For Parents:**

```
1. Open index.html
   ↓
2. Select: Grade 1 → Writing → Chapter 2
   ↓
3. Generate worksheet
   ↓
4. Download or Print
   ↓
5. Practice with child ✅
```

---

## 📋 Customization Options

| Option | Values | Default |
|--------|--------|---------|
| **Grade** | 1, 2, 3, 4, 5, 6 | - |
| **Skill** | Listening, Reading, Writing, Speaking | - |
| **Chapter** | Depends on grade | - |
| **Question Count** | 5 - 20 | 10 |
| **Difficulty** | Easy, Medium, Hard, Mixed | Mixed |
| **Question Type** | MC, FITB, Mixed | Mixed |

---

## 🖨️ Print Features

The worksheet is print-optimized:
- ✅ Clean, professional layout
- ✅ Proper page breaks
- ✅ Readable on A4 paper
- ✅ Answer blanks for writing
- ✅ Removes UI elements

**To Print:**
1. Generate worksheet
2. Click "🖨️ Print" button
3. Choose printer & options
4. Print ✅

---

## 💾 Download

**To Download as HTML:**
1. Generate worksheet
2. Click "💾 Download" button
3. File saved as: `worksheet-grade1-reading-chapter1.html`
4. Open in any browser later

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **404 Error loading grade data** | Check that `bank/grade1.json` exists |
| **"Choose a grade first" error** | Click a grade button before selecting skill |
| **Blank worksheet** | Ensure chapter has questions in JSON |
| **Print issues** | Use print preview to see layout first |

---

## 🚀 Next Steps (Future Development)

1. **Auto-Generator Script**
   - Generate static HTML files from JSON
   - Creates: `generated/grade1/chapter1/listening.html`

2. **PDF Export**
   - Direct PDF download without third-party tools

3. **Answer Keys**
   - Toggle to show correct answers
   - Print-safe (hidden in print mode)

4. **Difficulty Markers**
   - Show difficulty icons in preview
   - Help teachers assess student level

5. **Question Analytics**
   - Track which questions are used most
   - Student performance data

6. **Template Customization**
   - Custom logos/headers
   - Branding options
   - Color themes

---

## 📞 Support

- 📧 Contact: support@littlelume.com
- 🐛 Report bugs: Create an issue
- 💡 Suggest features: Submit a feature request

---

## 📜 License

LittleLume Worksheets © 2026. All rights reserved.

---

## 🎓 Learning Objectives

Each worksheet is designed to:
- ✅ Reinforce classroom learning
- ✅ Practice specific skills
- ✅ Build confidence
- ✅ Prepare for assessments
- ✅ Support Cambridge curriculum alignment

---

**Happy teaching! 📚✨**
