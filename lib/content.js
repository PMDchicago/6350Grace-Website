import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

function readFileSafe(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

function readYaml(relPath) {
  const fullPath = path.join(CONTENT_DIR, relPath);
  const raw = readFileSafe(fullPath);
  if (!raw) return {};
  return yaml.load(raw) || {};
}

export function getSiteConfig() {
  const site = readYaml('site.yaml');
  return {
    site_title: site.site_title || 'Grace Street Towers',
    phone_number: site.phone_number || '(773) 871-1845',
    email: site.email || 'manager@gracestreettowers.com',
    address: site.address || {
      street: '635 W. Grace St.',
      city: 'Chicago',
      state: 'IL',
      zip: '60613',
    },
    marketing_knobs: site.marketing_knobs || {
      hero_cta: 'View Apartments',
      secondary_cta: 'Schedule a Tour',
    },
    colors: site.colors || { primary: '#1a2744', secondary: '#c9a96e' },
    nav: site.nav || [],
    footer: site.footer || {},
  };
}

function getUnitPhotos(folderName, floorPlanPath) {
  if (!folderName) return [];
  const dir = path.join(IMAGES_DIR, folderName);
  if (!fs.existsSync(dir)) return [];
  const floorPlanFile = floorPlanPath ? path.basename(floorPlanPath) : null;
  const files = fs.readdirSync(dir)
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .filter(f => f !== '.gitkeep' && f !== floorPlanFile)
    .sort();
  return files.map(f => ({
    src: '/images/' + folderName + '/' + f,
    alt_text: f.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
  }));
}

export function getUnits() {
  const data = readYaml('units.yaml');
  const units = data?.units || [];
  return units.map(unit => ({
    ...unit,
    photos: unit.photos_folder ? getUnitPhotos(unit.photos_folder, unit.floor_plan) : (unit.photos || [])
  }));
}

export function getUnitBySlug(slug) {
  const units = getUnits();
  return units.find((u) => u.slug === slug) || null;
}

export function getGallery() {
  const data = readYaml('gallery.yaml');
  return data?.images || [];
}

export function getPage(slug) {
  const pagePath = path.join(CONTENT_DIR, 'pages', `${slug}.md`);
  const raw = readFileSafe(pagePath);

  if (!raw) {
    return {
      slug,
      title: slug,
      seo_description: '',
      hero_image: '',
      body: '',
      html: '',
    };
  }

  const parsed = matter(raw);
  const body = parsed.content?.trim() || '';

  return {
    slug,
    ...parsed.data,
    title: parsed.data?.title || slug,
    seo_description: parsed.data?.seo_description || '',
    hero_image: parsed.data?.hero_image || '',
    body,
    html: marked.parse(body),
  };
}
