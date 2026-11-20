# Structured Content & School Data Inventory (`data.md`) — Icon English School

## 1. Verified Core School Data (Extracted from Legacy Site)
This section contains the exact verified institutional details extracted from `https://iconenglishschool.in/contact.php` that must be preserved accurately across all pages:

```json
{
  "school": {
    "name": "Icon English School",
    "tagline": "Nurturing Excellence, Character & Holistic Learning",
    "location": {
      "plot": "Plot No. 37, Jyotinagar, Osmanpura Parisar",
      "landmark": "Behind Raka's Life Style Club",
      "city_modern": "Chhatrapati Sambhajinagar",
      "city_legacy": "Aurangabad",
      "pincode": "431005",
      "state": "Maharashtra",
      "country": "India",
      "full_address": "Plot No. 37, Jyotinagar, Osmanpura Parisar (Behind Raka's Life Style Club), Chhatrapati Sambhajinagar (Aurangabad) - 431005, Maharashtra, India"
    },
    "contact": {
      "primary_contact_person": "Shivkumar Niyogi",
      "mobile": "+91 9527749595",
      "mobile_raw": "9527749595",
      "landline": "0240-2344693",
      "email": "niyogi.kumar@gmail.com",
      "office_hours": "Monday – Saturday: 8:30 AM – 4:30 PM"
    }
  }
}
```

---

## 2. Site Navigation & Page Content Matrix

### 2.1 Global Navigation Items (7 Pages)
1. **Home** (`index.html`)
2. **About Us** (`about.html`)
3. **Admission** (`admission.html`)
4. **Facilities** (`facilities.html`)
5. **Gallery** (`gallery.html`)
6. **Management** (`management.html`)
7. **Contact Us** (`contact.html`)

---

### 2.2 Page-by-Page Structured Content Blueprint

#### Page 1: Home (`index.html`)
- **Hero Headline:** *"Shaping Confident Minds & Bright Futures at Icon English School"*
- **Hero Subtext:** *"A supportive, values-driven English medium learning environment in the heart of Jyotinagar, Osmanpura Parisar, Chhatrapati Sambhajinagar."*
- **Primary CTAs:** `"Apply for Admission"` (`admission.html`) & `"Schedule Campus Visit"` (`contact.html`)
- **Key Highlights Strip:**
  - Prime & Safe Location (Jyotinagar, Osmanpura Parisar)
  - Experienced & Caring Faculty
  - Activity-Based English Medium Curriculum
  - Holistic Sports, Arts & Cultural Development

#### Page 2: About Us (`about.html`)
- **Institutional Overview:** Dedicated to delivering quality English-medium education that balances academic rigor with moral values, discipline, and creative curiosity.
- **Vision Card:** *"To empower every student with strong foundational knowledge, critical thinking, and ethical character to thrive in a changing world."*
- **Mission Card:** *"To provide an inclusive, student-centered campus in Chhatrapati Sambhajinagar where experienced educators nurture individual potential."*
- **Core Pillars:** Academic Excellence, English Communication Fluency, Moral & Cultural Values, Safe Campus Environment.

#### Page 3: Admission (`admission.html`)
- **4-Step Admission Process:**
  1. **Online / Campus Inquiry:** Submit the admission inquiry form or visit the Jyotinagar campus office.
  2. **Campus Tour & Counseling:** Meet the academic coordinator and tour classrooms and facilities.
  3. **Document Verification:** Submit birth certificate, previous school report card/transfer certificate, and address proof.
  4. **Fee Confirmation & Enrollment:** Complete admission formalities to confirm seat allocation.
- **Required Documents List:** Birth Certificate, Previous Academic Progress Report, Transfer Certificate (for Grade 2 onwards), Aadhar Card copy (Student & Parents), 4 Passport-size Photographs.
- **Interactive Admission Inquiry Form Fields:** Student Full Name, Grade Applying For, Parent/Guardian Name, Mobile Number (`required`), Email Address, Message/Query.

#### Page 4: Facilities (`facilities.html`)
1. **Bright & Ventilated Classrooms:** Ergonomic seating and interactive teaching aids designed for focused learning.
2. **Computer & Digital Learning Lab:** Hands-on computer literacy and foundational IT skills for modern students.
3. **Science & Activity Lab:** Practical demonstrations encouraging scientific curiosity and experiential learning.
4. **School Library & Reading Corner:** Curated collection of storybooks, reference encyclopedias, and periodicals to build daily reading habits.
5. **Sports & Outdoor Recreation:** Structured physical education, games, and annual sports events for physical fitness and teamwork.
6. **Safe & Accessible Campus:** Centrally located in Jyotinagar, Osmanpura Parisar (Behind Raka's Life Style Club) with attentive staff supervision.

#### Page 5: Gallery (`gallery.html`)
- **Filter Categories:** `All`, `Campus & Classrooms`, `Academic & Labs`, `Cultural & Annual Events`, `Sports Day`
- **Gallery Items Schema:** `{ id, title, category, description, image_url, alt_text }`

#### Page 6: Management (`management.html`)
- **Leadership Directory:**
  - **Shivkumar Niyogi** — *Management & Administration Lead* (`Contact: 9527749595`)
  - **Principal's Desk** — *Academic Leadership Message* (Placeholder slot ready for Principal's photo & welcome note during final client handoff)
  - **Managing Committee** — *Governance & Student Welfare Board*

#### Page 7: Contact Us (`contact.html`)
- **Campus Address Card:** Plot No. 37, Jyotinagar, Osmanpura Parisar (Behind Raka's Life Style Club), Chhatrapati Sambhajinagar (Aurangabad) – 431005, Maharashtra, India
- **Direct Phone Lines:**
  - Mobile: `+91 9527749595` (Shivkumar Niyogi)
  - Landline: `0240-2344693`
- **Official Email:** `niyogi.kumar@gmail.com`
- **Query Form Fields (Preserving Legacy Fields + Modern Validation):**
  - `*Name` (Required)
  - `*E-mail` (Required)
  - `Phone` (Optional, validated if entered)
  - `*Enquiry` (Required)