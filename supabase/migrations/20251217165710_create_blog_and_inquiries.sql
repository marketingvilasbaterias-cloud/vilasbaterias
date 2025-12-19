/*
  # Create blog posts and vehicle inquiries tables

  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly version of title
  - `excerpt` (text) - Short description for listings
  - `content` (text) - Full post content
  - `image_url` (text) - Featured image URL
  - `published` (boolean) - Whether post is published
  - `created_at` (timestamptz) - Post creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `vehicle_inquiries`
  - `id` (uuid, primary key) - Unique identifier for each inquiry
  - `name` (text) - Customer name
  - `email` (text) - Customer email
  - `phone` (text) - Customer phone
  - `vehicle_brand` (text) - Vehicle brand/manufacturer
  - `vehicle_model` (text) - Vehicle model
  - `vehicle_year` (text) - Vehicle year
  - `message` (text) - Additional message from customer
  - `created_at` (timestamptz) - Inquiry timestamp

  ## Security
  - Enable RLS on both tables
  - Blog posts are publicly readable
  - Vehicle inquiries can only be created by anyone (for form submission)
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vehicle_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  vehicle_brand text NOT NULL,
  vehicle_model text NOT NULL,
  vehicle_year text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can create vehicle inquiries"
  ON vehicle_inquiries
  FOR INSERT
  WITH CHECK (true);