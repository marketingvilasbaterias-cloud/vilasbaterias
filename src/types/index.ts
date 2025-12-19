export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface VehicleInquiry {
  name: string;
  email: string;
  phone: string;
  vehicle_brand: string;
  vehicle_model: string;
  vehicle_year: string;
  message: string;
}
