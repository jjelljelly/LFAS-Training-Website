import { Document } from '@contentful/rich-text-types';

export interface Asset {
  sys: {
    id: string;
    type: 'Asset';
    createdAt: string;
    updatedAt: string;
    locale: string;
  };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface Course {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
    contentType?: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'ContentType';
      };
    };
    locale?: string;
  };
  fields: {
    pageTitle: string;
    introductionNew: Document; // Contentful rich text document
    specialistName?: string[]; // Array of specialist names
    slug?: string;
    questionAndAnswer?: Document; // Contentful rich text document combining question and answer
    procedureFee?: number; // Procedure fee
    bilatProcedureFee?: number; // Bilateral procedure fee
    imageOfIssue?: (Asset | {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    })[];
    video?: (Asset | {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    })[];
    // Deprecated fields kept for backward compatibility
    introduction?: string;
    question?: string;
    answer?: Document;
  };
}

export interface CourseCollection {
  sys: {
    type: 'Array';
  };
  total: number;
  skip: number;
  limit: number;
  items: Course[];
  includes?: {
    Asset?: Asset[];
    Entry?: any[];
  };
}

export interface ContentfulResponse<T> {
  sys: {
    type: string;
  };
  fields: T;
}

export interface Specialist {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
    contentType?: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'ContentType';
      };
    };
    locale?: string;
  };
  fields: {
    specialistName?: string;
    slug?: string;
    specialistBio?: Document;
    treatments?: string[];
    specialistPicture?: Asset | {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    };
    newConsultationFee?: number;
    insuranceCompanies?: string;
  };
}

export interface SpecialistCollection {
  sys: {
    type: 'Array';
  };
  total: number;
  skip: number;
  limit: number;
  items: Specialist[];
  includes?: {
    Asset?: Asset[];
    Entry?: any[];
  };
}