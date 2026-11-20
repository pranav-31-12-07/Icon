/**
 * Icon English School - Structured Data Inventory
 * Verified institutional data, facilities, gallery items, leadership, and FAQs
 */

window.IESData = {
  school: {
    name: "Icon English School",
    tagline: "Nurturing Excellence, Character & Holistic Learning",
    affiliation: "Recognized English Medium School (State Board Curriculum)",
    location: {
      plot: "37, Sahakar Nagar",
      area: "New Usmanpura",
      cityModern: "Chhatrapati Sambhajinagar",
      cityLegacy: "Aurangabad",
      pincode: "431005",
      state: "Maharashtra",
      country: "India",
      fullAddress: "37, Sahakar Nagar, New Usmanpura, Chhatrapati Sambhajinagar, Maharashtra 431005",
      mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=37,+Sahakar+Nagar,+New+Usmanpura,+Chhatrapati+Sambhajinagar,+Maharashtra+431005"
    },
    contact: {
      primaryPerson: "Shivkumar Niyogi",
      mobile: "+91 9527749595",
      mobileRaw: "9527749595",
      landline: "0240-2344693",
      email: "niyogi.kumar@gmail.com",
      whatsappNumber: "919527749595",
      officeHours: "Monday – Saturday: 8:30 AM – 4:30 PM",
      mapUrl: "https://maps.google.com/maps?q=37,+Sahakar+Nagar,+New+Usmanpura,+Chhatrapati+Sambhajinagar,+Maharashtra+431005&t=&z=16&ie=UTF8&iwloc=B&output=embed",
      mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=37,+Sahakar+Nagar,+New+Usmanpura,+Chhatrapati+Sambhajinagar,+Maharashtra+431005"
    },
    stats: [
      { id: "years", count: 15, suffix: "+", label: "Years of Academic Excellence" },
      { id: "students", count: 1200, suffix: "+", label: "Students Guided" },
      { id: "faculty", count: 35, suffix: "+", label: "Experienced & Caring Teachers" },
      { id: "passrate", count: 100, suffix: "%", label: "Academic Success Rate" }
    ]
  },

  facilities: [
    {
      id: "smart-classrooms",
      title: "Smart & Well-Ventilated Classrooms",
      category: "Academic",
      icon: "chalkboard",
      shortDesc: "Ergonomic seating with modern digital visual aids ensuring high engagement and interactive English-medium learning.",
      details: "Our classrooms are architected to maximize natural light and cross ventilation. Each room is equipped with multi-media visual presentation systems that help students grasp complex concepts through audio-visual demonstrations.",
      features: ["Interactive teaching screens", "Ergonomic age-appropriate furniture", "Safe non-toxic materials", "Low student-to-teacher ratio (25:1)"]
    },
    {
      id: "computer-lab",
      title: "Modern Computer & Digital Lab",
      category: "Technology",
      icon: "computer",
      shortDesc: "High-speed networked computer workstations fostering digital literacy, safe internet skills, and foundational coding.",
      details: "In today's digital era, technological fluency begins early. Our computer lab provides dedicated individual terminal access under certified instructor supervision, covering fundamentals of computing, office productivity, and logical problem solving.",
      features: ["Individual high-speed workstations", "Licensed educational software", "Child-safe content-filtered internet", "Foundational coding & logic curriculum"]
    },
    {
      id: "science-lab",
      title: "Experiential Science Activity Lab",
      category: "Science",
      icon: "flask",
      shortDesc: "Safe, hands-on scientific apparatus allowing young minds to explore physics, chemistry, and biology through real discovery.",
      details: "We believe science is best learned by doing. Our activity-based lab enables students to perform guided experiments, understand biological specimens, and observe natural phenomena with rigorous safety protocols in place.",
      features: ["Dedicated experiment workstations", "High-power optical microscopes", "Safety eyewash and fire retardants", "Curriculum-aligned practical models"]
    },
    {
      id: "library",
      title: "Curated Knowledge Library & Reading Corner",
      category: "Resource",
      icon: "book",
      shortDesc: "Extensive collection of literary classics, illustrated storybooks, encyclopedias, and periodicals building daily reading habits.",
      details: "A peaceful sanctuary dedicated to igniting the imagination. Our reading room features both English literature and regional knowledge archives, encouraging students to develop vocabulary, critical comprehension, and independent research habits.",
      features: ["Over 3,000+ curated volumes", "Special young reader picture-book bay", "Quiet study zones & group discussion tables", "Weekly reading and storytelling hours"]
    },
    {
      id: "sports-recreation",
      title: "Sports & Physical Recreation",
      category: "Fitness",
      icon: "football",
      shortDesc: "Structured physical education, athletics, yoga sessions, and outdoor games developing teamwork and physical stamina.",
      details: "Physical wellness is foundational to academic success. Our sports mentors train students in athletics, badminton, carrom, chess, cricket, and traditional Indian games, culminating in the spirited Annual Sports Meet.",
      features: ["Trained physical education instructors", "Multi-sport activity grounds", "Indoor games (Chess, Carrom, Table Tennis)", "Annual inter-house athletic meets"]
    },
    {
      id: "safety-transport",
      title: "Centrally Located Safe Campus & Transport",
      category: "Safety",
      icon: "shield",
      shortDesc: "Prime Jyotinagar location with 24x7 CCTV surveillance, vigilant security personnel, and trusted student transit options.",
      details: "Located behind Raka's Life Style Club in peaceful Osmanpura Parisar, the campus is easily accessible from all key residential nodes in Chhatrapati Sambhajinagar while remaining secluded from chaotic traffic.",
      features: ["Comprehensive CCTV coverage across gates & corridors", "Strict visitor verification protocol", "Dedicated first-aid infirmary", "Safe, monitored student transit support"]
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Annual Cultural Day Performances",
      category: "cultural",
      categoryLabel: "Cultural & Events",
      caption: "Students showcasing India's rich cultural heritage through classical dance, drama, and musical presentations.",
      image: "assets/images/gallery-cultural.svg"
    },
    {
      id: 2,
      title: "Interactive Smart Classroom Session",
      category: "academic",
      categoryLabel: "Academics & Labs",
      caption: "Engaged students actively participating in multimedia-led mathematics and English grammar workshops.",
      image: "assets/images/gallery-classroom.svg"
    },
    {
      id: 3,
      title: "Science & Innovation Fair Demonstrations",
      category: "academic",
      categoryLabel: "Academics & Labs",
      caption: "Budding innovators explaining working models of renewable energy, water filtration, and robotics.",
      image: "assets/images/gallery-science.svg"
    },
    {
      id: 4,
      title: "Annual Sports Meet & Athletic Relay",
      category: "sports",
      categoryLabel: "Sports Day",
      caption: "Spirited track and field competitions fostering sportsmanship, agility, and teamwork among houses.",
      image: "assets/images/gallery-sports.svg"
    },
    {
      id: 5,
      title: "Hands-on Computing & Digital Literacy",
      category: "academic",
      categoryLabel: "Academics & Labs",
      caption: "Young learners developing keyboard proficiency, typing fluency, and foundational logic in the computer lab.",
      image: "assets/images/gallery-computer.svg"
    },
    {
      id: 6,
      title: "School Library Reading Week Celebration",
      category: "campus",
      categoryLabel: "Campus & Life",
      caption: "Immersive book reading circles and storytelling sessions cultivating a lifelong appreciation for literature.",
      image: "assets/images/gallery-library.svg"
    },
    {
      id: 7,
      title: "Republic Day & Independence Day Honors",
      category: "cultural",
      categoryLabel: "Cultural & Events",
      caption: "Patriotic parade, flag hoisting ceremony, and student speeches honoring national unity and constitutional values.",
      image: "assets/images/gallery-patriotic.svg"
    },
    {
      id: 8,
      title: "Campus Greenery & Play Courtyard",
      category: "campus",
      categoryLabel: "Campus & Life",
      caption: "Safe outdoor play environment where children engage in social bonding during recess and free play.",
      image: "assets/images/gallery-courtyard.svg"
    },
    {
      id: 9,
      title: "Yoga & Mindfulness Morning Assembly",
      category: "sports",
      categoryLabel: "Sports Day",
      caption: "Morning holistic wellness sessions instilling focus, breathing awareness, and mental balance before lessons.",
      image: "assets/images/gallery-yoga.svg"
    }
  ],

  leadership: [
    {
      name: "Shivkumar Niyogi",
      role: "Management & Institutional Director",
      experience: "Founder & Educational Visionary",
      phone: "+91 9527749595",
      email: "niyogi.kumar@gmail.com",
      message: "At Icon English School, our guiding philosophy is simple: every child possesses distinct potential that deserves a nurturing, safe, and academically rigorous environment. Centrally located in Jyotinagar, Osmanpura Parisar, we are committed to building confident English communicators grounded in strong moral character."
    },
    {
      name: "Principal's Desk",
      role: "Head of Academics & Pedagogy",
      experience: "Experienced Educationalist",
      phone: "0240-2344693",
      email: "niyogi.kumar@gmail.com",
      message: "Our faculty combines time-tested pedagogical discipline with modern activity-based learning. We welcome every prospective parent to visit our Jyotinagar campus, observe our classrooms, and partner with us in shaping bright futures for our children."
    },
    {
      name: "Managing Committee & Advisory Board",
      role: "Governance & Student Welfare",
      experience: "Distinguished Academic & Community Leaders",
      phone: "+91 9527749595",
      email: "niyogi.kumar@gmail.com",
      message: "The managing committee continuously oversees institutional infrastructure, teacher development programs, safety protocols, and student welfare standards to ensure Icon English School remains a benchmark institution in Chhatrapati Sambhajinagar."
    }
  ],

  testimonials: [
    {
      parentName: "Sanjay Deshmukh",
      childDetail: "Parent of Grade 5 Student",
      quote: "The individual attention my daughter receives at Icon English School has transformed her confidence. Her English fluency and interest in science experiments have improved noticeably within one year.",
      rating: 5,
      location: "Osmanpura, Chhatrapati Sambhajinagar"
    },
    {
      parentName: "Pooja Kulkarni",
      childDetail: "Parent of Pre-Primary Student",
      quote: "Finding a safe, disciplined English medium school right behind Raka's Life Style Club has been a blessing. Mr. Shivkumar Niyogi and the entire staff are approachable, caring, and deeply committed to the kids.",
      rating: 5,
      location: "Jyotinagar, Chhatrapati Sambhajinagar"
    },
    {
      parentName: "Imran Khan",
      childDetail: "Parent of Grade 7 Student",
      quote: "Icon English School strikes the right balance between academic focus and extracurricular sports. The teachers emphasize concept clarity rather than rote memorization.",
      rating: 5,
      location: "Samarth Nagar, Chhatrapati Sambhajinagar"
    }
  ],

  faqs: [
    {
      q: "Where is Icon English School located?",
      a: "The school is conveniently located at 37, Sahakar Nagar, New Osmanpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005."
    },
    {
      q: "What grades are offered for admission?",
      a: "Admissions are open from Pre-Primary (Nursery, LKG, UKG) through Primary and Middle School levels. Please reach out to our admission desk for specific class seat availability."
    },
    {
      q: "What is the medium of instruction?",
      a: "The primary medium of instruction is English, supplemented with structured Marathi and Hindi language studies as per Maharashtra State Board norms."
    },
    {
      q: "What documents are required during admission?",
      a: "Original Birth Certificate, previous school progress report card, Transfer Certificate (for Grade 2 upwards), student and parents' Aadhar Card copies, and 4 passport-size photographs."
    },
    {
      q: "How can parents contact the administration?",
      a: "You can reach Shivkumar Niyogi directly at +91 9527749595 or our school landline 0240-2344693. You can also send an email to niyogi.kumar@gmail.com or visit between 8:30 AM and 4:30 PM Monday through Saturday."
    }
  ]
};

