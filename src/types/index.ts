export type ServiceName = 'Front-end' | 'Back-end' | 'Database' | 'CI/CD Pipeline' | 'Server'

export interface Service {
  name: ServiceName;
  icon: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  companyDetails: string;
  companyLogoUrl: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string | string[];
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  relatedService: ServiceName[];
}

export interface Language {
  name: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'NATIVE';
}

export interface Certification {
  name: string;
  issuer: string;
  issuerLogo: string;
  issueDate: string;
  expirationDate: string | null;
  credentialUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  institutionLogo: string;
  startDate: string;
  endDate: string | null;
  description: string;
  gpa: number | null;
  location: string;
  type: 'HIGH_SCHOOL' | 'ASSOCIATE' | 'BACHELOR' | 'MASTER' | 'DOCTORATE';
}

export interface Profile {
  firstName: string;
  lastName: string;
  jobTitle: string;
  aboutMe: string;
  email: string;
  phone: string;
  location: string;
  imageProfileUrl: string;
  imageAlt: string;
  socials: {
    github: string;
    linkedIn: string;
  },
  services: Service[];
  languages: Language[];
  workExperience: WorkExperience[];
  skills: Skill[];
  educationHistory: Education[];
  certifications: Certification[];
}