export type Course = {
  id: number | string;
  title: string;
  code: string;
  desc?: string;
};

export type Student = {
  id: number | string;
  studentId?: string;
  name: string;
  email?: string;
  course?: string;
};

export const courses: Course[] = [
  { id: 1, title: "Intro to Programming", code: "CS101", desc: "Learn basics of programming." },
  { id: 2, title: "Data Structures", code: "CS201", desc: "Common data structures." },
  { id: 3, title: "Databases", code: "CS220", desc: "Intro to relational DBs." },
  { id: 4, title: "Algorithms", code: "CS301", desc: "Algorithm design and analysis." },
  { id: 5, title: "Operating Systems", code: "CS330", desc: "OS concepts." },
  { id: 6, title: "Computer Networks", code: "CS320", desc: "Networking principles." },
];

export const students: Student[] = [
  { id: 1, studentId: "AJ1001", name: "Alice Johnson", email: "alice@example.com", course: "Intro to Programming" },
  { id: 2, studentId: "BS2002", name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
  { id: 3, studentId: "CL3003", name: "Carol Lee", email: "carol@example.com", course: "Databases" },
  { id: 4, studentId: "DG4004", name: "Daniel Green", email: "daniel.green@example.com", course: "Databases" },
  { id: 5, studentId: "EM5005", name: "Eva Martinez", email: "eva.martinez@example.com", course: "Operating Systems" },
  { id: 6, studentId: "FN6006", name: "Frank Nelson", email: "frank.nelson@example.com", course: "Networks" },
  { id: 7, studentId: "GK7007", name: "Grace Kim", email: "grace.kim@example.com", course: "Algorithms" },
  { id: 8, studentId: "HA8008", name: "Hector Alvarez", email: "hector.alvarez@example.com", course: "Databases" },
  { id: 9, studentId: "IZ9009", name: "Ivy Zhao", email: "ivy.zhao@example.com", course: "Intro to Programming" },
  { id: 10, studentId: "JT1010", name: "Jack Turner", email: "jack.turner@example.com", course: "Operating Systems" },
];
